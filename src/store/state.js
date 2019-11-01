/*
* @Author: luocheng
* @Date:   2019-10-30 20:41:42
* @Last Modified by:   luocheng
* @Last Modified time: 2019-10-30 20:42:33
*/

let defaultCity = '成都'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e){}

export default {
  city: defaultCity
}
