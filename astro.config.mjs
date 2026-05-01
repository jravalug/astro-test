import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://myastrotest.netlify.app",
  integrations: [
    preact(),
    sitemap({
      filter: (page) => !page.includes('/tags/'),
    })
  ]
});