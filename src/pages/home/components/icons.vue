<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="iconBox">
            <img class="iconImg" :src="item.iconUrl" alt="">
          </div>
          <p class="icon-text">{{ item.iconText }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'homeIcons',
    data (){
      return {
        iconList: [
          {
            id: 'f3dd6c383aeb3b02',
            iconUrl: '/static/images/home/icons/f3dd6c383aeb3b02.png',
            iconText: '景点门票'
          },
          {
            id: '26ffa31b56646402',
            iconUrl: '/static/images/home/icons/26ffa31b56646402.png',
            iconText: '成都海昌'
          },
          {
            id: '02f5043b51b2102',
            iconUrl: '/static/images/home/icons/02f5043b51b2102.png',
            iconText: '情迷九寨'
          },
          {
            id: '67df61427c8e1302',
            iconUrl: '/static/images/home/icons/67df61427c8e1302.png',
            iconText: '川剧变脸'
          },
          {
            id: '13ceb38dcf262f02',
            iconUrl: '/static/images/home/icons/13ceb38dcf262f02.png',
            iconText: '一日游'
          },
          {
            id: '8246f27355943202',
            iconUrl: '/static/images/home/icons/8246f27355943202.png',
            iconText: '国色天香'
          },
          {
            id: '338c5b924c5809e8c7b14f60a953c3e2',
            iconUrl: '/static/images/home/icons/338c5b924c5809e8c7b14f60a953c3e2.png',
            iconText: '成都欢乐谷'
          },
          {
            id: '35899492b1302802',
            iconUrl: '/static/images/home/icons/35899492b1302802.png',
            iconText: '熊猫基地'
          },
          {
            id: '02f5043b51b21022',
            iconUrl: '/static/images/home/icons/02f5043b51b2102.png',
            iconText: '青城山'
          },
          {
            id: 'f04285731d7121da1b9028e2bf431695',
            iconUrl: '/static/images/home/icons/f04285731d7121da1b9028e2bf431695.png',
            iconText: '都江堰'
          }
        ]
      }
    },
    computed: {
      pages (){
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index/8)
          if(!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@S/varibles.styl'
  @import '~@S/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons >>> .swiper-pagination-bullet-active
    background: #fff
  .icon
    position: relative
    overflow: hidden
    width: 25%
    height: 0
    float: left
    padding-bottom: 25%
    .iconBox
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .iconImg
        display: block
        margin: 0 auto
        height: 100%
    .icon-text
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-hight: .44rem
      color: $texColor
      text-align: center
      ellipsis()
</style>
