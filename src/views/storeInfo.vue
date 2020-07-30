<template>
  <div class="store-control">
    <div class="store-Info white">
      <h1>商家信息</h1>
      <div class="img">
        <img src="@/assets/images/logo.jpg" v-for="item in 4" :key="item" />
      </div>
      <p class="text">一滴黄金卤，百年中华情！连锁品牌，专业提供品质简餐</p>
    </div>
    <div class="list white">
      <div class="item flex" v-for="(item, index) in list" :key="index">
        <h1>{{item.name}}</h1>
        <div class="text" v-html="item.content"></div>
      </div>
    </div>
    <div class="service white">
      <h1>商家服务</h1>
      <p class="mini">
        <span class="icon">保</span> 该商户已购买食品责任险，食品安全有保障
      </p>
      <p class="mini">
        <span class="icon">退</span> 支持订单极速退款
      </p>
    </div>
    <div class="service acve white flex">
      <h1>营业资质</h1>
      <van-icon name="arrow" />
    </div>
    <div class="report">
      <van-button type="default" block>举报商家</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: '商家名称',
          content: '广场前老牌卤味饭'
        },
        {
          name: '商家品类',
          content: '广场前老牌卤味饭'
        },
        {
          name: '商家地址',
          content: '广场前老牌卤味饭'
        },
        {
          name: '商家电话',
          content: '<a href="tel:1388">联系商家</a>'
        },
        {
          name: '营业时间',
          content: '广场前老牌卤味饭'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.store-control {
  position: relative;
  background-color: #efefef;
  .white {
    background-color: #fff;
    padding: 0 10px;
    margin-bottom: 10px;
  }
  .store-Info {
    padding: 0 10px 10px;
    .img {
      white-space: nowrap;
      overflow-x: scroll;
      img {
        width: 25vw;
        height: 25vw;
        margin: 0 10px;
      }
    }
  }
  .list {
    .item {
      padding: 5px 0;
      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
    }
  }
  .service {
    padding: 2px 10px;
    .acve:active {
      background-color: #cecece;
    }
    .mini {
      font-size: 0.5rem;
      color: #999;
      .icon {
        display: inline-block;
        padding: 1px;
        line-height: 10px;
        border: 1px solid #eee;
        border-radius: 2px;
      }
    }
  }
  .acve {
    &:active{
      background-color: #ccc;
    }
  }
  .text {
    font-size: 0.5rem;
    color: #666;
  }

  .report {
    padding: 0 5px 10px;
  }
  h1 {
    font-family: "微软雅黑";
    font-size: 0.8rem;
  }
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
