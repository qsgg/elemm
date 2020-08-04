<template>
    <div id="box">
        <ul id="choose">
            <li class="chooses" :class = "isActive == index ? 'addclass' : '' " v-for="(item,index) in items" :key="item.id" :text="item.name" @click="fn(index)">{{item.name}}</li>
        </ul>
        <van-cell id="more" is-link @click="showPopup"><img id="moreimg" src="../assets/image/more.png" alt=""></van-cell>
        <van-popup v-model="show" position="top" id="second" closeable>
            <div id="MenuHead"><h3>请选择分类</h3></div>
           
            <div id="secondbox">

                <el-tabs :tab-position="tabPosition" style="height: 100%;width: 100%" id="Submenu">
                <el-tab-pane :label="items.name" v-for="items in data" :key="items.id" style="width: 34.666667vw" @tab-click="handleClick">
                    <span slot="label" class="typename"><span class="white"></span>{{items.name}}<span class="number">100</span></span>
                    
                    <div style="width:245px" id="thirdchoose">
                        <ul id="thirdtab">
                            <li  v-for="shop in items.list" :key="shop.id" >
                                    <!-- <div v-for="shopss in shops.list" :key="shopss.id"> -->
                                        <img :src="shop.img" />
                                        {{shop.name}}
                                    <!-- </div> -->
                            </li>
                        </ul>
                        </div>
                    </el-tab-pane>
                </el-tabs>

                <!-- <van-tabs v-model="active"  id="Submenu">
                     <van-tab class="tab" :title="items.name" v-for="items in data" :key="items.id">
                        <div style="width:245px" id="thirdchoose">
                        <ul id="thirdtab">
                            <li  v-for="shop in items.list" :key="shop.id" >
                                    <div v-for="shopss in shops.list" :key="shopss.id">
                                        <img :src="shop.img" />
                                        {{shop.name}}
                                    </div>
                            
                            </li>
                        </ul>
                        </div>
                    </van-tab>
                    
                </van-tabs> -->
                 
            </div>
            
        </van-popup>
    </div>

</template>

<script>
import { Notify } from 'vant';

export default {
    name:"STheader",
    data(){
        return{
            show: false,
            active: 0,
            tabPosition: 'left',
            data:[
                {
                id:0,
                name:'全部美食',    
                list:[
                   {
                id:0,
                name:'全部',
                img: require('../assets/image/1.png'),
                },
                {
                id:1,
                name:'地方菜系',
                img:require('../assets/image/3.png'),
                },
                {
                id:2,
                name:'简餐便当',
                img:require('../assets/image/2.png'),
                },
                {
                id:3,
                name:'汉堡披萨',
                img:require('../assets/image/4.png'),
                },
                {
                id:4,
                name:'香锅冒菜',
                img:require('../assets/image/5.png'),
                },
                {
                id:5,
                name:'小吃炸串',
                img:require('../assets/image/6.png'),
                } 
                ]
                },
                {
                  id:1,
                  name:'快餐便当',
                  list:[
                    {
                    id:0,
                    name:'全部',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:1,
                    name:'其他快餐',
                    img:require('../assets/image/6.png'),
                    },
                    {
                    id:2,
                    name:'面馆',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:3,
                    name:'盖浇饭',
                    img:require('../assets/image/6.png'),
                    }
                  ]
                },
                {
                  id:2,
                  name:'特色菜系',
                  list:[
                    {
                    id:0,
                    name:'川湘菜',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:1,
                    name:'西北菜',
                    img:require('../assets/image/6.png'),
                    },  
                  ]
                
                },{
                  id:3,
                  name:'全球美食',
                  list:[
                    {
                    id:0,
                    name:'全部',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:1,
                    name:'韩国料理',
                    img:require('../assets/image/6.png'),
                    },  
                  ]
                
                },{
                  id:4,
                  name:'甜品饮品',
                  list:[
                    {
                    id:0,
                    name:'全部',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:1,
                    name:'甜品咖啡',
                    img:require('../assets/image/6.png'),
                    },  
                    {
                    id:2,
                    name:'奶茶果汁',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:3,
                    name:'面包蛋糕',
                    img:require('../assets/image/6.png'),
                    },
                  ]
                },
                {
                  id:5,
                  name:'小吃夜宵',
                  list:[
                    {
                    id:0,
                    name:'全部',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:1,
                    name:'烧烤',
                    img:require('../assets/image/6.png'),
                    },
                    {
                    id:2,
                    name:'其他小吃',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:3,
                    name:'小龙虾',
                    img:require('../assets/image/6.png'),
                    }, 
                  ]
                },
                {
                  id:6,
                  name:'商店超市',
                  list:[
                    {
                    id:0,
                    name:'全部',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:1,
                    name:'其他快餐',
                    img:require('../assets/image/6.png'),
                    },
                    {
                    id:2,
                    name:'面馆',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:3,
                    name:'盖浇饭',
                    img:require('../assets/image/6.png'),
                    }
                  ]
                },
                {
                  id:7,
                  name:'鲜花绿植',
                  list:[
                    {
                    id:0,
                    name:'全部',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:1,
                    name:'其他快餐',
                    img:require('../assets/image/6.png'),
                    },
                    {
                    id:2,
                    name:'面馆',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:3,
                    name:'盖浇饭',
                    img:require('../assets/image/6.png'),
                    }
                  ]
                },
                {
                  id:8,
                  name:'医药健康',
                  list:[
                    {
                    id:0,
                    name:'全部',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:1,
                    name:'其他快餐',
                    img:require('../assets/image/6.png'),
                    },
                    {
                    id:2,
                    name:'面馆',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:3,
                    name:'盖浇饭',
                    img:require('../assets/image/6.png'),
                    }
                  ]
                },
                {
                  id:9,
                  name:'水果',
                  list:[
                    {
                    id:0,
                    name:'全部',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:1,
                    name:'其他快餐',
                    img:require('../assets/image/6.png'),
                    },
                    {
                    id:2,
                    name:'面馆',
                    img:require('../assets/image/5.png'),
                    },
                    {
                    id:3,
                    name:'盖浇饭',
                    img:require('../assets/image/6.png'),
                    }
                  ]
                },    
                
            ],
            items:[
                {
                    id: 0,
                    name: '全部'
                },
                {
                    id: 1,
                    name: '面食粥店'
                },
                {
                    id: 2,
                    name: '简餐便当'
                },
                {
                    id: 3,
                    name: '汉堡披萨'
                },
                {
                    id: 4,
                    name: '香锅冒菜'
                },
                {
                    id: 5,
                    name: '小吃炸串'
                },
                {
                    id: 6,
                    name: '地方菜系'
                },
                {
                    id: 7,
                    name: '日韩料理'
                },
                {
                    id: 8,
                    name: '轻食简餐'
                }
            ],
                isActive : -1
            }
          
        },
        methods:{
              fn(index){
                this.isActive = index
                },
            showPopup() {
                this.show = true;
                },
            onChange(index) {
                console.log(index);
                
            },
            handleClick(tab, event){
                console.log(event);
                this.white.class="blue"
            }
           
        }
    }

