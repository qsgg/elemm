import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueAMap from 'vue-amap'
// import VueAMap from 'vue-amap'
// import axios from 'axios'

import {
  Tabbar, TabbarItem, Search, Col, Row, Icon, Swipe, SwipeItem,
  Grid, GridItem, Tab, Tabs, Divider, Button, Sidebar, SidebarItem, Card, TreeSelect,
  Sticky, Tag, Rate, Checkbox, CheckboxGroup, Lazyload, Skeleton, Overlay, Stepper
} from 'vant'
import 'vant/lib/index.css'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Col)
Vue.use(Row)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Divider)
Vue.use(Button)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Card)
Vue.use(TreeSelect)
Vue.use(Sticky)
Vue.use(Tag)
Vue.use(Rate)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Lazyload)
Vue.use(Skeleton)
Vue.use(Overlay)
Vue.use(Stepper)
Vue.use(ElementUI)
// Vue.use(VueAMap)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 初始化vue-amap
// VueAMap.initAMapApiLoader({
//   // 高德key
//   key: '537dc8ecbb19d86309c4d251ad196f18',
//   // 插件集合 （插件按需引入）
//   plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
//   v: '1.4.4',
//   uiVersion: '1.0'
// })
