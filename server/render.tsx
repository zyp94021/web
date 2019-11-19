import path from 'path'
import pug from 'pug'
// import App from '../ssrbuild/main.js'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import Router from '../clientbuild/Router'
import createStore from '../clientbuild/store'
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
  return htmlTpl({
    server: true,
    title: 'server',
    state,
    // html: renderToString(App.default(request, state)),
    html: renderToString(render(request, state)),
  })
}