</script>

<style lang="scss" scoped>
    #box{
        height: 100%;
        width: 100%;
        display: flex;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        z-index: 100;
        position: sticky;
        box-sizing: inherit;
    }
    #choose{
        height: 10.666667vw;
        overflow-x: scroll;
        display: block;
        white-space: nowrap;
        list-style: none;
        padding-bottom: 1.333333vw;
        padding-left: 4vw;
        flex: 1;
    }
    .addclass{
        border-bottom: 2px solid #ffffff;
    }
    #choose li:last-child{
        margin-right: 0;
    }
    .chooses{
        height: 10.666667vw;
        display: inline-block;
        padding: 3.466667vw 0 1.6vw;
        margin-right: 7.466667vw;
        color: #ffffff;
        font-size: 14px;
        box-sizing: border-box;
        text-align: center;
    }
    #more{
        width: 12vw;
        height: 11.5vw;
        background-color: #0085ff;
    }
    #moreimg{
       width: 15px;
       display: block;
        margin: 7px auto;
    }
    #second{
        width: 100%;
        height: 65%;
    }
    #secondbox{
        width: 100%;
        height: 90%;
        display: flex;
        
    }
    .van-cell__right-icon{
        
        display: none !important;
    }
    #MenuHead{
        display: flex;
        height: 10%;
        /* line-height: 14px; */
        padding: 0 2vw 0 4vw;
        align-items: center;
        background-color: #f9f9f9;
    }
    #MenuHead h3{
        display: block;
        font-size: 14px;
    }
    .Submenu{
        width: 34.666667vw;
        background-color: #fcfcfc;
        overflow: scroll;
        display: block;
    }
    .tab{
        width: 34.666667vw;
    }
    .van-sidebar-item--select::before{
        background-color: #2395ff;
            height: 5.333333vw;
    }
    .van-sidebar{
        width: 34.666667vw;
    }
    .van-sidebar-item__text{
        padding-left: 20.333333vw;
    }
    .van-info{
        top: 10px ;
        right: -40px ;
        background-color: #f5f5f5 ;
    }
    #thirdchoose{
        padding: 0 4vw 0 5.6vw;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }
    #thirdtab{
        list-style: none;
    }
    #thirdtab div{
        height: 12.8vw;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #666666;
    }
    #thirdtab img{
            width: 9.866667vw;
            height: 9.866667vw;
            display: block;
            margin-right: 15px;
    }
    // .el-tabs__active-bar{
    //     display: none;
    // }
    // /deep/.el-tabs--left{
    //     width: 100vw;
    // }
    
</style>
<style>
    .el-tabs__item{
         width: 34.666667vw;
         text-align: left;
         background-color: #fcfcfc;
         position: relative;
    }
    .el-tabs__active-bar{
        display: none;
    }
    .el-tabs__nav-scroll{
        background-color: #fcfcfc;
    }
    /* .el-tabs__nav {
        text-align: left;
    } */
    .el-tabs__item.is-active{
        color: #666666;
        background: #ffffff;
    }
    .el-tabs--left .el-tabs__nav-wrap.is-left::after, .el-tabs--left .el-tabs__nav-wrap.is-right::after, .el-tabs--right .el-tabs__nav-wrap.is-left::after, .el-tabs--right .el-tabs__nav-wrap.is-right::after{
        width: 0;
    }
    .el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable, .el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable, .el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable, .el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable{
        padding: 0;
    }
    .el-tabs--left .el-tabs__item.is-left{
        text-align: left;
        height: 12.8vw;
        color: #666666;
    }
    #thirdtab li{
        height: 12.8vw;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #666666;
    }
    .el-tabs__nav-prev{
        display:none;
    }
    .el-tabs__nav {
        height: 100%;
        overflow-y: scroll;
    }
    .number{
        position: relative;
        width: 8vw;
        height: 3.733333vw;
        font-size: .533333rem;
        border: 1px solid #eee;
        border-radius: 2vw;
        color: #999;
        left: 20px;
    }
    .typename{
        /* position: relative; */
    }
    .white{
        display: inline-block;
        width: 1.066667vw;
        height: 5.333333vw;
        background-color: black;
        position: absolute;
        top: 9px;
        left: 0px;
    }
    .blue{
        display: inline-block;
        width: 1.066667vw;
        height: 5.333333vw;
        background-color: #2395ff;
        position: absolute;
        top: 9px;
        left: 0px;
    }
</style>