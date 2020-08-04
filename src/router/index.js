import Vue from 'vue'
import Router from 'vue-router'
// import BookList from '../layout/BookList'
// import find from '../layout/find'
import SecondTab from '../layout/SecondTab'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SecondTab',
      component: SecondTab
    }
  ]
})
