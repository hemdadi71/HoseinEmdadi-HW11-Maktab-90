// import { definConfig } from 'vite'
import jsconfigPaths from 'vite-jsconfig-paths'
const path = require('path')

export default {
  root: path.resolve('src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve('node_modules/bootstrap')
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  plugins: [jsconfigPaths()]
}
// definConfig({})
