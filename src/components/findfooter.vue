<template>
    <div id="downbox">
        <div id="gift">
            <div class="line"></div>
            <div class="point"></div>
            <span><img src="../assets/image/clock.png" alt=""><b>限时好礼</b></span>
            <div class="point"></div>
            <div class="line"></div>
        </div>
        <div id="little">
            金币换豪礼
        </div>
        <div id="luck">
            <div class="luckpart">
                <div class="luckgift">
                    <span>限时抽奖</span>
                    <img src="../assets/image/eleme.png" alt="">
                </div>
                <span id="luckname">PS4抽奖</span>
                <p class="pirce">
                    <span class="newprice">200金币</span>
                    <span class="oldprice">￥2299</span>
                </p>
            </div>
            <div></div>
            <div></div>
        </div>
        <div id="more">
            查看更多>
        </div>
    </div>
</template>

<script>
export default {
    name:"findfooter"
    // data(){
    //     return{

    //     }
    // },
//     created(){
//         axios({
//             url:"",
//             params:{}
//         })
//         .then()
//     }
}
</script>

<style scoped>
    #downbox{
        width: 100%;
        /* background: #ffffff; */
    }
    #gift{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 16px;
    }
    #gift img{
        width: 18px;
    }
    #gift span{
        font-size: 18px;
    }
    .line{
        width: 12px;
        background-color: black;
        height: 1.5px;
    }
    .point{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: black;
    }
    #little{
        width: 100%;
        color: #999999;
        font-size: 11px;
        text-align: center;
        padding-bottom: 8px;
    }
    #luck{
        display: flex;
        width: 100%;
        height: 195px;
        padding: 3.2vw 0 4vw 4vw;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    .luckpart{
        width: 31%;
        height: 100%;
        margin-right: 3%;
        position: relative;
    }
    .luckgift{
        width: 100%;
        height: 65%;
        margin-bottom: 10%;

    }
    .luckgift span{
        display: block;
        width: 44%;
        font-size: 11px;
        background-color: #413d3c;
        color: white;
        text-align: center;
        z-index: 1000;
    }
    .luckgift img{
        display: block;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
    }
    #luckname{
        font-size: 13px;
        display: block;
        margin-bottom: 8px;
    }
    .pirce{
        display: flex;
        margin: 0;
    }
    .newprice{
        font-size: 12px;
        color: #ff5339;
    }
    .oldprice{
        font-size: 10px;
        text-decoration: line-through;
        line-height: 15px;
        color: #AAAAAA;
    }
    #more{
        width: 100%;
        height: 15px;
        padding-bottom: 20px;
        /* box-sizing: border-box; */
        font-size: 13px;
        color: #999999;
        text-align: center;
    }
</style>