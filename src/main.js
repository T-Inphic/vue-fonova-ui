import Vue from 'vue'
import App from './App.vue'
import FsVueUI from'./index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(FsVueUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
