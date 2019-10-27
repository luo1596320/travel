<template>
  <div>
    <Header :city="city"></Header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <Recommend :recommendList="recommendList"></Recommend>
    <Weekend :weekendList="weekendList"></Weekend>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import homeSwiper from './components/swiper'
  import homeIcons from './components/icons'
  import Recommend from './components/Recommend'
  import Weekend from './components/weekend'
  // 引入axios才能发送Ajax请求
  import axios from 'axios'
  export default {
    name: 'Home',
    components: {
      Header,
      homeSwiper,
      homeIcons,
      Recommend,
      Weekend
    },
    data (){
      return {
        city: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeInfo (){
        // axios返回promise对象
        axios.get('/api/index.json').then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res){
        res = res.data
        console.log(res)
        // 判断返回的数据中ret是否为true，ret是数据中自带的标识
        if (res.ret && res.data) {
          const data = res.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted (){
      this.getHomeInfo()
    }
  }
</script>

<style>
  .home{
    font-size: 36px;
  }
</style>
