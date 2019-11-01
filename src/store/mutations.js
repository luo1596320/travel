/*
* @Author: luocheng
* @Date:   2019-10-30 20:43:38
* @Last Modified by:   luocheng
* @Last Modified time: 2019-10-30 20:44:52
*/
export default {
  newCity (state, city){
    state.city = city
    try {
      localStorage.city = city
    } catch (e){}
  }
}

