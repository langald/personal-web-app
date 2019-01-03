var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
  /*
    baseUrl: process.env.NODE_ENV === 'production'
                ? '/personal-web-app/'
                : '/',
    */
  outputDir: 'docs',
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return
  
    return {
      plugins: [
        new PrerenderSpaPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'docs'),
          // List of routes to prerender
          [ '/', '/about', '/movielist', '/favorited', ],
          {
            // options
          }
        ),
      ],
    }
  },
  chainWebpack: config => {
    // file-loader
    config.module
      .rule('graphql')
      .test(/\.pdf|PDF$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        // modify the options...
        return {
          name: '[path][name].[ext]',
          outputPath: 'filesFromWebpack/'
        }
      })
      .end()
  }
}