import {HTTP} from '../../utils/http'
export class Model extends HTTP {
  get_rand_img(data){
    return this.request({
      url:'/rand.tbimg.php?format=json',
      data
    })
  }
}