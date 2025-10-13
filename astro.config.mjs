import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel"; // ❌ hapus '/server'

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: vercel(),
});
