import page from './page'
import Router from 'koa-router'
import data from '../data'
import Application, { Context } from 'koa'
const mock = new Router()
mock.get('/api/data', async (ctx: Context) => {
  ctx.body = data
})
const routers = [page, mock]
export default (app: Application) =>
  routers.forEach(router => app.use(router.routes()))
