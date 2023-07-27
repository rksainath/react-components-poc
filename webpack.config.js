// webpack.config.js
const path = require('path')

module.exports = {
  entry: {
    hello: './src/Hello.js',
    goodbye: './src/Goodbye.js',
    cardDetails: './src/CardDetails.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '[name]', // Expose the components as global variables
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}
