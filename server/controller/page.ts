import { renderTemplate } from '../render'
import Router from 'koa-router'
// import routerConfig from '../../clientbuild/router.config'
const routerConfig = [{ path: '/page1' }, { path: '/page2' }]
import data from '../data'
const page = new Router()
routerConfig.forEach(router => {
  page.get(router.path, async ctx => {
    const { request } = ctx
    const state = { title: 'server page1', data }
    let html = renderTemplate({
      request,
      state,
    })
    ctx.body = html
  })
})
export default page
