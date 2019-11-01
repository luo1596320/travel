/*
* @Author: luocheng
* @Date:   2019-10-29 22:38:17
* @Last Modified by:   luocheng
* @Last Modified time: 2019-10-30 20:45:34
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



export default new Vuex.Store({
  state,
  mutations
})
