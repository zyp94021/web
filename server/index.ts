import koaStatic from 'koa-static'
import koa from 'koa'
import path from 'path'
import controller from './controller'
import User from './model/User'
import sequelize from './model'
const app = new koa()
app.use(koaStatic(path.resolve(__dirname, '../public')))
controller(app)
// ;(async () => {
//   await sequelize.sync()
//   await Yuyue.create({
//     phone: '123456',
//     platform: '123',
//     token: '123',
//   })
// })()

app.listen(3000)


