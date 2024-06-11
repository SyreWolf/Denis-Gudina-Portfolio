import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), tailwind(), robotsTxt()],
  site: 'https://denis-gudina.netlify.app/'
});