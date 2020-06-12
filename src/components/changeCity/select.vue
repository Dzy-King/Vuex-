<template>
    <div :class="['choose-wrap', disabled ? 'disabled':'']" @click="showWrap" v-document-click="documentClick">
      <div class="choose">
        <span>{{value}}</span>
        <i class="el-icon-caret-bottom"></i>
        <div :class="{'mt-content':true,'active':showWrapperActive}">
          <h2>{{title}}</h2>
          <div :class="['wrapper',className]">
            <div class="col" v-for="(v,i) in renderList" :key="i">
              <span :class="{'mt-item':true,'active':item.name == value}" v-for="(item,index) in v" :key="index" @click="changeValue(item)">{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "select",
      props:['list','title','value','showWrapperActive',"disabled","className"],
      data(){
          return {
        }
      },
      computed:{
          renderList:function() {
            let col = Math.ceil(this.list.length/12);
            let resultList =[];
            for(let i=0;i<col;i++){
              let data = this.list.slice(i*12,i*12+12);
              resultList.push(data);
            }
            return resultList;
          }
      },
      methods:{
          showWrap(e){
            e.stopPropagation();
            if(!this.disabled){
              this.$emit('change_active',true)
            }
          },
        documentClick(){
          this.$emit('change_active',false)
        },
        changeValue(item){
            this.$emit('change', item);
            console.log(item.name)
        }
      }
    }
</script>

<style lang="scss">
   @import "src/assets/css/changecity/iselect.scss";
   @import "src/assets/css/changecity/select.scss";
</style>
