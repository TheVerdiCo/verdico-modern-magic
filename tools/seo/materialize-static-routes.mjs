import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SITE_ORIGIN = "https://www.verdico.ru";

const EXTRA_STATIC_ROUTES = [
  "/ru/",
  "/ru/konsultatsiya-oplata/",
  "/ru/konsultatsiya-oplata/oplata/",
  "/oplata/",
  "/policy/",
];

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "../..");
const distDir = resolve(repoRoot, "dist");
const sitemapPath = join(distDir, "sitemap.xml");
const shellPath = join(distDir, "index.html");

const decodeXml = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");

const normalizeRoutePath = (pathname) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
};

const assertSafeRoutePath = (pathname) => {
  const segments = pathname.split("/").filter(Boolean);

  for (const segment of segments) {
    if (
      segment === "." ||
      segment === ".." ||
      segment.includes("\\") ||
      segment.includes(":")
    ) {
      throw new Error(`Unsafe static route segment in ${pathname}`);
    }
  }
};

const routeToIndexPath = (pathname) => {
  const normalizedPath = normalizeRoutePath(pathname);

  if (normalizedPath === "/") {
    return shellPath;
  }

  assertSafeRoutePath(normalizedPath);

  return join(distDir, ...normalizedPath.split("/").filter(Boolean), "index.html");
};

const getSitemapRoutes = () => {
  if (!existsSync(sitemapPath)) {
    throw new Error(`Missing sitemap: ${sitemapPath}`);
  }

  const sitemap = readFileSync(sitemapPath, "utf8");
  const locs = [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) =>
    decodeXml(match[1].trim()),
  );

  if (locs.length === 0) {
    throw new Error(`No <loc> entries found in ${sitemapPath}`);
  }

  return locs.map((loc) => {
    const url = new URL(loc);

    if (url.origin !== SITE_ORIGIN) {
      throw new Error(`Unexpected sitemap host: ${loc}`);
    }

    if (url.search || url.hash) {
      throw new Error(`Sitemap route must not include search/hash: ${loc}`);
    }

    return normalizeRoutePath(url.pathname);
  });
};

const assertShellCanBeCopied = () => {
  if (!existsSync(shellPath)) {
    throw new Error(`Missing application shell: ${shellPath}`);
  }

  const shell = readFileSync(shellPath, "utf8");
  const staticConflictPatterns = [
    /<link\s+rel=["']canonical["']/i,
    /<meta\s+property=["']og:url["']/i,
    /<meta\s+name=["']twitter:url["']/i,
    /<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i,
  ];

  for (const pattern of staticConflictPatterns) {
    if (pattern.test(shell)) {
      throw new Error(
        "Refusing to copy dist/index.html because it contains route-specific static SEO metadata.",
      );
    }
  }
};

const materializeStaticRoutes = () => {
  assertShellCanBeCopied();

  const routes = new Set([...getSitemapRoutes(), ...EXTRA_STATIC_ROUTES.map(normalizeRoutePath)]);
  let created = 0;
  let preserved = 0;

  for (const route of routes) {
    if (route === "/") {
      continue;
    }

    const targetPath = routeToIndexPath(route);

    if (existsSync(targetPath)) {
      preserved += 1;
      continue;
    }

    mkdirSync(dirname(targetPath), { recursive: true });
    copyFileSync(shellPath, targetPath);
    created += 1;
  }

  const nojekyllPath = join(distDir, ".nojekyll");
  if (!existsSync(nojekyllPath)) {
    writeFileSync(nojekyllPath, "");
  }

  console.log(
    `[materialize-static-routes] routes=${routes.size} created=${created} preserved=${preserved} nojekyll=true`,
  );
};

materializeStaticRoutes();
