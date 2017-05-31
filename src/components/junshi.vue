<template>
  <div class="news">
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
      </ul>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  data () {
    return {
      urllink: '',
      news: []
    }
  },
  methods: {
    newslink: function (item) {
      this.urllink = item.docurl;
      this.$router.push({name:'xiangqing'});
      this.$store.dispatch('setNewsId',{'id':item.id});



    },
    httpGetData: function () {
      var url = 'http://wangyi.butterfly.mopaasapp.com/news/api?type=';
      var urlafter = '&page=1&limit=15'
      var urlmiddle = '';
      if(this.$store.getters.tabNum==0){
        urlmiddle = 'war';
      }else if (this.$store.getters.tabNum==1) {
        urlmiddle = 'sport';

      }else if (this.$store.getters.tabNum==2) {
        urlmiddle = 'tech';

    }
      this.$http.get(url+urlmiddle+urlafter).then((res) => {
        this.news = res.data.list;
      }).catch((err) => {
        console.log(err);
      })
    }
  },
  mounted: function () {
    this.httpGetData()
  },
  computed: {
    ...mapState({
      mDataChange: 'tabNum'
    })
  },
  watch: {
    mDataChange: function(){
      this.httpGetData();
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.news{
  /*position: absolute;
  top: 200px;
  bottom:130px;*/

  margin-top: 217px;
  margin-bottom: 140px;
  width: 100%;
  background-color: #ffffff;
}
.news-ul{

}
.news-li{
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
.left{
  width: 66%;
  height: 270px;

  float: left;
  margin-left: -25px;

}
.left-text{
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
.left-text2{
  display: block;
  font-size: 36px;
  color: #888888;
  width: 95%;
  height: 60px;
  line-height: 60px;
  text-align: left;
  padding-left: 50px;
}
.right{
  width: 33%;
  height: 270px;

  float: left;
  margin-left: 30px;
}
.right-img{
  width: 100%;
  height: 270px;
  border: 1px solid #888888;
  border-radius: 10%;
}
</style>
