<template>
<div>
    <Booktype @changetype="fn"/>
    <BookListshow :type="type"/>  <!--父级将数据再传给另一个子级-->
</div>
</template>

<script>

import Booktype from "../components/Booktype"
import BookListshow from "../components/BookList"

export default {
    name:"BookList",
    data(){
        return{
            type:"言情"  //打开页面默认显示的类型
        }
    },
    methods:{
        fn(type){
            this.type=type;   //接收来自子组件的type数据
        }
    },
    components:{
        Booktype,BookListshow
    }
    
}
</script>

<style>

</style>