<template>
  <div class="m-products-list">
    <ul>
      <li v-for="(item,index) in nav" :key="index" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <m-item v-for="(item,index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
  import MItem from "./item";
  import api from "../api";
  export default {
    name: "list",
    created() {
      api.getProductsList().then(res=>{
        this.productList = res.data.data;
      })
    },
    data() {
      return {
        nav:[{
          key:'s-default',
          name:'智能排序',
          active:true
        },{
          key:'s-price',
          name:'价格最低',
          active: false
        },{
          key:'s-sale',
          name:'销量最高',
          active: false
        },{
          key:'s-comment',
          name:'评价最高',
          active: false
        }],
        productList:[]
      }
    },
    components:{
      MItem
    }
  }
</script>

<style lang="scss">
  @import "src/assets/css/products/list.scss";
</style>
