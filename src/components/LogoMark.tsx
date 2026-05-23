interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Brand V mark rendered from the same image asset as the favicon
 * (/apple-touch-icon.png). Adds a glassy frame, a glossy radial highlight,
 * and a single sheen sweep — all driven by a CSS animation that plays on mount.
 *
 * Respects prefers-reduced-motion.
 */
const LogoMark = ({ className = "", size = "md" }: LogoMarkProps) => {
  const sizeClass =
    size === "sm" ? "logo-mark--sm" : size === "lg" ? "logo-mark--lg" : "logo-mark--md";

  return (
    <span className={`logo-mark ${sizeClass} ${className}`} aria-hidden="true">
      <img
        src="/apple-touch-icon.png"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="logo-mark-img"
      />
    </span>
  );
};

export default LogoMark;
