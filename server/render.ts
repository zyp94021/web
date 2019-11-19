import path from 'path'
import pug from 'pug'
import App from '../ssrbuild/main.js'
import { renderToString } from 'react-dom/server'
export const renderTemplate = ({ request, state }) => {
  const htmlTpl = pug.compileFile(
    path.resolve(__dirname, '../template/index.pug')
  )
  return htmlTpl({
    server: true,
    title: 'server',
    state,
    html: renderToString(App.default(request, state)),
  })
}
