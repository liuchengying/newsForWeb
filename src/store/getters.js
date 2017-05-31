const state = {
  newsId: 0,
  newsPage: 1,
  tabNum:0
}

const getters = {
  newsId (state) {
     return state.newsId;
  },
  newsPage (state) {
     return state.newsPage;
  },
  tabNum (state) {
     return state.tabNum;
  }
}

export default{
  state,
  getters
}
