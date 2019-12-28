<template>
  <div class="home">
      <div class="header">
      <van-swipe :autoplay="3000" indicator-color="black">
        <van-swipe-item style=" line-height: 200px;text-align: center;">1</van-swipe-item>
        <van-swipe-item style=" line-height: 200px;text-align: center;">2</van-swipe-item>
        <van-swipe-item style=" line-height: 200px;text-align: center;">3</van-swipe-item>
        <van-swipe-item style=" line-height: 200px;text-align: center;">4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>


export default {
  name: 'home'
}
</script>
<style lang="scss">
  .home,html,body{
  width: 100%;
  height: 100%;
}
.home{
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 200px;
}
.van-swipe-item{
  background-color: aqua;
}
</style>