import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://sanderdatema.github.io",
  integrations: [sitemap(), image(), mdx()]
});