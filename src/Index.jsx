const React = require('react')
const ReactDOM = require('react-dom')
const { HashRouter } = require('react-router-dom')

import RouterApp from './RouterApp'

ReactDOM.render((
  <HashRouter basename={process.env.PUBLIC_URL}>
    <RouterApp />
  </HashRouter>
), document.getElementById("alex-aasen-io-website"))
