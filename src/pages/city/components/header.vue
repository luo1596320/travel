<template>
  <div class="cityHeader">
    <router-link to='/'>
      <div class="iconfont city-back">&#xe658;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
  export default {
    name: 'cityheader'
  }
</script>

<style lang="stylus" scoped>
  @import '~@S/varibles.styl'
  .cityHeader
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    overflow: hidden
    text-align: center
    color: #fff
    font-size: .32rem
    .city-back
      position: absolute
      left: 0
      top: 0
      text-align: center
      color: #fff
      font-size: .64rem
      margin-left: .1rem
</style>
