<template>
  <div>
    <Header></Header>
    <home-swiper></home-swiper>
    <div class="home">home page</div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import homeSwiper from './components/swiper'
  export default {
    name: 'Home',
    components: {
      Header,
      homeSwiper
    }
  }
</script>

<style>
  .home{
    font-size: 36px;
  }
</style>
