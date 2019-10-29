<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe658;</div>
      </div>
      <div class="header-input">
      <span class="iconfont">&#xe63c;</span>输入城市/景点/游玩主题</div>
      <router-link to='/city'>
        <div class="header-right">{{this.$store.state.city}}<span class="iconfont city-icon">&#xe65c;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="stylus" scoped>
  @import '~@S/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background-color: $bgColor
    color: #222
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background-color: #fff
      border-radius: .1rem
      color: #ccc
      padding-left: .1rem
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        color: #fff
        font-size: .64rem
        margin-left: .1rem
    .header-right
      width: 1.24rem
      float: right
      color: #fff
      margin-left: .1rem
      font-size: .32rem
      line-height: .72rem
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      .city-icon
        font-size: .48rem
</style>
