<template>
  <div class="page-default">
    <el-container>
      <el-header height="100%">
        <my-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <my-footer />
    </el-container>
  </div>
</template>

<script>
  import MyHeader from "../components/header/index"
  import MyFooter from "../components/footer/index"
  import MyPage from "../components/page/index"

    export default {
        name: "default",
      components:{
        MyHeader,
        MyFooter,
        MyPage
        }
    }
</script>

<style lang="scss">
  @import "../assets/css/public/layout.scss";
</style>
