<template>
  <div>
    <Header></Header>
    <Search></Search>
    <List :cities="cities" :hotCities="hotCities"></List>
    <Alphabet :cities="cities"></Alphabet>
  </div>
</template>

<script>
  import Header from './components/header'
  import Search from './components/search'
  import List from './components/list'
  import Alphabet from './components/alphabet'
  import axios from 'axios'
  export default {
    name: 'city',
    data (){
      return {
        // 提前定义两个数据，接收从Ajax中请求过来的对应数据
        cities: {},
        hotCities: []
      }
    },
    components: {
      Header,
      Search,
      List,
      Alphabet
    },
    methods: {
      getCityInfo (){
        // 对指定地址发送请求，如果成功则执行getCityInfoSucc方法
        axios.get('/api/city.json').then(this.getCityInfoSucc)
      },
      // Ajax请求成功的方法，通过res接受请求回来的数据
      getCityInfoSucc (res){
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      }
    },
    mounted (){
      this.getCityInfo()
    }
  }
</script>

<style lang="stylus" scoped></style>
