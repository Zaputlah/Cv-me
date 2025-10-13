import { defineConfig } from 'astro/config'; 
import mdx from '@astrojs/mdx'; 
import sitemap from '@astrojs/sitemap'; 
import tailwind from "@astrojs/tailwind";

export default defineConfig
({ 
  // site: 'https://astrofy-template.netlify.app', 
   output: "server", 
   integrations: [mdx(), sitemap(), tailwind()], 
   devOptions: { toolbar: false }
   
  });