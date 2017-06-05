import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import getters from './getters.js'
// import actions from './actions.js'
// import mutations from './mutations.js'

export default new Vuex.Store({
  state: {
    newsId: 0,
    tabNum: 0,
    refresh: false,
    loading: false,
    checkhttp: false,
    loadingtop: 0,
    opacityload: 0,
    footerview: true,
    listPage: 1,
    listUrl: '',
    listNewsType: 'war',
    newslist0: [],
    newslist1: [],
    newslist2: [],
    newslist3: [],
    newslist4: [],
    newslist5: [],
    newslist6: [],
    newslist7: [],
    newslist8: [],
    // tabchange: {
    //   one: 'true',
    //   two: 'false',
    //   three: 'false',
    //   four: 'false',
    //   five: 'false',
    //   six: 'false',
    //   seven: 'false',
    //   eight: 'false',
    //   nine: 'false'
    //
    // },
    tabchangeif:true,
    tabchange:[true,false,false,false,false,false,false,false,false]
  },

  getters: {
    tabchange(state){
      return state.tabchange;
    },
    newslist0(state) {
      return state.newslist0;
    },
    newslist1(state) {
      return state.newslist1;
    },
    newslist2(state) {
      return state.newslist2;
    },
    newslist3(state) {
      return state.newslist3;
    },
    newslist4(state) {
      return state.newslist4;
    },
    newslist5(state) {
      return state.newslist5;
    },
    newslist6(state) {
      return state.newslist6;
    },
    newslist7(state) {
      return state.newslist7;
    },
    newslist8(state) {
      return state.newslist8;
    },
    listPage(state) {
      return state.listPage;
    },
    listUrl(state) {
      state.listUrl = 'http://wangyi.butterfly.mopaasapp.com/news/api?type=' + state.listNewsType + '&page=' + state.listPage + '&limit=15';
      return state.listUrl;
    },
    listNewsType(state) {
      return state.listNewsType;
    },
    newsId(state) {
      return state.newsId;
    },
    newsPage(state) {
      return state.newsPage;
    },
    tabNum(state) {
      return state.tabNum;
    },
    refresh(state) {
      return state.refresh;
    },
    loading(state) {
      return state.loading;
    },
    checkhttp(state) {
      return state.checkhttp;
    },
    loadingtop(state) {
      return state.loadingtop;
    },
    opacityload(state) {
      return state.opacityload;
    },
    footerview(state) {
      return state.footerview;
    }
  },

  actions: {
    abcde: function({
      commit
    }, obj) {
      commit('changeTabNum', obj);
    },
    setNewsId: function({
      commit
    }, obj) {
      commit('changeNewsId', obj);
    },
    show_refresh: function({
      commit
    }) {
      commit('showRefresh');
    },
    hide_refresh: function({
      commit
    }) {
      commit('hideRefresh');
    },
    show_loading: function({
      commit
    }) {
      commit('showLoading');
    },
    hide_loading: function({
      commit
    }) {
      commit('hideLoading');
    },
    show_checkhttp: function({
      commit
    }) {
      commit('showCheckhttp');
    },
    hide_checkhttp: function({
      commit
    }) {
      commit('hideCheckhttp');
    },
    shezhitabchange: function ({commit},obj) {
      commit('setTabchange',obj);
    }
  },
  mutations: {
    setListPage(state) {
      state.listPage++;
      return state.listPage;
    },
    clearListPage(state) {
      state.listPage = 1;
      return state.listPage;
    },
    changeTabNum(state, obj) {
      state.tabNum = obj.val;
      if (obj.val == 0) {
        state.listNewsType = 'war';
      } else if (obj.val == 1) {
        state.listNewsType = 'sport';
      } else if (obj.val == 2) {
        state.listNewsType = 'tech';
      } else if (obj.val == 3) {
        state.listNewsType = 'edu';
      } else if (obj.val == 4) {
        state.listNewsType = 'ent';
      } else if (obj.val == 5) {
        state.listNewsType = 'money';
      } else if (obj.val == 6) {
        state.listNewsType = 'gupiao';
      } else if (obj.val == 7) {
        state.listNewsType = 'travel';
      } else if (obj.val == 8) {
        state.listNewsType = 'lady';
      }
      console.log(state.listUrl);
    },
    changeNewsId(state, obj) {
      state.newsId = obj.id;
    },
    showRefresh(state) {
      state.refresh = true;

    },
    hideRefresh(state) {
      state.refresh = false;

    },
    showLoading(state) {
      state.loading = true;
    },
    hideLoading(state) {
      state.loading = false;
    },
    showCheckhttp(state) {
      state.checkhttp = true;
    },
    hideCheckhttp(state) {
      state.checkhttp = false;
    },
    setLoadingtop(state, val) {

      if (val >= 150) {
        state.loadingtop = 150;
        state.mopacityload = 1;
      } else {
        state.loadingtop = val;
        state.mopacityload = val / 150;
      }
    },
    showFooterview(state) {
      state.footerview = true;
    },
    hideFooterview(state) {
      state.footerview = false;
    },
    aaaaaaaa(state){

    },
    setwar(state, val) {

      for (var i = 0; i < val.length; i++) {
        state.newslist0.push(val[i]);
      }
    },
    setsport(state,data) {

      for (var i = 0; i < data.length; i++) {
        state.newslist1.push(data[i]);
      }
    },
    settech(state,data) {
      for (var i = 0; i < data.length; i++) {
        state.newslist2.push(data[i]);
      }
    },
    setedu(state,data) {
      for (var i = 0; i < data.length; i++) {
        state.newslist3.push(data[i]);
      }
    },
    setent(state,data) {
      for (var i = 0; i < data.length; i++) {
        state.newslist4.push(data[i]);
      }
    },
    setmoney(state,data) {
      for (var i = 0; i < data.length; i++) {
        state.newslist5.push(data[i]);
      }
    },
    setgupiao(state,data) {
      for (var i = 0; i < data.length; i++) {
        state.newslist6.push(data[i]);
      }
    },
    settravel(state,data) {
      for (var i = 0; i < data.length; i++) {
        state.newslist7.push(data[i]);
      }
    },
    setlady(state,data) {
      for (var i = 0; i < data.length; i++) {
        state.newslist8.push(data[i]);
      }
    },
    setTabchange(state,obj){
      // if (state.tabchangeif == false) {
      //   if (val == 0) {
      //     state.tabchange[0] = true;
      //   }else if (val == 1) {
      //     state.tabchange[1] = true;
      //   }else if (val == 2) {
      //     state.tabchange[2] = true;
      //   }else if (val == 3) {
      //     state.tabchange[3] = true;
      //   }else if (val == 4) {
      //     state.tabchange[4] = true;
      //   }else if (val == 5) {
      //     state.tabchange[5] = true;
      //   }else if (val == 6) {
      //     state.tabchange[6] = true;
      //   }else if (val == 7) {
      //     state.tabchange[7] = true;
      //   }else if (val == 8) {
      //     state.tabchange[8] = true;
      //   }
      //   console.log(state.tabchange);
      // }
      var val = obj.val;
        if (val == 0) {
          state.tabchange[0] = true;
        }else if (val == 1) {
          state.tabchange[1] = true;
        }else if (val == 2) {
          state.tabchange[2] = true;
        }else if (val == 3) {
          state.tabchange[3] = true;
        }else if (val == 4) {
          state.tabchange[4] = true;
        }else if (val == 5) {
          state.tabchange[5] = true;
        }else if (val == 6) {
          state.tabchange[6] = true;
        }else if (val == 7) {
          state.tabchange[7] = true;
        }else if (val == 8) {
          state.tabchange[8] = true;
        }
console.log(state.tabchange);
    },
    setTabchangeif(state){

      state.tabchangeif = false;

    },
    quxiaoTabchangeif(state){
        state.tabchangeif = true;
    }
  }
})
