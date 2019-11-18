import koaStatic from 'koa-static'
import koa from 'koa'
import path from 'path'
import controller from './controller'
const app = new koa()
app.use(koaStatic(path.resolve(__dirname, '../public')))
controller(app)
app.listen(3000)
