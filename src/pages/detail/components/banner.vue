<template>
  <div>
    <div class="banner" @click = "showGallaryClick">
      <img class="banner-img" src="/static/images/detail/banner/5aa6e477.jpg" alt="">
      <div class="banner-info">
        <div class="info-number"><span class="iconfont">&#xe647;</span>&nbsp;43</div>
        <div class="info-title">国色天乡·陆地乐园</div>
      </div>
    </div>
    <gallary :imgs="imgs" v-show="showGallary" @close="closeGallary"></gallary>
  </div>
</template>

<script>
  import Gallary from '@/components/Gallary/Gallary'
  export default {
    name: 'banner',
    data (){
      return {
        showGallary: false,
        imgs: ['http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_r_800x800_d6a9ed62.jpg', 'http://img1.qunarzz.com/sight/p0/1801/41/418630d0998c5bcaa3.img.jpg_r_800x800_3625e06a.jpg']
      }
    },
    methods: {
      showGallaryClick (){
        this.showGallary = true
      },
      closeGallary (){
        this.showGallary = false
      }
    },
    components: {
      Gallary
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      bottom: 0
      right: 0
      padding: 0 0 .2rem .2rem
      color: #fff
      line-height: .4rem
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .info-number
        font-size: .24rem
        background: rgba(0, 0, 0, .5)
        width: .8rem
        border-radius: .2rem
        text-align: center
        .iconfont
          font-size: .14rem
      .info-title
        color: #fff
</style>
