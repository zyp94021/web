import page from './page'
import Router from 'koa-router'
import data from '../data'
const mock = new Router()
mock.get('/api/data', async ctx => {
  ctx.body = data
})
const routers = [page, mock]
export default app => routers.forEach(router => app.use(router.routes()))
