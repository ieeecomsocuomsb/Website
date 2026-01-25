import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const SITE_URL = "https://comsoc-website.vercel.app";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  define: {
    __SITE_URL__: JSON.stringify(SITE_URL),
  },
  plugins: [
    react(),
    {
      name: "html-transform",
      transformIndexHtml(html) {
        return html.replace(/%SITE_URL%/g, SITE_URL);
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: [
    "**/*.JPG",
    "**/*.JPEG",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.webp",
  ],
}));
