<template>
  <div>
    <Header></Header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <Recommend></Recommend>
    <Weekend></Weekend>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import homeSwiper from './components/swiper'
  import homeIcons from './components/icons'
  import Recommend from './components/Recommend'
  import Weekend from './components/weekend'
  export default {
    name: 'Home',
    components: {
      Header,
      homeSwiper,
      homeIcons,
      Recommend,
      Weekend
    }
  }
</script>

<style>
  .home{
    font-size: 36px;
  }
</style>
