const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

  module.exports = {
    mode: "production",
    optimization: {
      minimize: true
    },
    entry: {
      lib: './index.js',
    },
    plugins: [
      new CopyPlugin([
        { from: './**/*.d.ts',
          to: './',
          ignore: ['node_modules/**']
        },
        { from: 'package.json',
          to: './',
          ignore: ['node_modules/**']
        },
        { from: './**/*.js',
          to: './',
          ignore: ['node_modules/**']
        },
        { from: './**/*.md',
          to: './',
          ignore: ['node_modules/**']
        },
      ]),
    ],
    output: {
      libraryTarget: 'umd',
      library: 'functors',
      filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'lib'),
    },
};
