import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://sanderdatema.github.io",
  integrations: [sitemap(), image()]
});