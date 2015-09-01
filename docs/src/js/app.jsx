"use strict"

global.uiRequire = function () {
  return require('../../../src')
}

const React = require('react')
const Router = require('react-router')
const AppRoutes = require('./app-routes.jsx')

// load language
//require('rctui-lang/zh-cn')

Router.create({
  routes: AppRoutes,
  scrollBehavior: Router.ScrollToTopBehavior
})
.run(function (Handler) {
  React.render(<Handler />, document.body)
})

// static files
require('file?name=index.html!../index.html')
require('../json/countries.json')
require('../json/form.json')
require('../json/text-value.json')
require('../json/tree.json')
