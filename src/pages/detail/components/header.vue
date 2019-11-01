<template>
  <div>
    <div class="header-abs" v-show="showAbs">
        <router-link tag="div" to='/' class="iconfont abs-back">&#xe658;</router-link>
    </div>
    <div
      class="detailHeader"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link tag="div" to='/' class="iconfont detail-back">&#xe658;</router-link>
      国色天乡·陆地乐园
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detailHeader',
    data(){
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll(){
        const top = document.documentElement.scrollTop
        if (top > 35) {
          let opacity = top / 120
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = { opacity }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated (){
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated (){
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@S/varibles.styl'
  .header-abs
    position: absolute
    left: .1rem
    top: .1rem
    width: .6rem
    height: .6rem
    border-radius: .4rem
    background: rgba(0, 0, 0, .7)
    z-index: 99
    .abs-back
      color: #fff
      font-size: .64rem
      text-align: center
      line-height: .64rem
  .detailHeader
    position: fixed
    left: 0
    top: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    text-align: center
    color: #fff
    font-size: .32rem
    z-index: 99
    .detail-back
      position: absolute
      left: 0
      top: 0
      text-align: center
      color: #fff
      font-size: .64rem
      margin-left: .1rem
</style>
