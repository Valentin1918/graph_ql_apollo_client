const webpack = require('webpack');
const config = require('frontend-webpack-config')(['graphQLClient']);

// config.module.loaders.push({ test: /\.graphql?$/, loader: 'webpack-graphql-loader' });
config.module.loaders.push(
  {
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader'
  }
);

module.exports = config;
