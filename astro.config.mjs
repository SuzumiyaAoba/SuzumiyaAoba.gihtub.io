import { defineConfig, squooshImageService } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";
import rehypeKatex from "rehype-katex";
import rehypeStarryNight from "@microflash/rehype-starry-night";
import remarkJoinCjkLines from "remark-join-cjk-lines";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://suzumiyaaoba.github.io",
  markdown: {
    gfm: true,
    syntaxHighlight: false,
    shikiConfig: {
      theme: "min-light",
      langs: [],
      wrap: false
    },
    remarkPlugins: [remarkEmoji, remarkJoinCjkLines, remarkMath],
    rehypePlugins: [rehypeKatex, rehypeStarryNight]
  },
  image: {
    service: squooshImageService()
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap(), mdx()]
});