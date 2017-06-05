<template>
  <div class="header">
    <div class="header-title">
      <div class="bbbb">
        <img src="static/logo.png" alt="logo" class="header-title-logo">
        <img src="static/refresh.png" alt="" class="refresh" :class="{'refresh-a':refresh}">
      </div>

    </div>
    <div class="aaa">
      <div class="header-tips">
        <ul class="header-tips-ul" >
          <li class="header-tips-li" v-for='(item,index) in newslist' :class="{'tab-li':item.tab}" v-text = 'item.title' @click = 'changtip(item,index)'></li>
        </ul>
      </div>
      <a href="#" class="tianjia"></a>
    </div>

  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'header',
  data () {
    return {
        newslist: [{
          title: '军事',
          tab: true
        },
        {
          title: '体育',
          tab: false
        },
        {
          title: '科技',
          tab: false
        },
        {
          title: '教育',
          tab: false
        },
        {
          title: '娱乐',
          tab: false
        },
        {
          title: '财经',
          tab: false
        },
        {
          title: '股票',
          tab: false
        },
        {
          title: '旅游',
          tab: false
        },
        {
          title: '女人',
          tab: false
        }
      ]
    }
  },
  methods: {
    changtip: function (item,index) {
      for (var i = 0;i<this.newslist.length;i++) {
        this.newslist[i].tab = false;
      }
      item.tab = true;
      this.$store.dispatch('abcde',{'val':index});
      this.$store.dispatch('show_refresh');
      this.$store.commit('setTabchange',index);
      setTimeout(function() {
        that.$store.dispatch('shezhitabchange',{'val':index});
      },200);

      let that = this;
      setTimeout(function(){
        that.$store.dispatch('hide_refresh');
      },600);
    }
  },

  computed: {
    ...mapActions([
      'abcde'
    ]),
    ...mapMutations([
      'changeTabNum'
    ]),
    ...mapState([
      'refresh'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.bbbb{
  z-index: 1111;
}
.header{
  position: fixed;
  width: 100%;
  height: 200px;
  top: 0px;
  left: 0px;
  right: 0px;
}
.hello{
  width: 100%;
  height: 220px;
  text-align: center;
}
.header-title{
  width: 100%;
  height:130px;
  text-align: center;
  background-color: #d43d3d;
}
.header-title-logo{
  display: inline-block;
  margin-top: 30px;



}
.header-tips-li{
  list-style: none;
  list-style-type: none;
  display: inline-block;
  width: 18%;
  height: 90px;
  background-color: #f4f5f6;
  font-size: 40px;
  line-height: 90px;
  color: blank;
  border-bottom: 1px solid #888888;
  white-space: nowrap;

}
.header-tips-li ::after{
  clear: both;

}
.header-tips{
  white-space: nowrap;
  height: 100px;
  width: 90%;;
  overflow: hidden;
  overflow-x: scroll;
  padding-bottom: -10px;



}
.aaa{
  height: 90px;
  width: 100%;
  overflow: hidden;
  display: block;
  background-color: #f4f5f6;
  position: absolute;


}
.tianjia{
  display: block;

  width: 90px;
  height: 90px;
  background: url("../../static/tianjia.png")no-repeat 50% 50%;
  float: right;
  font-size: 30px;
  text-decoration: none;
  position: relative;
  top: -100px;
  box-shadow: -0px 10px 20px #888888;

}
.header-tips-ul{
  text-decoration: none;
  height: 100%;
  width: 100%;
  white-space: nowrap;
}
.refresh{
  margin-left: 10px;
}
.refresh-a{
    animation-name:flash-rotate;
    animation-duration:0.6s;
    animation-timing-function:linear;
    animation-iteration-count:infinite;
}
@keyframes flash-rotate{
    0% {
      -webkit-transform:rotate(0deg);
      transform: rotate(0deg)
    }
    100% {
      -webkit-transform:rotate(360deg);
      transform: rotate(360deg)
    }
}
@-webkit-keyframes flash-rotate{
    0% {
      -webkit-transform:rotate(0deg);
      transform: rotate(0deg)
    }
    100% {
      -webkit-transform:rotate(360deg);
      transform: rotate(360deg)
    }
}
.tab-li{
  color: red;
  font-size: 43px;
}
</style>
