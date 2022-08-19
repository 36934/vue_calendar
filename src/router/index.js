import { createRouter, createWebHashHistory } from 'vue-router'
import Day from '@/views/Day'

const routes = [
  {
    path:'/',
    name:'day',
    component:Day
  },
  {
    path:'/month',
    name:'month',
    component: () => import('../views/Month.vue')
   },
   {
     path:'/year',
     name:'year',
     component: () => import('../views/Year.vue')
   },
   {
     path:'/:pathMatch(.*)*',  // 配置404找不到时的默认路由
     name:'default',
     redirect:'/'

   }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
