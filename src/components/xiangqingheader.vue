<template>
  <div class="xqheader">
    <div class="xqheader-fanhui" @click='fanhui'>
          <img src="../../static/fanhui.png" alt="">
    </div>
    <div class="xqheader-gengduo">
          <img src="../../static/more.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fanhui: function () {
      window.history.go(-1);
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.xqheader{
  width: 100%;
  height: 130px;
  background-color: #efefef;
}
.xqheader-fanhui{

  float: left;
  width: 150px;
  height: 130px;

}
.xqheader-fanhui img{
  margin-top: 25px;
  margin-left: 30px;
  width: 80px;
  height: 80px;
}
.xqheader-gengduo{

  float: right;
  width: 150px;
  height: 130px;

}
.xqheader-gengduo img{
  margin-top: 25px;
  margin-right: 30px;
  width: 80px;
  height: 80px;
}

</style>
