import Vue from 'vue'
import App from './App.vue'
import VueFonovaUI from'./index'


Vue.use(VueFonovaUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
