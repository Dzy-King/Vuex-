<template>
  <div class="m-header-topbar  m-header">
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <n-av />
    </el-col>
  </div>
</template>

<script>
  import geo from "./geo";
  import NAv from "./nav";
    export default {
        name: "topBar",
      components:{
          geo,
        NAv

      }
    }
</script>


<style lang="scss">
  @import "src/assets/css/public/header/topbar.scss";
</style>
