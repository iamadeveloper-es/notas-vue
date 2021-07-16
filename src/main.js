import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.filter('firstChar', function(value){
  if(!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase()
});

Vue.filter('removeSpaces', function(value){
  if(!value) return ''
  return value.replace(/\s+/g, '')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
