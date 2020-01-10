import Router from 'koa-router'
import data from '../data'
import { Context } from 'koa'
const mock = new Router()
mock.get('/api/data', async (ctx: Context) => {
  ctx.body = data
})
export default mock
