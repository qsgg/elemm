<template>
  <div class="order-control">
    <div class="flex justify vertical">
      <h2>我的订单</h2>
      <van-icon name="search" size="22px" />
    </div>
    <div class="panel flex" v-for="item in list" :key="item.id">
      <img class="img" :src="item.img" alt />
      <div class="content">
        <div class="flex vertical justify">
          <div class="flex vertical">
            <span class="store">{{item.title}}</span>
            <van-icon name="arrow" />
          </div>
          <span class="food">{{item.delivery}}</span>
        </div>
        <div class="time">{{item.time}}</div>
        <van-divider />
        <div class="food flex justify">
          <span class="food-name">{{item.food}}</span>
          <span>
            <span class="rmb">￥</span>
            {{item.price}}
          </span>
        </div>
        <div class="btns flex">
          <van-button class="btn" size="small" type="default">送祝福</van-button>
          <van-button class="btn" size="small" type="default">评价得{{item.coin}}金币</van-button>
          <van-button class="btn" size="small" plain hairline type="info">再来一单</van-button>
        </div>
      </div>
    </div>
    <van-divider>仅展示近一年的外卖订单</van-divider>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from '../components/Tabbar'
export default {
  data () {
    return {
      list: [
        {
          id: 0,
          img: 'https://p0.meituan.net/xianfu/a5c31ae0e09bd021c65eab5fce254110325859.jpg@130w_130h_1e_1c',
          title: '加州汉堡·炸鸡(东圃店)',
          delivery: '已送达',
          time: '2小时55分钟前',
          food: '吃鸡自选套餐-金牌童子鸡',
          price: 24.77,
          coin: 12
        },
        {
          id: 1,
          img: 'https://p0.meituan.net/xianfu/a5c31ae0e09bd021c65eab5fce254110325859.jpg@130w_130h_1e_1c',
          title: '加州汉堡·炸鸡(东圃店)',
          delivery: '已送达',
          time: '2小时55分钟前',
          food: '吃鸡自选套餐-金牌童子鸡',
          price: 24.77,
          coin: 12
        }
      ]
    }
  },
  components: {
    tabBar
  }
}
</script>

<style lang="scss" scope>
.order-control {
  background-color: #f9f9f9;
  padding: 0 10px;
  height: 92vh;
  h2{
      padding-left: 10px;
  }
}
.flex {
  display: flex;
}
.justify {
  justify-content: space-between;
}
.vertical {
  align-items: center;
}
.panel {
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  .img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-right: 15px;
  }
  .content {
    width: 100%;
    .store {
      font-weight: bold;
    }
    .time {
      font-size: 0.8rem;
      margin-top: 6px;
    }
    .food {
      font-size: 0.9rem;
      .rmb {
        font-size: 0.6rem;
      }
    }
    .btns {
      margin-top: 20px;
      justify-content: flex-end;
      .btn {
        margin-right: 15px;
      }
      .btn:last-child {
        margin: 0;
      }
    }
  }
}
</style>
