<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item,index) in nav.list" :class="{active:kind== item.tab}" :data-type="item.tab" :key="index">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultList[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.image" alt="">
          <div class="cbody">
          <p class="title">{{item.title}}</p>
            <p class="sub-title"><span>{{item.subTitle}}</span></p>
            <p class="price-number numfont price" v-if="item.price === 0"><span class="price-icon">￥</span>抢完了</p>
            <p class="price-number numfont price" v-else-if="item.rentNum !== 0"><span class="price-icon">￥</span>{{item.price}}</p>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from "../api";
  export default {
    name: "container",
    props:['nav'],
    data() {
      return {
        kind:'',
        resultList:{}
      }
    },
    created() {
      api.getResultProducts().then(res=>{
        this.resultList = res.data.data;
      })
    },
    methods:{
      over(e){
        let dom = e.target;
        let tarName = dom.tagName.toLocaleLowerCase();
        if( tarName !== 'dd'){
          return false
        }
        this.kind = dom.getAttribute('data-type');
        //动态获取结构  AJAX
      }
    }
  }
</script>

<style lang="scss">
  @import "src/assets/css/index/artistic.scss";
</style>
