const path = require('path')

const APP_DIR = path.resolve(__dirname, 'client')

module.exports = {
  resolve: {
    alias: {
      api: path.resolve(APP_DIR + '/api'),
      components: path.resolve(APP_DIR + '/components'),
      hooks: path.resolve(APP_DIR + '/hooks'),
      pages: path.resolve(APP_DIR + '/pages'),
      scss: path.resolve(APP_DIR + '/scss'),
      constants: path.resolve(APP_DIR + '/static/constants'),
      variables: path.resolve(APP_DIR + '/static/variables'),
      fonts: path.resolve(APP_DIR + '/static/fonts'),
      img: path.resolve(APP_DIR + '/static/img'),
      utils: path.resolve(APP_DIR + '/utils')
    }
  }
}
