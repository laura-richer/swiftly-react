const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass');


module.exports = withOffline(withSass({
  webpack: (config) => {
    // Launch JavaScript analytics in analyze mode
    if (process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }

    // Load icons as an SVG sprite
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Load images then compress in production mode
    config.module.rules.push({
      test: /\.(gif|jpe?g|png|svg)$/,
      include: path.resolve(__dirname, 'static/images'),
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/images/',
            publicPath: '_next/static/images/',
          },
        },
        {
          loader: 'image-webpack-loader',
          options: {
            disable: process.env.NODE_ENV === 'development',
          },
        },
      ],
    });

    // Load font face files
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|svg)$/,
      include: path.resolve(__dirname, 'static/fonts'),
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/fonts/',
            publicPath: '_next/static/fonts/',
          },
        },
      ],
    });

    return config;
  },
}));
