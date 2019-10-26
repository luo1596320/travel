<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'homeSwiper',
    data (){
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [
          {
            id: 'b75c8be9',
            imgUrl: '/static/images/home/swiper/b75c8be9.jpg'
          },
          {
            id: 'c5b67f70',
            imgUrl: '/static/images/home/swiper/c5b67f70.jpg'
          },
          {
            id: '96e06a82',
            imgUrl: '/static/images/home/swiper/96e06a82.jpg'
          },
          {
            id: '0119e32b',
            imgUrl: '/static/images/home/swiper/0119e32b.jpg'
          },
          {
            id: 'a48b8e47',
            imgUrl: '/static/images/home/swiper/a48b8e47.jpg'
          }
        ]
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
