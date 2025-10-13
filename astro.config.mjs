import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: "server", // tetap "server"
  adapter: vercel(),
  site: 'https://mycvblog.vercel.app',
  integrations: [
    mdx(),
    tailwind(),
    sitemap(),
  ],
  devOptions: {
    toolbar: false
  }
});
