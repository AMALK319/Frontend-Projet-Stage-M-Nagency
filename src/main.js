import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import config from './config'
Vue.use(VueRouter);

import '@/assets/css/main.css'

Vue.config.productionTip = false
Vue.prototype.$appUrl = config.appUrl

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')







