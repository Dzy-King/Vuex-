<template>
    <div class="categroy">
      <dl class="m-categroy">
        <dt>按拼音首字母选择：</dt>
        <dd v-for="(item,index) in a_z" :key="index">
          <a :href="'#city-'+item">{{item}}</a></dd>
      </dl>
    </div>
</template>

<script>
    export default {
        name: "categroy",
      data(){
          return{
            a_z:'abcdefghijkmlnopqrstuvwsyz'.toLocaleUpperCase().split(''),
            cityList: [],
            cityGroup: {},
          }
      },
    }
</script>

<style lang="scss">
@import "src/assets/css/changecity/categroy.scss";
</style>
