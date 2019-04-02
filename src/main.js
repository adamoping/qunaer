// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Header from './pages/city/components/Header.vue'
import Search from './pages/city/components/Search.vue'
import City from './pages/city/City.vue'
import router from './router'
import axios from 'axios'
import fastClick from 'fastclick'
import store from './store/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/font/iconfont.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$http=axios
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
