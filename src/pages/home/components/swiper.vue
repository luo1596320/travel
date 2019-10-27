<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'homeSwiper',
    props: {
      swiperList: Array
    },
    data (){
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          autoplay: 3000,
            // 操作swiper后，不停止自动轮播
          autoplayDisableOnInteraction: false,
          loop: true
        }
      }
    },
    computed: {
      showSwiper (){
        return this.swiperList.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.66%
    img
      width: 100%
</style>
