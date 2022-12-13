const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextTranslate = require("next-translate");

module.exports = (withBundleAnalyzer(nextTranslate({
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    config.resolve.fallback = { fs: false };
    return config;
  },
})));