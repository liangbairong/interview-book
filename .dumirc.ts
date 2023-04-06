import { defineConfig } from 'dumi';
import { name } from './package.json';
const repo = name;
export default defineConfig({
  title: repo,
  outputPath: 'docs-dist',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  themeConfig: {
    name: 'text',
  },
});
