import page from './page'
import api from './api'
import Application from 'koa'
const routers = [page, api]
export default (app: Application) =>
  routers.forEach(router => app.use(router.routes()))
