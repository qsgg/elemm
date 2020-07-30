<template>
  <div id="app">
    <div id="box">
      <div id="box1">
        <div id="leftBox">
          <img src="../assets/img/1.png"/>
        </div>
        <div id="rightBox">
            <h3>登陆/注册</h3>
            <p>
                <i class="el-icon-refrigerator"></i>
                <span>登录后享受更多特权</span>
            </p>
            <span id="Span"><i class="el-icon-arrow-right"></i></span>
        </div>
      </div>
    </div>
    <div id="nav">
        <div id="leftNav">
          <div id="leftnav"><img src="../assets/img/hongbao.png" alt=""></div>
          <p>红包</p>
        </div>
        <div id="rightNav">
          <div id="rightnav"><img src="../assets/img/jinbi.png" alt=""></div>
          <p>金币</p>
        </div>
    </div>
    <div id="tal">
      <div id="tal1">
        <img src="../assets/img/dizhi.png" alt="">
        <span>我的地址</span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div id="tal2">
        <img src="../assets/img/gouwudai.png" alt="">
        <span>金币分享</span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div id="tal3">
        <img src="../assets/img/gift.png" alt="">
        <span>分享拿20元现金</span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div id="tal4">
        <img src="../assets/img/erji.png" alt="">
        <span>我的客服</span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div id="tal5">
        <img src="../assets/img/1.png" alt="">
        <span>下载饿了么APP</span>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div id="tal6">
        <img src="../assets/img/guizeshuoming.png" alt="">
        <span>规则中心</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div id="Ys">
      <p>隐私政策</p>
    </div>
    <div id="footer">

    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style scoped>
#app{
  background-color: #f5f5f5;
}
#box{
    width: 100%;
    height: 110px;
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    display: flex;
    justify-content: center;
    align-items: center;
}
#box1{
    width: 85%;
    height: 60px;
    /* background-color: pink; */
    display: flex;
}
#leftBox{
    width: 18%;
    height: 100%;
    /* background-color: blue; */
    float: left;
}
#leftBox img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
#rightBox{
    flex: 1;
    position: relative;
    /* background-color: yellow; */
}
#rightBox h3{
    color: white;
    margin-left: 5%;
}
#rightBox p{
    color: white;
    margin-left: 5%;
    font-size: 12px;
    margin-top: 8px;
}
#Span{
    color: white;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 30%;
}
#nav{
    width: 100%;
    height: 90px;
    background: white;
    display: flex;
}
#leftNav{
  width: 50%;
  height: 100%;
  /* background-color: blue; */
  position: relative;
  border-right:1px solid pink;
  border-bottom: 1px solid pink;
}
#rightNav{
  width: 50%;
  height: 100%;
  /* background-color: pink; */
  position: relative;
  border-bottom:1px solid pink;
}
#leftnav{
  width: 25px;
  height: 25px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 20%;
  left: 41%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#rightnav{
  width: 25px;
  height: 25px;
  background-color: #6AC20B;
  border-radius: 50%;
  position: absolute;
  top: 20%;
  left: 41%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#leftnav img{
  width: 16px;
  height: 16px;

}
#rightnav img{
  width: 16px;
  height: 16px;
}
#leftNav p{
  font-size: 12px;
  color: red;
  position: absolute;
  top: 55%;
  left: 42%;
}
#rightNav p{
  font-size: 12px;
  color: red;
  position: absolute;
  top: 55%;
  left: 42%;
}
#tal img{
  width: 20px;
  height: 20px;
  padding-right: 8px;
  margin-left: 8px;
}
#tal div{
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: white;
}
.el-icon-arrow-right{
  position: absolute;
  right: 10px;
  top:12px;
}
#tal1{
  margin-top: 20px;
}
#tal2{
  margin-top: 20px;
}
#tal4{
  margin-top: 20px;
}
#tal6{
  border-bottom: 1px solid pink;
}
#Ys{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
  color: hotpink;
  font-size: 16px;
}
#footer{
  height: 75px;
}
</style>
