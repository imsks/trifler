const withPWA = require('next-pwa');

module.exports = withPWA({
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/' },
    };
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});
