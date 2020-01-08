import { renderTemplate } from '../render'
import Router from 'koa-router'
// import routerConfig from '../../clientbuild/router.config'
const routerConfig = ['/', '/page1', '/page2']
import data from '../data'
import { setAsync, getAsync } from '../redis'
const page = new Router()
routerConfig.forEach(router => {
  page.get(router, async ctx => {
    const { request } = ctx
    const state = { title: 'server page1', data }

    console.time('start')
    let html = await getAsync(router)
    if (html) {
      ctx.body = html
      console.log(`${router} in redis`)
    } else {
      html = renderTemplate({
        request,
        state,
      })
      ctx.body = html
      setAsync(router, html, 'EX', 10)
    }
    console.timeEnd('start')
  })
})
export default page
