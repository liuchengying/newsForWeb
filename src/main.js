// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

import loading from './components/loading'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(loading);


axios.interceptors.request.use(function (config) {
  store.dispatch('show_loading');
  store.dispatch('show_checkhttp');
  store.commit('setTabchangeif');
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  store.dispatch('hide_loading');
  store.dispatch('hide_checkhttp');
  store.commit('quxiaoTabchangeif');
  return response;
}, function (error) {

  return Promise.reject(error);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
