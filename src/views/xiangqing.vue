<template >
<div class="xiangqing">
    <xiangqing class="daohangtiao"></xiangqing>
    <div class="context">
       <p class="title">{{newsData.title}}</p>
       <div class="context-time">
         <p class="from">来自：{{newsData.from}}</p>
         <p class="time">{{newsData.time}}</p>

       </div>
       <div class="text" v-html='newsData.content'></div>
    </div>
</div>
</template>

<script>
import xiangqing from '../components/xiangqingheader'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      newsData:{}
    }
  },
  components: {
    xiangqing
  },
  methods:{
    openData: function () {
      var xiangqingUrl= 'http://wangyi.butterfly.mopaasapp.com/detail/api?simpleId=';
      var idUrl= this.ID;

      var Urlall = xiangqingUrl + idUrl;
      this.$http.get(Urlall).then((res) => {
        this.newsData = res.data;

      }).catch((err) => {

        if(err.data.error == 'nodata'){
           alert('网络故障，请后退后重新进入');
         }

      })
    }
  },
  mounted: function () {
    this.openData();
  },
  computed: {
    ...mapState({
      ID:'newsId'

    })
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.daohangtiao{
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  width: 100%;
  z-index: 9999;
  opacity: 0.7;
}
.context{
  width: 100%;
  padding: 25px;
  margin-top: 120px;
  height: auto;
  background-color: red;
  background-color: #efefef;
  position: absolute;
  left: 0px;
  padding-bottom: 300px;

}
.title{
  display: block;
  color: blank;
  font-size: 70px;
  width: 100%;
  height: 220px;
  background-color: #efefef;
  line-height: 110px;
}
.context-time{
  width: 100%;
  height: 120px;
  border-bottom: 2px solid #000000;
  margin-top: 50px;
}
.from{
  display: block;
  height: 120px;
  width: 50%;
  color: blank;
  font-size: 40px;
  float: left;
  line-height: 120px;
}
.time{
  display: block;
  height: 120px;
  width: 50%;
  color: blank;
  font-size: 40px;
  float: left;

  line-height: 120px;
}
.text{
  display: block;
  line-height: 60px;
  font-size: 40px;
  text-align: justify;
  padding-left: 40px;
  padding-right: 40px;
  text-indent: 2em;
}
</style>
