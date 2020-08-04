<template>
    <div>
        <p class="haha">{{haha}}</p>
    </div>
</template>

<script>
    export default{
        name:"Header",
        data:function(){
            return{
                haha:"哈哈"
            }
        }
    }    

</script>

<style scoped>
    .haha{
        background-color: blanchedalmond;
        margin-top: 50px;
    }
</style>
