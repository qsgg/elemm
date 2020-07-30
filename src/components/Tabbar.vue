<template>
  <nav>
    <ul>
      <router-link :to="navlist[0]" tag="li" activeClass="kerwinactive" >
      <i class="el-icon-eleme"></i>
      首页
      </router-link>
      <router-link :to="navlist[1]" tag="li" activeClass="kerwinactive">
      <i class="el-icon-discover"></i>
      发现
      </router-link>
      <router-link :to="navlist[2]" tag="li" activeClass="kerwinactive">
       <i class="el-icon-tickets"></i>
      订单
      </router-link>
      <router-link :to="navlist[3]" tag="li" activeClass="kerwinactive">
       <i class="el-icon-user"></i>
      我的
      </router-link>

    </ul>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      navlist: ['/index', '/find', '/order', '/my']
    }
  }
}
</script>
<style lang="scss">
  .kerwinactive{
    color:blue;
  }

  nav{
    position: fixed;
    left:0px;
    bottom: 0px;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    background-color: white;
    z-index: 999;
    ul{
      display: flex;
      li{
        font-size: 10px;
        padding-top: 10px;
        flex:1;
        line-height:25px;
        text-align: center;
        display: flex;
        flex-direction: column;
      }
      li>i{
        font-size:20px
      }
    }
  }
</style>
