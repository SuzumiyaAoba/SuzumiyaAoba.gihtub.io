import { defineConfig, squooshImageService } from "astro/config";

import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import remarkJoinCjkLines from "remark-join-cjk-lines";

// https://astro.build/config
export default defineConfig({
  site: "https://suzumiyaaoba.github.io",
  markdown: {
    gfm: true,
    shikiConfig: {
      theme: "min-light",
      langs: [],
      wrap: false,
    },
    remarkPlugins: [remarkJoinCjkLines, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  image: {
    service: squooshImageService(),
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
