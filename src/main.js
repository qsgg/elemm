// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI, { DropdownItem, DropdownMenu } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:3000";
import {
  Tabbar, TabbarItem, Search, Col, Row, Icon, Swipe, SwipeItem,
  Grid, GridItem, Tab, Tabs, Divider, Button, Sidebar, SidebarItem, Card, TreeSelect,
  Sticky, Tag, Rate, Checkbox, CheckboxGroup, Lazyload, Skeleton, Overlay, Stepper, Popup, CellGroup, Cell
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
Vue.use(Popup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(ElementUI);
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')


