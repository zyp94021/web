import page from './page'
const routers = [page]
export default app => routers.forEach(router => app.use(router.routes()))
