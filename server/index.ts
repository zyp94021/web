import koaStatic from 'koa-static'
import koa from 'koa'
import path from 'path'
import { renderTemplate } from './render'
import { renderToString } from 'react-dom/server'
import App from '../build/bundle.js'
import Router from 'koa-router'

const app = new koa()
app.use(koaStatic(path.resolve(__dirname, '../public')))

const page = new Router()
page.get('/page1', async ctx => {
  const { request } = ctx
  const state = { title: 'server' }
  let html = renderTemplate({
    html: renderToString(App.default(request, state)),
    state: `'${JSON.stringify(state)}'`,
  })
  ctx.body = html
})
page.get('/page2', async ctx => {
  const { request } = ctx
  const state = { title: 'server' }
  let html = renderTemplate({
    html: renderToString(App.default(request, state)),
    state: `'${JSON.stringify(state)}'`,
  })
  ctx.body = html
})
app.use(page.routes()).use(page.allowedMethods())
app.listen(3000)
