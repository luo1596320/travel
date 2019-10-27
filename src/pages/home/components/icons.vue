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
    props: {
      iconList: Array
    },
    data (){
      return {
        swiperOption: {
          autoplay: false
        }
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
