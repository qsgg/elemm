<template>
  <div id="app">
      <div id="nav">
        <div id="leftNav">
          <div id="leftnav"><img src="../assets/img/liping.png" alt=""></div>
          <span>金币</span>
        </div>
        <div id="rightNav">
          <div id="rightnav"><img src="../assets/img/liping.png" alt=""></div>
          <span>兑换记录</span>
        </div>
    </div>
    <div id="List">
        <div id="list">
            <img src="../assets/img/1.jpg">
            <div id="Img">
                <img src="../assets/img/2.jpg">
                <img src="../assets/img/3.jpg">
            </div>
        </div>
    </div>
    <div id="imgList">
      <div id="imglist">
        <div id="Leftlist">
          <img src="../assets/img/4.jpg" alt="">
          <p>PS4</p>
        </div>
        <div id="Rightlist">
          <img src="../assets/img/5.jpg" alt="">
          <p>Beats头戴式耳机</p>
        </div>
      </div>
      
    </div>

    <div id="imgList1">
      <div id="imglist">
        <div id="Leftlist">
          <img src="../assets/img/2.png" alt="">
          <p>PS4</p>
        </div>
        <div id="Rightlist">
          <img src="../assets/img/1.jpeg" alt="">
          <p>Beats头戴式耳机</p>
        </div>
      </div>
    </div>

    <div id="imgList2">
      <div id="imglist">
        <div id="Leftlist">
          <img src="../assets/img/6.jpg" alt="">
          <p>PS4</p>
        </div>
        <div id="Rightlist">
          <img src="../assets/img/2.jpeg" alt="">
          <p>Beats头戴式耳机</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name:"PointsMall"
}
</script>

<style scoped>
#app{
    background-color:white;
}
#nav{
    width: 100%;
    height: 40px;
    background: white;
    display: flex;
}
#leftNav{
  width: 50%;
  height: 100%;
  position: relative;
  border-right:1px solid pink;
  border-bottom: 1px solid pink;
}
#rightNav{
  width: 50%;
  height: 100%;
  position: relative;
  border-bottom:1px solid pink;
}
#leftnav{
  width: 22px;
  height: 22px;
  background-color: orange;
  border-radius: 50%;
  position: absolute;
  top: 20%;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#rightnav{
  width: 22px;
  height: 22px;
  background-color: #6AC20B;
  border-radius: 50%;
  position: absolute;
  top: 20%;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#leftnav img{
  width: 12px;
  height: 12px;
  
}
#rightnav img{
  width: 12px;
  height: 12px;
}
#leftNav span{
  font-size: 12px;
  color: red;
  position: absolute;
  top: 25%;
  left: 25%;
}
#rightNav span{
  font-size: 12px;
  color: red;
  position: absolute;
  top: 25%;
  left: 25%;
}
#List{
    width: 100%;
    height: 125px;
    margin-top: 25px;
    margin-left: 20px;
}
#list{
    width: 100%;
    height: 100%;
    display: flex;
}
#list>img:nth-child(1){
    width: 170px;
    height: 124px;
    float: left;
}
#Img{
    float: right;
    border-left: 1px solid #f5f5f5;
}
#Img>img:nth-child(1){
    width: 160px;
    height: 60px;
}
#Img>img:nth-child(2){
    width: 160px;
    height: 60px;
}
#imgList{
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
align-items: center;
background-color: white;
}
#imgList img{
  width: 160px;
  height: 120px;
}
#imgList p{
  font-size: 14px;
}
#Leftlist{
  float: left;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 8px;
  text-align: center;
}
#Rightlist{
  float: right;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  margin-left: 10px;
}

#imgList1{
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
align-items: center;
background-color: white;
}
#imgList1 img{
  width: 160px;
  height: 120px;
}
#imgList1 p{
  font-size: 14px;
}

#imgList2{
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
align-items: center;
background-color: white;
}
#imgList2 img{
  width: 160px;
  height: 120px;
}
#imgList2 p{
  font-size: 14px;
}
</style>