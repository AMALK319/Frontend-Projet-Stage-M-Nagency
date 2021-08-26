import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import ApiService from './services/api.service'
import router from './router'
import config from './config'
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
Vue.use(VueRouter);

import '@/assets/css/main.css'

Vue.config.productionTip = false
Vue.prototype.$appUrl = config.appUrl
ApiService.init();

new Vue({
  router,
 store,
  render: h => h(App),
}).$mount('#app')

/* export default new Vuex.Store({
  state: {
    user: {

    }
    
  },
  actions: {
    loginUser(user){
      axios
      .post(this.$appUrl + "/api/user-login1", {
          email: user.email,
          password: user.password,
      })
      .then((response) => {
        console.log( response.data);
        if ( response.data.access_token) {
            localStorage.setItem('user_access_token' ,  response.data.access_token)
        
        } 
      })
     
  }
   
  },
  

}); 
 */





