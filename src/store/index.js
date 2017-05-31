import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import getters from './getters.js'
// import actions from './actions.js'
// import mutations from './mutations.js'

export default new Vuex.Store({
    state:{
      newsId: 0,
      newsPage: 1,
      tabNum:0
    },
    getters:{
      newsId (state) {
         return state.newsId;
      },
      newsPage (state) {
         return state.newsPage;
      },
      tabNum (state) {
         return state.tabNum;
      }
    },

     actions: {
       abcde: function ({commit},obj) {
         commit('changeTabNum',obj);
       },
       setNewsId: function ({commit},obj){
         commit('changeNewsId',obj);
       }
     },
     mutations: {
       changeTabNum(state,obj) {
         state.tabNum = obj.val;
       },
       changeNewsId(state,obj){
         state.newsId = obj.id;
       }
     }
})
