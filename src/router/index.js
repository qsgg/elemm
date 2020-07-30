import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Find from '@/views/Find'
import My from '@/views/My'
import Search from '@/views/Search'
import meal from '@/views/meal'
import shop from '@/views/shop'
import Order from '@/views/Order'
Vue.use(VueRouter)
const routes = [

  {
    path: '/',
    redirect: 'index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/shop',
    component: shop
  },
  {
    path: '/Search',
    component: Search
  },
  {
    path: '/meal',
    component: meal
  },

  {
    path: '/Find',
    component: Find
  },
  {
    path: '/My',
    component: My
  },
  {
    path: '/Order',
    component: Order
  }
]

const router = new VueRouter({
  routes
})

export default router
