import Vue from "vue";
import Vuex from "vuex";
import JwtService from "./services/jwt.service";
import createPersistedState from "vuex-persistedstate";
import ApiService from "./services/api.service";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
      state: {
        user: null,
        status: '',
        space_name: '',
        token: JwtService.getToken().token || '',
        pre_loader: false,
        saved: false,
        
       
       
      },
      actions: {
        login({ commit }, userData) {
          return new Promise((resolve, reject) => {
            commit('auth_request')
            axios.post("http://127.0.0.1:8000/api/user-login1", userData)
                .then(response => {
                  const token = response.data.token;
                  const space = response.data.space_name;
                  const payload = {
                    user: response.data.user[0],
                    space_name: response.data.space_name,
                    token: response.data.token,
                
                  
                  };
                  JwtService.setToken(token, space);
                  ApiService.setHeader();
                  commit('auth_success', { payload });
                  console.log(response.data.user.email);
                  resolve(response);
                })
                .catch(error => {
                  console.log("login error", error);
                  commit('auth_error');
                  JwtService.unsetToken();
                  reject(error);
                })

          })
        },
        logout({ commit }) {
          commit('logout');
        }
      },
      mutations: {
        auth_request(state) {
          state.status = 'loading'
        },
        auth_success(state, { payload }) {
          state.status = 'success'
          state.user = payload.user;
          state.token = payload.token;
          state.space_name = payload.space_name;
        },
        auth_error(state) {
          state.status = 'error'
        },
        logout(state) {
          state.status = '';
          state.token = '';
          state.user = null;
          state.space_name = '';
          JwtService.unsetToken();
        },
        loader(state) {
          state.pre_loader = !state.pre_loader
        },
       
      },
      getters: {
       
        getLoggedUser(state){
          return state.user;
        },
        getSpaceNameUser(state){
          return state.space_name;
        },
      },
      plugins: [createPersistedState()],

});
