import { renderTemplate } from '../render'
import Router from 'koa-router'
const page = new Router()
page.get('/page1', async ctx => {
  const { request } = ctx
  const state = { title: 'server page1' }
  let html = renderTemplate({
    request,
    state: `'${JSON.stringify(state)}'`,
  })
  ctx.body = html
})
page.get('/page2', async ctx => {
  const { request } = ctx
  const state = { title: 'server page2' }
  let html = renderTemplate({
    request,
    state: `'${JSON.stringify(state)}'`,
  })
  ctx.body = html
})
export default page
