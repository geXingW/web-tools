// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from '@/router'
import store from 'js/store'
import ElementUI from 'element-ui'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css'

// JS
import 'bootstrap'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  template: '<App/>'
})
