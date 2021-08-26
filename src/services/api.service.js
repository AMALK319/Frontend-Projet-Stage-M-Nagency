import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "../router";

import JwtService from "./jwt.service";

const ApiService = {
    init(){
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = this.$app_url;
        if(JwtService.getToken().token){
            Vue.axios.defaults.headers.common = {
                'X-Requested-With': 'XMLHttpRequest',
                "Authorization":`Bearer ${JwtService.getToken().token}`,
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
            };
        }
    },

    setHeader(){
        Vue.axios.defaults.headers.common = {
            'X-Requested-With': 'XMLHttpRequest',
            "Authorization":`Bearer ${JwtService.getToken().token}`,
            'Content-Type': 'multipart/form-data'
        };
    },

    get(resource, slug = "") {
        if(slug!==""){
            return Vue.axios.get(`${resource}/${slug}`).catch(error => {
                console.log(error)
                console.log(error.response)
                if (error.response.status === 401 || error.response.status === 403) {
                    router.push({ name: 'Auth.signIn' })
                }
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            });
        }
        else{
            return Vue.axios.get(`${resource}`).catch(error => {
                console.log(error)
                console.log(error.response)
                if (error.response.status === 401 || error.response.status === 403) {
                    router.push({ name: 'Auth.signIn' })
                }
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            });
        }
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params).catch(error => {
            console.log(error)
            console.log(error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                router.push({ name: 'Auth.signIn' })
            }
            return new Promise((resolve, reject) => {
                reject(error);
            });
        });
    },

    put(resource, params) {
        return Vue.axios.put(`${resource}`, params).catch(error => {
            console.log(error)
            console.log(error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                router.push({ name: 'Auth.signIn' })
            }
            return new Promise((resolve, reject) => {
                reject(error);
            });
        });
    },

    delete(resource, params) {
        return Vue.axios.delete(`${resource}`, params).catch(error => {
            console.log(error)
            console.log(error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                router.push({ name: 'Auth.signIn' })
            }
            return new Promise((resolve, reject) => {
                reject(error);
            });
        });
    },
};

export default ApiService;
