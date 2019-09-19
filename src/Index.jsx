const React = require('react')
const ReactDOM = require('react-dom')
const { BrowserRouter } = require('react-router-dom')

import RouterApp from './RouterApp'

ReactDOM.render((
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <RouterApp />
  </BrowserRouter>
), document.getElementById("alex-aasen-io-website"))
