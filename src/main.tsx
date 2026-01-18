import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle static-host SPA fallbacks (e.g. public/404.html -> /?redirect=/policy)
const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect");
if (redirect) {
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(<App />);
