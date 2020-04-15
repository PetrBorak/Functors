const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

  module.exports = {
    mode: "development",
    optimization: {
      minimize: false
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
      globalObject: 'this',
      libraryTarget: 'umd',
      library: 'functors',
      filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'lib'),
    },
};
