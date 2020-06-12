<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <m-categroy />
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span="5">
        map+like
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import crumbs from "../products/crumbs";
  import MCategroy from "../products/categroy";
  import list from "../products/list";
    export default {
        name: "goodsList",
      components:{
          crumbs,
        MCategroy,
        list
      }
    }
</script>

<style lang="scss">
  @import "src/assets/css/products/index.scss";
  @import "src/assets/css/products/list.scss";
</style>
