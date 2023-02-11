import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

// Not imported
// https://github.com/astro-community/flow

// https://docs.astro.build/en/guides/integrations-guide/image/
import image from "@astrojs/image"

// https://docs.astro.build/en/guides/integrations-guide/mdx/
import mdx from "@astrojs/mdx"

// https://github.com/astro-community/astro-compress#readme
import compress from "astro-compress"

export default defineConfig({
    site: "https://sanderdatema.github.io",
    integrations: [sitemap(), image(), mdx(), compress()],
})
