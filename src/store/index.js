/*
* @Author: luocheng
* @Date:   2019-10-29 22:38:17
* @Last Modified by:   luocheng
* @Last Modified time: 2019-10-29 23:17:25
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '成都'
  },
  mutations: {
    newCity (state, city){
      state.city = city
    }
  }
})
