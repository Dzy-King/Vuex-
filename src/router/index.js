import Vue from 'vue'
import Router from 'vue-router'
import blankPage from '../layout/blank.vue'
import defaultPage from '../layout/default.vue'
import Index from '../components/page/index.vue'
import changeCity from "../components/page/changeCity";
import goodsList from "../components/page/goodsList";
import register from "../components/page/register";
import login from "../components/page/login";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect:'/index',
      children:[{
        path:'/index',
        name:'index',
        component:Index
      },
        {
          path:'s/:name',
          name:'goods',
          component:goodsList
        },
        {
          path: '/changCity',
          name:'changeCity',
          component: changeCity
        },
        {
          path:'/goodsList',
          name:'goodsList',
          component:goodsList
        }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: '/login',
        name: 'login',
        component: login
      },{
        path: '/register',
        name: 'register',
        component: register
      }]
    }

  ]
})
