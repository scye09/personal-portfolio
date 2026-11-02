import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ROUTE_PATHS } from "./src/routes.js";

// Static hosts like GitHub Pages only serve files that exist, so a fresh load
// of /about would 404. Copying index.html into each route's folder lets every
// URL load the app directly; 404.html covers anything else.
function routeEntries() {
  return {
    name: "route-entries",
    closeBundle() {
      const dist = resolve(import.meta.dirname, "dist");
      const index = resolve(dist, "index.html");
      for (const path of ROUTE_PATHS) {
        if (path === "/") continue;
        mkdirSync(resolve(dist, path.slice(1)), { recursive: true });
        copyFileSync(index, resolve(dist, path.slice(1), "index.html"));
      }
      copyFileSync(index, resolve(dist, "404.html"));
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), routeEntries()],
});
