import path from 'path'
import pug from 'pug'
export const renderTemplate = data => {
  const htmlTpl = pug.compileFile(
    path.resolve(__dirname, '../template/index.pug')
  )
  return htmlTpl({ ...data, server: true, title: 'server' })
}
