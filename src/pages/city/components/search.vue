<template>
  <div class="search-box">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
  export default {
    name: 'search'
  }
</script>

<style lang="stylus" scoped>
  @import '~@S/varibles.styl'
  .search-box
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    .search-input
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
      padding: 0 .1rem
      box-sizing: border-box
</style>
