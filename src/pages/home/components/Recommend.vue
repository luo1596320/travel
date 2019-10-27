<template>
  <div>
    <div class="recommend-title">猜你喜欢</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-content">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-info">{{ item.info }}</div>
          <div class="item-address">{{ item.address }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    data() {
      return {
        recommendList: [
          {
            id: '6064e939',
            imgUrl: '/static/images/home/recommend/6064e939.jpg',
            title: '国色天乡·陆地乐园',
            info: '镇园之宝眼镜蛇过山车',
            address: '国色天乡'
          },
          {
            id: '5d5bc10d',
            imgUrl: '/static/images/home/recommend/5d5bc10d.jpg',
            title: '成都欢乐谷',
            info: '超级旋转过山车刺激到让你怀疑人生',
            address: '金牛区'
          },
          {
            id: '697c3b3f',
            imgUrl: '/static/images/home/recommend/697c3b3f.jpg',
            title: '成都大熊猫繁育研究基地',
            info: '看！熊猫宝宝在向你招手呢',
            address: '成华区'
          },
          {
            id: '63285bd9',
            imgUrl: '/static/images/home/recommend/63285bd9.jpg',
            title: '成都海昌极地海洋公园',
            info: '蠢萌企鹅陪你嗨翻这个秋',
            address: '双流区'
          },
          {
            id: '3f499a59',
            imgUrl: '/static/images/home/recommend/3f499a59.jpg',
            title: '青城山',
            info: '青城山下白素贞，洞中千年修此身',
            address: '青城山'
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
        margin: .3rem 0
        ellipsis()
      .item-info
        float: left
        font-size: .20rem
        color: #f55
        line-height: .4rem
        ellipsis()
      .item-address
        float: right
        font-size: .16rem
        line-height: .4rem
        ellipsis()
</style>
