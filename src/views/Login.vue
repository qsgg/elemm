<template>
  <div id="login">
    <div id="Img">
      <img src="../assets/img/ele.png" />
    </div>
    <div id="Inp">
      <input type="text" name id="Inp1" placeholder="手机号" v-model="phone" />
    </div>
    <div id="Pwd">
      <input type="text" name id="Inp2" placeholder="验证码" v-model="userpass" />
      <span @click="Click" id="Yzm">获取验证码</span>
    </div>
    <div id="txt">
      <p>
        新用户登录即自动注册，并表示同意
        <span>《用户服务协议》</span>和
        <span>《隐私权政策》</span>
      </p>
    </div>
    <div id="btn">
      <button @click="isLogin">登录</button>
    </div>
    <div id="p">
      <p>关于我们</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import My from '../views/My'
export default {
    name:"login",
    data(){
        return{
            phone:"",
            userpass:"",
            a:""
        }
    },
    methods:{
        Click(){
                axios.get('http://luoshui.xyz:9000/user/sendcode', {
                params:{phone:this.phone},
                    })
                .then(res=>{
                  console.log(res.data);
                     this.a = res.data.data;
                });
            },
        isLogin(){
            if(this.userpass ==this.a ){
                axios.get('http://luoshui.xyz:9000/user/login',{
                        params:{phone:this.phone},
                    })
                    .then(res=>{
                        this.$router.push({name:'Lading'});
                        console.log(res.data);
                    })
                }
            },
    },
}
</script>

<style scoped>
#Img {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
#Img img {
  width: 137px;
  height: 56px;
}
#Inp {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
#Inp1 {
  width: 300px;
  height: 43px;
  border: 1px solid pink;
}
input::-webkit-input-placeholder {
  text-indent: 10px;
}
#Pwd {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
#Inp2 {
  width: 300px;
  height: 43px;
  border: 1px solid pink;
}
#txt {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 14px;
}
#txt p {
  width: 300px;
  color: gray;
}
#txt span {
  color: blue;
}
#btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
#btn button {
  width: 300px;
  height: 42px;
  background-color: #4cd96f;
  color: white;
  font-size: 18px;
  border-radius: 4px;
  outline: none;
  border: none;
}
#p {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: gray;
  font-size: 12px;
}
#login {
  position: relative;
}
#Yzm {
  display: inline-block;
  width: 80px;
  height: 40px;
  color: #ccc;
  position: absolute;
  top: 85px;
  right: 45px;
}
</style>