<template>
  <div>
    <div class="recommend-title">周末去哪玩</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-content">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-info">{{ item.info }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'weekend',
    props: {
      weekendList: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@S/mixins.styl'
  .recommend-title
    margin-top: .1rem
    line-height: .5rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-content
    padding: 0.1rem
    min-width: 0
    .item-title
      width: 100%
      font-size: .28rem
      line-height: .4rem
    .item-info
      font-size: .24rem
      color: #999
      line-height: .3rem
</style>
