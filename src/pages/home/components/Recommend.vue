<template>
  <div>
    <div class="recommend-title">猜你喜欢</div>
    <ul>
      <router-link
        tag="li"
        class="recommend-item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-content">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-info">{{ item.info }}</div>
          <div class="item-address">{{ item.address }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    props: {
      recommendList: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@S/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .5rem
    background: #eee
    text-indent: .2rem
  .recommend-item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      width: 2rem
      height: 2rem
      padding: 0.1rem
    .item-content
      flex: 1
      padding: 0.1rem
      min-width: 0
      .item-title
        float: left
        width: 100%
        font-size: .32rem
        line-height: .54rem
        margin: .2rem 0
        ellipsis()
      .item-info
        float: left
        font-size: .28rem
        color: #f55
        line-height: .4rem
        width: 100%
        ellipsis()
      .item-address
        float: right
        font-size: .24rem
        line-height: .4rem
        ellipsis()
</style>
