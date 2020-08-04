import Vue from 'vue'
import Router from 'vue-router'
import My from '../views/My'
import Login from '../views/Login'
import PointsMall from '../views/PointsMall'
import Lading from '../views/Lading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/my'
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Lading',
      name: 'Lading',
      component: Lading
    },
    {
      path: '/PointsMall',
      name: 'PointsMall',
      component: PointsMall
    }
  ]
})
