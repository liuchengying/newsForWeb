<template>
  <div class="footer">
    <div class="footer-one">
      <ul class="footer-ul">
        <li class="footer-li" v-for='item in footertab' v-on:click='changtab(item)'>
          <img class="li-img" :src="item.img" alt="">
          <p class="li-p" :class="{'li-p-change':item.tab}" v-text='item.title'></p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import imgtitle from '../../static/footer-home.png'
import imgmy from '../../static/footer-my.png'
export default {
  data () {
    return {
      baseurl: '../assets/footer-',
      footertab: [{
        title: '首 页',
        tab: true,
        img: imgtitle

      },
      {
        title: '我 的',
        tab: false,
        img: imgmy
      }]
    }
  },
  methods: {
    changtab: function (item) {
      for (var i = 0;i < this.footertab.length;i++){
        this.footertab[i].tab = false;
      }
      item.tab = true;
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.footer{
  width: 100%;
  height: 130px;
  background-color: #f4f5f6;
  text-align: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.footer-ul{

}
.footer-li{
  list-style: none;
  list-style-type: none;
  float: left;
  width: 50%;
  height: 130px;
}
.li-img{
  display: block;
  width: 70px;
  height: 70px;
  margin: 0 auto;
  margin-top: 10px;
}
.li-p{

  height: 50px;
  line-height: 50px;
  text-align: center;
  color: blank;
  font-size: 28px;
}
.li-p-change{
  color: red;
  font-size: 30px;
}

</style>
