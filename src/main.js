import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入初始化样式
import 'normalize.css'
// 引入lib-flexible
import 'lib-flexible'
import *as echarts from 'echarts'
// 挂载到vue原型上
Vue.prototype.$echarts = echarts
// 导入腾讯地图，获取用户当前位置
import { VueJsonp } from 'vue-jsonp'
// Vue.prototype.$jsonp=VueJsonp
Vue.use(VueJsonp)
// 引入axios
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
