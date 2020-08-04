<template>
    <div id="upbox">
        <div id="leftbox">  
            <div id="word">
                <router-link to="/ShopMall">
                <div id="wordbox">
                    <p class="big">金币商城</p>
                    <p class="little">0元好物在这里</p>
                </div>
                </router-link>
            </div>
            <div id="imgbox">
                <router-link to="/ShopMall">
                <img src="../assets/image/shopmall.png" alt="">
                </router-link>
            </div>
            
        </div>
        <div id="rightbox">
            <div id="bpart1">
                <div id="wordbox2">
                    <span class="big">推荐有奖</span>
                    <span class="little">20元现金拿不停</span>
                </div>
                <div id="imgbox2">
                    <img id="prize" src="../assets/image/prize.png" alt="">
                </div>   

            </div>       
            <div id="bpart1">
                <div id="wordbox2">
                    <span class="big2">周边优惠</span>
                    <span class="little">领取口碑好券</span>
                </div>
                <div id="imgbox2">
                    <img id="prize" src="../assets/image/coupon.png" alt="">
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
export default {
    name:"FindHeader",
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
    body{
        font-size: 75px;
    }
    #upbox{
        width: 100%;
        height: 42.666667vw;
        display: flex;
        margin-bottom: 10px;
        /* background: #ffffff; */
        /* z-index: 100; */
    }
    #leftbox{
        display: flex;
        width: 50%;
        border-right: 1px solid #ededed;
        padding: 5.866667vw 2.933333vw 1.6vw 4.266667vw;
        box-sizing:border-box;
        justify-content: space-between;
    }
    #word{
        position: relative;
        height: 100%;
        float: left;
        white-space:nowrap;
    }
    #wordbox{
        position: absolute;
        top: 0;
        box-sizing: border-box;
        white-space:nowrap;
    }
    #wordbox :first-child{
        color: rgb(255, 153, 0);

    }
    .big{
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 1.6vw;
        line-height: 1.2;
        color: #1Ba9e1;
    }
    .little{
        margin: 0;
        line-height: 1.2;
        font-size: 12px;
        color: #999;
    }

    #imgbox{
        width: 47%;
        position: relative;
    }
    #imgbox img{
        width: 100%;
        /* display: block; */
        position: absolute;
        bottom: 0;
    }
    #rightbox{
        width: 50%;
        padding: 0 15px;
        box-sizing: border-box;
        
    }
    #rightbox span{
        display: block;
    }
    #bpart1{
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ededed;
        box-sizing: border-box;
    }
    #imgbox2{
        width: 29%;
    }
    #imgbox2 img{
        width: 100%;
    }
    .big2{
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 1.6vw;
        line-height: 1.2;
        color: #ED6660;
    }
</style>