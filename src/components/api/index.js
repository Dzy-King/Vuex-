import axios from '@/axios.js'

var api = {
  searchHotWords(params) {
    return axios.get('api/meituan/header/searchHotWords.json', params);
  },
  getSearchList(params) {
    return axios.get('/api/meituan/header/search.json', params);
  },
  getMenuList() {
    return axios.get('/api/meituan/index/nav.json');
  },
  getResultProducts() {
    return axios.get('/api/meituan/index/resultsByKeywords.json');
  },
  getProductsList(){
    return axios.get('/api/meituan/list/goodsList.json');
  },
  getHotCity(){
    return axios.get('/api/meituan/city/hot.json');
  },
  getProvinceList(){
    return axios.get('/api/meituan/city/province.json');
  }
}
export default api;
