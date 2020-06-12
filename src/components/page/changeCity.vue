<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <m-hot :list="hotList" title="热门城市"/>
    </el-row>
    <el-row>
      <m-hot :list="hotList" title="最近访问 "/>
    </el-row>
    <el-row>
      <categroy />
    </el-row>
  </div>
</template>

<script>
  import province from "../changeCity/province";
  import MHot from "../changeCity/hot"
  import categroy from "../changeCity/categroy";
  import api from "../api";
    export default {
        name: "changeCity",
      components:{
          province,
        MHot,
        categroy
      },
      created() {
          api.getHotCity().then(res=>{
            this.hotList = res.data.data;
          })
      },
      data(){
          return {
            hotList:{}
          }
      }
    }
</script>

<style scoped>

</style>
