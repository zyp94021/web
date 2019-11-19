import { renderTemplate } from '../render'
import Router from 'koa-router'
import routerConfig from '../../clientbuild/router.config'

const page = new Router()
routerConfig.forEach(router => {
  page.get(router.path, async ctx => {
    const { request } = ctx
    const state = { title: 'server page1' }
    let html = renderTemplate({
      request,
      state: `'${JSON.stringify(state)}'`,
    })
    ctx.body = html
  })
})
export default page
