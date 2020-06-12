// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import elementUi from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'

Vue.use(elementUi)

Vue.config.productionTip = false
Vue.directive('document-click',{
  bind(el,binding,Vnode){
    document.addEventListener('click',binding.value)
  }


})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
