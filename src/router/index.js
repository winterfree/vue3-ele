import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App'

const MSite = () => import('@/views/msite/MSite')

const routes = [
  {
    path: '/',
    component: App, // 顶层路由，对应index.html
    children: [
      {
        path: '',
        redirect: '/msite'
      },
      {
        path: '/msite',
        component: MSite
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
