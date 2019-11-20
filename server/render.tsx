import path from 'path'
import pug from 'pug'
// import App from '../ssrbuild/main.js'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import Router from '../clientbuild/Router'
import createStore from '../clientbuild/store'
const manifest = require('../public/manifest.json')
const testJs = key => /\.js$/.test(key)
const testCss = key => /\.css$/.test(key)
const testImg = key => /\.(png|jpg|gif)$/.test(key)
const render = (req, initState) => {
  const store = createStore(initState)
  return (
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <Router />
      </StaticRouter>
    </Provider>
  )
}

export const renderTemplate = ({ request, state }) => {
  const htmlTpl = pug.compileFile(
    path.resolve(__dirname, '../template/index.pug')
  )
  const keys = Object.keys(manifest)
  const css = keys.filter(testCss)
  const js = keys.filter(testJs)
  let html = htmlTpl({
    server: true,
    title: 'server',
    state: `'${JSON.stringify(state)}'`,
    // html: renderToString(App.default(request, state)),
    html: renderToString(render(request, state)),
    js: js.map(key => manifest[key]),
    css: css.map(key => manifest[key]),
  })

  return html
}
