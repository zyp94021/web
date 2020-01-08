import * as path from 'path'
import * as pug from 'pug'
// import App from '../ssrbuild/main.js'
import { renderToString } from 'react-dom/server'
import { Request } from 'koa'
// import React from 'react'
// import { Provider } from 'react-redux'
// import { StaticRouter } from 'react-router-dom'
// import Router from '../clientbuild/Router'
// import createStore from '../clientbuild/store'
const manifest = require('../public/manifest.json')
const testJs = (key: string) => /\.js$/.test(key)
const testCss = (key: string) => /\.css$/.test(key)
// const render = (req, initState) => {
//   const store = createStore(initState)
//   return (
//     <Provider store={store}>
//       <StaticRouter location={req.url}>
//         <Router />
//       </StaticRouter>
//     </Provider>
//   )
// }
const render = require('../ssrbuild/main').default

export const renderTemplate = ({
  request,
  state,
}: {
  request: Request
  state: Object
}) => {
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
