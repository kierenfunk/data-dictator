const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const srcDir = path.join(__dirname, 'src');

module.exports = {
  mode: 'production',
  entry: {
    background: path.join(srcDir, 'background.ts'),
    popup: path.join(srcDir, 'views/popup.tsx'),
    contentScript: path.join(srcDir, 'contentScript.ts'),
    inject: path.join(srcDir, 'inject.js'),
  },
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: '.', to: '../', context: 'public' }],
      options: {},
    }),
  ],
};
