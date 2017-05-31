<template>
  <div class="header">
    <div class="header-title">
      <p class="header-title-text">头 条 新 闻</p>
    </div>
    <div class="header-tips">
      <ul class="header-tips-ul" v-for='(item,index) in newslist'>
        <li class="header-tips-li" :class="{'tab-li':item.tab}" v-text = 'item.title' @click = 'changtip(item,index)'></li>
      </ul>
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
          title: '军 事',
          tab: true
        },
        {
          title: '体 育',
          tab: false
        },
        {
          title: '科 技',
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

      // this.$store.state.tabNum = index;
      //this.$store.commit("changeTabNum",index);
      this.$store.dispatch('abcde',{'val':index});
      

    }
  },
  computed: {
    ...mapActions([
      'abcde'
    ]),
    ...mapGetters([
      'tabNum'
    ]),
    ...mapMutations([
      'changeTabNum'
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
  background-color: red;
}
.header-title-text{

  height: 130px;
  line-height: 130px;
  color: white;
  font-size: 60px;
}
.header-tips-li{
  list-style: none;
  list-style-type: none;
  float: left;
  display: block;
  width: 33.3%;
  height: 90px;
  background-color: #f4f5f6;
  font-size: 38px;
  line-height: 90px;
  color: blank;
  border-bottom: 1px solid #888888;
}
.header-tips-ul{
  text-decoration: none;

}
.tab-li{
  color: red;
  font-size: 40px;
}
</style>
