import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Homepage from "./components/Homepage.vue"
import CycleRoute from "./components/CycleRoute.vue"
import EmployerInfo from "./components/EmployerInfo.vue"
import RouteDetails from "./components/RouteDetails.vue"
import C404 from "./components/404.vue"
import BikeStore from "./components/BikeStore.vue"
import HowTo from "./components/HowTo.vue"

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BaiduMap from 'vue-baidu-map'


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(BaiduMap, {
  ak: '7q1MpORy6lp32hrYFTY2OnuWfaylbnsV'
})
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Homepage},
  {path: '/CycleRoute', component: CycleRoute},
  {path: '/EmployerInfo', component: EmployerInfo},
  {path: '/BikeStore', component: BikeStore},
  {path: '/Route/:rid', component: RouteDetails},
  {path: '/HowTo', component: HowTo},
  {path: '*', component: C404}
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
