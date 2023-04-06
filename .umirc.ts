import { defineConfig } from 'dumi';
const repo = 'interview-book';
export default defineConfig({
  title: repo,
  // favicon: 'http://www.elelive.tv/img/Elelive_logo.png',
  // logo: 'http://www.elelive.tv/img/Elelive_logo.png',
  outputPath: 'docs-dist',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  mode: 'doc',
  exportStatic: {},
  styles: [
    `.__dumi-default-mobile-demo-layout{padding: 0 !important;}*{list-style: none;margin: 0;padding: 0;}`,
  ],
  // themeConfig: {
  //   hd: {
  //     // umi-hd 的 750 高清方案（默认值）
  //     //   [
  //     //     { mode: 'vw',
  //     //       options: [100,750]
  //     //     }
  //     // ],
  //
  //     // 根据不同的设备屏幕宽度断点切换高清方案
  //     rules: [
  //       { maxWidth: 375, mode: 'vw', options: [100, 750] },
  //       { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
  //     ],
  //     // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
  //   },
  // },
  chainWebpack: (config) => {
    config.module
      .rule('mp4')
      .test(/\.(mp4|zip)(\?.*)?$/)
      .use('file-loader')
      .loader(require.resolve('file-loader'))
      .options({
        name: 'static/[name].[hash:8].[ext]',
        esModule: false,
      });
  },
});
