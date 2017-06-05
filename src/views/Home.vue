<template >
  <div id="homepage">
    <appheader class="header"></appheader>
    <loading v-if="loading" class="loading" :style="{top:loadingtop + 100 +'px'}" ></loading>
    <keep-alive>
        <junshi ref='junshi'></junshi>
    </keep-alive>

    <appfooter v-show="footerview"></appfooter>
  </div>

</template>

<script>
// var anxiaY,gundongY,taiqiY,wScrollY,heightY = 0;
import appheader from '../components/header'
import appfooter from '../components/footer'
import junshi from '../components/junshi'
import {mapState,mapActions} from 'vuex'
// window.addEventListener('scroll',this.handlescroll);
export default {

  components: {
    appheader,
    appfooter,
    junshi
  },
  computed: {
    ...mapState([
      'loading',
      'checkhttp',
      'loadingtop',
      'opacityload',
      'footerview'
    ])
  },

  }




</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#homepage{
  width: 100%;
  height: 100%;
  position: absolute;
}
.loading{
  position: absolute;
  top: 230px;
  left: -45px;
  z-index: 1050;

}
.header{
z-index: 1001;
}
</style>
