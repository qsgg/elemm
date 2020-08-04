<template>
    <div id="List">
      <ul>
        <li v-for="book in books" :key="book.id">
            <p>代号:{{book.id}}</p>
            <p>书名:{{book.name}}</p>
            <p>作者:{{book.author}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name:"BookList",
    props:["type"],
    data(){
        return{
            books:[]
        }
    },
    created(){
        this.getbook();
    },
    watch:{
        type:function(){
            this.getbook();
        }
    },
    methods:{
        getbook(){
        axios({
            url:"books",
            params:{
                "type":this.type
            }
        }).then(res=>this.books=res.data)
        }
    }
}
</script>

<style scoped>
    #List{
        width: 100%;
        margin-top: 50px;
    }
    #List li{
        /* width: 100px;
        height: 50px;
        list-style: none;
        text-align: center; */
        list-style: none;
    }
</style>