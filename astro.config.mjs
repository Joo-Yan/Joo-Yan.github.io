// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isProjectPages = Boolean(owner && repo && repo !== `${owner}.github.io`);

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : undefined,
  base: isProjectPages ? `/${repo}` : '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
