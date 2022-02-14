import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Layout from '@/layout'

export const constantRoutes = [

]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router