<template>
    <div id="box">
        <div id="Screen">
            <p class="down">综合排序<img src="../assets/image/xiajiantou.png" alt=""></p>
            <p>距离最近</p>
            <p>销量最高</p>
            <p class="sx">筛选<img src="../assets/image/shaixuan.png" alt=""></p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Screen",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    #box{
        /* width: 100%; */
        box-sizing: inherit;
        position: sticky;
        /* top: 80px; */
        z-index: 100;
        height: 10.533333vw;
    }
    #Screen{
        display: flex;
        width: 100%;
        height: 10.533333vw;
        position: absolute;
        top: 0;
        bottom: 0;
    }
    p{
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #666666;
        /* text-align: center; */
    }

    .sx{
        display: flex;
    }
    .down{
        display: flex;
    }
    .down img{
        width: 8px;
    }
    .sx img{
        width: 14px;
    }
</style>