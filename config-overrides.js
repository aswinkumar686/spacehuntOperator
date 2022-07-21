const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: function (config) {
    const fallback = config.resolve.fallback || {};

    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ])
    return config;
},
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve(__dirname, './client/src/index.js');
    paths.appSrc = path.resolve(__dirname, './client/src');
    paths.public_url = path.resolve(__dirname, './client/public');
    return paths;
  },
};
