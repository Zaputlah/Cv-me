import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const rawSite =
  process.env.SITE ||
  process.env.PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "http://localhost:4321";

const site = rawSite.startsWith("http") ? rawSite : `https://${rawSite}`;

export default defineConfig({
  site,
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: vercel(),
});
