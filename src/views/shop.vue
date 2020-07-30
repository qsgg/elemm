<template>
  <div class="shop">
    <div class="bg">
      <img
        src="https://p1.meituan.net/mogu/3a3d8bf7a8d02a64d745495100721daa175772.jpg@220w_125h_1e_1c"
        alt
      />
    </div>
    <div class="logo">
      <img
        src="https://p0.meituan.net/xianfu/a5c31ae0e09bd021c65eab5fce254110325859.jpg@130w_130h_1e_1c"
        :style="`transform: scale(${scrollTop <= 50 ? 1-scrollTop*2/100: 0});`"
      />
    </div>
    <div class="info-control">
      <h1 class="title">广场前老牌卤味饭</h1>
      <div class="content">
        <span>评价4.7</span>
        <span>月售1929</span>
        <span>蜂鸟快送约30分钟</span>
      </div>
      <div class="volume">
        <div class="piece" v-for="item in 2" :key="item">
          <div class="text">
            <span>5.1</span>
            折起抵用券
          </div>
          <div class="btn">购买</div>
        </div>
      </div>
      <div class="tagInfo" :style="`height:${moveY}px`">
        <div class="gradient" ref="show" :style="`opacity: ${1-showY/50};`">
          <div class="tag-control">
            <div class="tags">
              <van-tag plain type="danger">标签</van-tag>
            </div>
            <div class="residue">
              <span>8个优惠</span>
              <van-icon name="arrow-down" />
            </div>
          </div>
          <div class="affiche">公告：传承中华美味，专业提供质简餐！</div>
        </div>
        <!-- 隐藏 -->
        <div class="show gradient" ref="showDis" :style="`opacity: ${showY/100-0.5};`">
          <div class="title flex-sb">
            <span>优惠</span>
            <van-icon name="arrow-up" />
          </div>
          <ul class="content">
            <li v-for="item in 5" :key="item">
              <van-tag plain type="danger">标签</van-tag>
              <p class="txt">配送费立减2.4元</p>
            </li>
          </ul>
          <div class="title">服务</div>
          <ul class="content">
            <li v-for="item in 2" :key="item">
              <van-tag plain>标签</van-tag>
              <p class="txt">支持订单极速退款</p>
            </li>
          </ul>
          <div class="title">公告</div>
          <div class="content">传承中华美味，专业提供质简餐！</div>
          <div class="top-btn" @click="btnUp"></div>
        </div>
      </div>
    </div>
    <!-- 点餐、评价、商家 -->
    <div @touchstart="touchStart" @touchmove="touchMoveDown" @touchend="touchEnd" ref="move">
      <van-tabs v-model="active" swipeable sticky color="blue">
        <van-tab class="min-height" title="点餐">
          <meal />
        </van-tab>
        <van-tab class="min-height" title="评价">
          <appraise />
        </van-tab>
        <van-tab class="min-height" title="商家">
          <storeInfo />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import meal from './meal.vue'
import appraise from './appraise.vue'
import storeInfo from './storeInfo.vue'
export default {
  data () {
    return {
      offsetTopArr: null,
      active: 0,
      startY: 0,
      moveY: 0,
      scrollTop: 0,
      showY: 0
    }
  },
  components: {
    meal,
    appraise,
    storeInfo
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    this.moveY = this.$refs.show.clientHeight
  },
  destroy () {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // 滑动开始
    touchStart: function (el) {
      this.scrollStatus = this.scrollTop > 0
      this.startY = el.touches[0].screenY
    },
    // 点击上箭头
    btnUp: function (el) {
      const y = this.$refs.show.clientHeight
      document.body.style.overflow = 'auto'
      const time = setInterval(() => {
        if (this.moveY < y) {
          this.$refs.showDis.style.zIndex = '-1'
          clearInterval(time)
          this.moveY = y
        }
        this.moveY -= 20
        this.showY -= 20
      }, 1)
    },
    // 向下滑动
    touchMoveDown: function (el) {
      if (this.scrollStatus) {
        return true
      }
      this.$refs.showDis.style.zIndex = '0'
      this.showY = el.touches[0].screenY - this.startY
      if (this.showY > 0) {
        el.preventDefault()
        this.moveY = this.showY + this.$refs.show.clientHeight
      } else {
        return true
      }
    },
    // 滑动结束
    touchEnd: function (el) {
      const y = this.$refs.show.clientHeight
      const seep = this.moveY - y > 100 ? +20 : -10
      const time = setInterval(() => {
        if (this.moveY <= y || this.moveY > 500) {
          clearInterval(time)
          if (this.moveY <= y) {
            this.moveY = y + 10
            this.showY = 0
            this.$refs.showDis.style.zIndex = '-1'
          }
          if (this.moveY > 500) {
            document.body.style.overflow = 'hidden'
          }
        }
        this.moveY += seep
      }, 1)
    },
    onScroll () {
      // 滚动监听器
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
    }
  }
}
</script>
 <style lang="scss" scoped>
.van-tabs {
  position: static;
}
.min-height {
  min-height: 93vh;
}
.flex-sb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fli {
  width: 100px;
  height: 100px;
  background-color: red;
  color: white;
  position: fixed;
  z-index: 555;
  top: 100px;
}
.shop {
  z-index:999;
  margin-bottom: 50px;
  position: relative;
  .bg {
    position: relative;
    height: 100px;
    img {
      z-index: -1;
      position: absolute;
      width: 100vw;
    }
  }
  .logo {
    position: absolute;
    top: 45px;
    width: 100vw;
    text-align: center;
    z-index: 1;
    img {
      width: 70px;
    }
  }
  .info-control {
    background-color: #fff;
    text-align: center;
    padding: 20px 20px 0;
    position: relative;
    .title {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .content {
      font-size: 0.5rem;
      margin: 5px 0;
      color: #666;
      span {
        padding: 0 10px;
        position: relative;
        &:not(:first-child)::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
    }
    .volume {
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
      .piece {
        display: flex;
        width: 49%;
        .text,
        .btn {
          background-color: coral;
          padding: 1vw 3.5vw;
          font-size: 0.5rem;
          color: white;
        }
        .text {
          flex: 2;
          border-radius: 0 5px 5px 0;
          span {
            font-size: 1rem;
          }
        }
        .btn {
          line-height: 1rem;
          border-radius: 5px 0 0 5px;
        }
      }
    }
    .tag-control {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      .residue {
        font-size: 10px;
        color: #999;
        span {
          margin-right: 5px;
        }
      }
    }
    .affiche {
      text-align: left;
      font-size: 10px;
      color: #666;
    }
    .tagInfo {
      padding-bottom: 20px;
      .gradient {
        position: absolute;
        width: 89%;
      }
      .show {
        text-align: left;
        z-index: -1;
        .title {
          font-size: 1.1rem;
          font-weight: bold;
          margin: 10px 0;
        }
        .content {
          li {
            margin: 10px 0;
            .txt {
              display: inline-block;
              margin: 0 10px;
            }
            span {
              padding: 2px 3px;
            }
          }
        }
        .top-btn {
          position: relative;
          margin-top: 50px;
          width: 100%;
          &::after,
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            width: 30px;
            height: 5px;
            background-color: #999;
            border-radius: 10px;
          }
          &::after {
            transform: translate(-100%) rotateZ(-20deg);
          }
          &::before {
            transform: translateX(-20%) rotateZ(20deg);
          }
        }
      }
    }
  }
}
</style>
