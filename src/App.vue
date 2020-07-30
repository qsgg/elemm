<template>
  <div>
    <tabbar></tabbar>
    <!-- 路由容器(基于slot封装) -->
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar'
export default {
  components: {
    tabbar
  }
}
</script>
<style lang="scss">
  *{
    margin:0;
    padding: 0;
  }
  ul{
    list-style:none;
  }
</style>
