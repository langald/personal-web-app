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
  }
}