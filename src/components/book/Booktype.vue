<template>
  <div id="typechoose">
      <div v-for="(type,index) in types" :key="index" @click="fn(type)">{{type}}</div>

  </div>
</template>

<script>
export default {
    name:"Booktype",
    methods:{
        fn(type){
            this.$emit("changetype",type); //通过$emit，触发父组件中的对应事件，并将参数发送给父组件
        }
    },
    data(){
        return{
            types:["言情","武侠","玄幻"]
        }
    }
}
</script>

<style scoped>
    #typechoose{
        display: flex;
        width: 100%;
        height: 50px;
    }
    #typechoose div{
        border-radius: 10px;
        background-color: aquamarine;
        width: 20%;
        height: 100%;
        text-align: center;
        line-height: 50px;
    }
</style>