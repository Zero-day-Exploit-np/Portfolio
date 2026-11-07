import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Custom domain is configured via CNAME (bikramkumardas.com.np), so base is "/".
// If deploying as a project page without a custom domain, set base to "/Portfolio".
// @ts-check
// https://astro.build/config
export default defineConfig({
  site: "https://bikramkumardas.com.np",
  base: "/",
  trailingSlash: "ignore",
  build: {
    // Directory format => /page/index.html — works well for direct navigation
    // and page refresh on GitHub Pages.
    format: "directory",
  },
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
