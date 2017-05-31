<template >
  <div id="homepage">
    <appheader></appheader>
    <junshi></junshi>
    <appfooter></appfooter>
  </div>

</template>

<script>
import appheader from '../components/header'
import appfooter from '../components/footer'
import junshi from '../components/junshi'
export default {
  components: {
    appheader,
    appfooter,
    junshi
  }
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
</style>
