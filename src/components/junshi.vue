<template>
<div class="news" id="weiyi">
  <ul class="news-ul">
    <li class="news-li" v-for='item in news' @click='newslink(item)'>
      <div class="left">
        <p class="left-text" v-text='item.title'></p>
        <p class="left-text2" v-text='item.time'></p>
      </div>
      <div class="right">
        <img class="right-img" :src="item.imgurl" alt="">
      </div>
    </li>
    <li class="jiazaigengduo" @click='shagnlajiazai'>上拉加载更多...</li>
  </ul>
</div>
</template>

<script>
var anxiaY, gundongY, taiqiY, wScrollY, heightY = 0;

import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
export default {
  data() {
    return {
      urllink: '',
      news: []

    }
  },
  methods: {
    myscroll: function() {
      wScrollY = window.scrollY;
    },
    mytouchstart: function(el) {
      anxiaY = el.changedTouches[0].pageY;
    },
    mytouchmove: function(el) {
      gundongY = el.changedTouches[0].pageY;
      if (wScrollY < 100) {
        el.stopPropagation();
        this.$store.dispatch('show_loading');
        this.$store.commit('setLoadingtop', gundongY - anxiaY);
      }
      if (anxiaY - gundongY > 50) {
        this.$store.commit('hideFooterview');
      } else {
        this.$store.commit('showFooterview');
      }
    },
    mytouchend: function(el) {
      //alert(4);
      heightY = gundongY - anxiaY;
      if (heightY >= 190 && wScrollY < 200) {
        this.jisuanshubiaoXY();
      } else {
        this.$store.commit('setLoadingtop', 0);
      }
    },
    jisuanshubiaoXY: function() {
      this.httpGetData();
    },
    eventListener: function() {
      window.addEventListener('touchstart', this.mytouchstart, false);
      window.addEventListener('touchmove', this.mytouchmove, false);
      window.addEventListener('touchend', this.mytouchend, false);
      window.addEventListener('scroll', this.myscroll, false);

    },

    newslink: function(item) {
      this.urllink = item.docurl;
      this.$router.push({
        name: 'xiangqing'
      });
      this.$store.dispatch('setNewsId', {
        'id': item.id
      });
    },
    shagnlajiazai: function() {
      this.$store.commit('setListPage');
      this.httpGetData();


    },
    httpGetData: function() {
      var arrtype = this.$store.getters.tabNum;
      let that = this;
      this.$http.get(this.$store.getters.listUrl).then((res) => {
        var list = res.data.list;
        if (arrtype == 0) {
          this.$store.commit('setwar',list);
        }else if (arrtype == 1) {
          that.$store.commit('setsport',list);
        }else if (arrtype == 2) {
          that.$store.commit('settech',list);
        }else if (arrtype == 3) {
          that.$store.commit('setedu',list);
        }else if (arrtype == 4) {
          that.$store.commit('setent',list);
        }else if (arrtype == 5) {
          that.$store.commit('setmoney',list);
        }else if (arrtype == 6) {
          that.$store.commit('setgupiao',list);
        }else if (arrtype == 7) {
          that.$store.commit('settravel',list);
        }else if (arrtype == 8) {
          that.$store.commit('setlady',list);
        }

      }).catch((err) => {
        alert('网络错误！请检查网络');
      })
    },
    setnews: function () {
      var listtyle = this.$store.getters.tabNum;
      if (listtyle == 0) {
        this.news = this.list0;
      }else if (listtyle == 1) {
       this.news = this.list1;
      }else if (listtyle == 2) {
        this.news = this.list2;
      }else if (listtyle == 3) {
        this.news = this.list3;
      }else if (listtyle == 4) {
        this.news = this.list4;
      }else if (listtyle == 5) {
        this.news = this.list5;
      }else if (listtyle == 6) {
        this.news = this.list6;
      }else if (listtyle == 7) {
        this.news = this.list7;
      }else if (listtyle == 8) {
        this.news = this.list8;
      }

    }
  },
  mounted: function() {
    this.httpGetData()
    this.eventListener();
    this.setnews();

  },
  computed: {
    ...mapState({
      mDataChange: 'tabNum',
      httpurl: 'listUrl',
      list0:'newslist0',
      list1:'newslist1',
      list2:'newslist2',
      list3:'newslist3',
      list4:'newslist4',
      list5:'newslist5',
      list6:'newslist6',
      list7:'newslist7',
      list8:'newslist8',
    })
  },
  watch: {
    mDataChange: function(newVal) {
      this.$store.commit('clearListPage');
      var tapdata = this.$store.getters.tabchange;

      if (tapdata[newVal] == false) {
        this.httpGetData();
        
      }


      this.setnews();

    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.news {
  width: 100%;
  height: 100%;
  margin-top: 217px;
  background-color: #ffffff;
}

.news-ul {}

.news-li {
  width: 96%;
  margin: 0 auto;
  height: 270px;
  list-style: none;
  list-style-type: none;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 5px;
  border-bottom: 1px solid #888888;
  border-top: 1px solid #888888;
}

.left {
  width: 66%;
  height: 270px;

  float: left;
  margin-left: -25px;
}

.left-text {
  padding-top: 20px;
  display: block;
  font-size: 45px;
  color: blank;
  width: 95%;
  margin: 0 auto;
  height: 140px;
  line-height: 70px;
  text-align: left;
}

.left-text2 {
  display: block;
  font-size: 36px;
  color: #888888;
  width: 95%;
  height: 60px;
  line-height: 60px;
  text-align: left;
  padding-left: 50px;
}

.right {
  width: 33%;
  height: 270px;

  float: left;
  margin-left: 30px;
}

.right-img {
  width: 100%;
  height: 270px;
  border: 1px solid #888888;
  border-radius: 10%;
}

.jiazaigengduo {
  display: block;
  list-style: none;
  list-style-type: none;
  font-size: 45px;
  height: 140px;
  line-height: 140px;
  background-color: #f4f5f6;
  width: 100%;
}
</style>
