<template>
    <div class="m-menu">
      <dl class="nav" @mouseleave="menuLeave">
        <dt>全部分类</dt>
        <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
          <i :class="item.name"></i>{{item.name}}
          <span class="arrow"></span>
        </dd>
      </dl>
      <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template v-for="(item,index) in curDetail.items">
          <h2 :key="index">{{item.title}}</h2>
          <span v-for="(i,n) in item.items" :key="n+'_'+i">{{i}}</span>
        </template>
      </div>
    </div>
</template>

<script>
  import api from "../api";
    export default {
        name: "menu",
      data(){
          return {
            menuList:[],
            curDetail:false
          }
      },
      created() {
          api.getMenuList().then(res=>{
            this.menuList = res.data.data;
          })
      },
      methods:{
          menuEnter(item){
            this.curDetail = item
          },
        menuLeave(){
            var self = this;
            this.timer = setTimeout(function () {
              self.curDetail=null
            },200)

        },
        detailEnter(){
            clearTimeout(this.timer);
        },
        detailLeave(){
            this.curDetail = null
        }
      }
    }
</script>

<style lang="scss">
  @import "src/assets/css/index/index.scss";
</style>
