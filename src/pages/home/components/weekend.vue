<template>
  <div>
    <div class="recommend-title">周末去哪玩</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of recommendList" :key="item.id">
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
    data() {
      return {
        recommendList: [
          {
            id: '7a62b06a',
            imgUrl: '/static/images/home/weekend/7a62b06a.jpg',
            title: '成都必打卡',
            info: '成都的标志，也是现代人对老成都的记忆'
          },
          {
            id: '4cd56a30',
            imgUrl: '/static/images/home/weekend/4cd56a30.jpg',
            title: '远离烧烤模式',
            info: '与冰川里的水晶宫、“摄影家走廊”、来一场亲密的约会，艰辛会有的，可这都是值得的'
          },
          {
            id: 'a3485c55',
            imgUrl: '/static/images/home/weekend/a3485c55.jpg',
            title: '摩崖石刻造像',
            info: '诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选'
          },
          {
            id: '60474b61',
            imgUrl: '/static/images/home/weekend/60474b61.jpg',
            title: '成都周边秋色',
            info: '细数成都周边秋天最美仙境'
          },
          {
            id: '93fd1e5a',
            imgUrl: '/static/images/home/weekend/93fd1e5a.jpg',
            title: '成都文艺范儿',
            info: '《成都》唱火了这里，其实这儿不只有酒馆，还有很多文艺爆棚的地方'
          }
        ]
      }
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
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 33.9%
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
      font-size: .1rem
      color: #999
      line-height: .3rem
</style>
