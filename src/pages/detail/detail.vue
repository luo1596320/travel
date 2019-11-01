<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
  import detailBanner from './components/banner'
  import detailHeader from './components/header'
  import detailList from './components/list'
  export default {
    name: 'detail',
    components: {
      detailBanner,
      detailHeader,
      detailList
    },
    data (){
      return {
        list: [
          {title: '促销票'},
          {title: '日场套票'},
          {title: '玩乐项目'},
          {title: '年卡'}
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
