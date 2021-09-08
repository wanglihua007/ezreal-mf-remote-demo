const { dependencies } = require('./package.json')

module.exports = (webpack) => ({
  output: {
    publicPath: 'http://localhost:50052/',
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'app1',
      remoteType: 'var',
      remotes: {
        app2: 'app2',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
  ],
})
