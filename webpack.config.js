const webpack = require('webpack');
const config = require('frontend-webpack-config')(['graphQLClient']);

// config.plugins.unshift(
//   new webpack.ContextReplacementPlugin(
//     /moment[/\\]locale$/, /en|fr/
//   )
// );

// module: {
//   rules: [ // or "loaders" for webpack 1.x
//     { test: /\.graphql?$/, loader: 'webpack-graphql-loader' }
//   ]
// }

config.module.loaders.push({ test: /\.graphql?$/, loader: 'webpack-graphql-loader' });

module.exports = config;
