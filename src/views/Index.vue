<template>
  <div>
    <header>
      <van-icon
        name="location"
        size="20px"
        style="vertical-align:middle;padding-left:20px"
      />
      <span style="line-height:55px" id="sq">西安</span>
      <van-icon name="arrow-down" size="10px" />
    </header>
    <!-- 搜索框 -->
    <van-sticky ref="search">
      <van-search
        class="search"
        v-model="searchVal"
        @input="getInput"
        @focus="getFocus"
        @blur="getBlur"
        placeholder="搜索饿了么商家、商品名称"
        input-align="center"
      />
    </van-sticky>
    <!-- 一级菜单 -->
    <van-grid :column-num="5" :border="false" :icon-size="50">
      <!-- <van-grid-item
        v-for="item in HomeFirClass"
        :key="item.id"
        :img="item.img"
        :text="item.name"
      /> -->
    </van-grid>
    <!-- 二级菜单 -->
    <van-grid :column-num="5" :border="false" :icon-size="50">
      <van-grid-item
        v-for="item in HomeFirClass"
        :key="item.id"
        :icon="item.img"
        :text="item.name"
      />
    </van-grid>
    <div class="taocan">
      <h3>品质套餐</h3>
      <div class="dapei">搭配齐全吃得好</div>
      <div class="liji">立即抢购 ></div>
      <img src="../assets/images/tancan.webp" />
    </div>
    <div class="super">
      <div class="super_first">
        <img src="../assets/images/huang.webp" />
        <span class="hui">超级会员</span>
        <span class="every">每月领20元红包</span>
      </div>
      <div class="super_second">
        <a>限时1.99元开通 ></a>
      </div>
    </div>
    <div class="tuijian">
      <p>- 推荐商家 -</p>
    </div>

    <!-- 列表 -->
    <van-tabs
      v-model="active"
      sticky
      :offset-top="searchHight"
      animated
      swipeable
      color="blue"
    >
      <van-tab
        class="tab"
        :title="items.name"
        v-for="items in data"
        :key="items.id"
      >
        <list :data="items.list"></list>
      </van-tab>
    </van-tabs>
    <Tabbar></Tabbar>
    <search />
  </div>
</template>

<script>
import axios from 'axios'
import list from '../components/list'
import Tabbar from '../components/Tabbar'
export default {
  data () {
    return {
      active: 0,
      searchVal: '',
      searchHight: 0,
      HomeFirClass: [],

      data: [
        {
          id: 0,
          name: '综合排序',
          list: [
            {
              id: 0,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: true, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            },
            {
              id: 1,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            },
            {
              id: 2,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            },
            {
              id: 3,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            },
            {
              id: 4,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            },
            {
              id: 5,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            }
          ]
        },
        {
          id: 1,
          name: '距离最近',
          list: [
            {
              id: 0,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: true, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            },
            {
              id: 1,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            }
          ]
        },
        {
          id: 2,
          name: '销量最高',
          list: [
            {
              id: 0,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: true, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            },
            {
              id: 1,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            },
            {
              id: 2,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            },
            {
              id: 3,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/images/logo.jpg'),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ['20减19', '120减51', '50减22']
            }
          ]
        },
        {
          id: 3,
          name: '筛选',
          list: []
        }
      ],
      images: [require('../assets/images/swipe-1.gif'), 2, 3, 4]
    }
  },
  components: {
    list,
    Tabbar
  },
  created: function () {
    // this.getLocation()

    axios({
      url: 'http://localhost:3000/HomeFirClass'
    }).then(res => {
      this.HomeFirClass = res.data
    })
  },
  methods: {

    // this.HomeFirClass = res.data

    // 搜索获得焦点
    getFocus: function (el) {
      const i = document.querySelector("input[type='search']")
      i.style.textAlign = 'left'
      this.$router.push('search')
      console.log('git')
    },
    // 搜索框失去焦点
    getBlur: function () {
      const i = document.querySelector("input[type='search']")
      i.style.textAlign = 'center'
    },
    // 搜索框内容改变
    getInput: function (el) {
      console.log(el)
    }
    // 定位
    // getLocation () {
    //   AMap.plugin('AMap.Geolocation', function () {
    //     var geolocation = new AMap.Geolocation({
    //       enableHighAccuracy: true, // 是否使用高精度定位，默认:true
    //       timeout: 10000, // 超过10秒后停止定位，默认：无穷大
    //       maximumAge: 0, // 定位结果缓存0毫秒，默认：0
    //       convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
    //       showButton: true, // 显示定位按钮，默认：true
    //       buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
    //       buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    //       showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
    //       showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
    //       panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
    //       zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    //       resizeEnable: true
    //     })
    //     // getLocation.addControl(geolocation);
    //     geolocation.getCurrentPosition()
    //     AMap.event.addListener(geolocation, 'complete', onComplete)
    //     AMap.event.addListener(geolocation, 'error', onError)

    //     function onComplete (data) {
    //       // data是具体的定位信息
    //       console.log('定位成功信息：', data)
    //       document.getElementById('sq').innerHTML =
    //         data.addressComponent.district +
    //         data.addressComponent.street +
    //         data.addressComponent.streetNumber
    //     }

    //     function onError (data) {
    //       // 定位出错
    //       console.log('定位失败错误：', data)
    //       // self.getLngLatLocation()
    //     }
    //   })
    // }
  },
  mounted () {
    console.log(this.$refs.search.height)
    this.searchHight = this.$refs.search.height
  },
  watch: {
    searchVal: (val, old) => {
      console.log(`旧：${old} - 新：${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  padding: 0;
  margin: 0;
}
header {
  width: 100%;
  height: 50px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  font-size: 1.053333rem;
  font-weight: 600;
  color: aliceblue;
  line-height: 60px;
  // padding-left: 20px;
}
.taocan {
  height: 110px;
  width: 94%;
  background-color: #f7f7f7;
  position: relative;
  left: 3%;
}
.taocan h3 {
  padding-top: 10px;
  padding-left: 20px;
}
.taocan .dapei {
  padding-top: 5px;
  color: #777;
  padding-left: 20px;
  font-size: 0.846667rem;
}
.taocan .liji {
  padding-top: 5px;
  padding-left: 20px;
  color: #af8260;
  font-size: 0.76667rem;
  font-weight: 600;
}
.taocan img {
  width: 130px;
  height: 100px;
  position: absolute;
  top: 3%;
  right: 10px;
}

.super {
  margin-top: 5px;
  height: 40px;
  width: 94%;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ffefc4),
    to(#f3dda0)
  );
  position: relative;
  left: 3%;
  margin-bottom: 10px;
}
.super_first {
  line-height: 40px;
  float: left;
  padding-left: 20px;
}
.super_first img {
  vertical-align: middle;
  width: 18px;
  height: 18px;
}
.super_first .hui {
  font-size: 14px;
}
.super_first .every {
  font-size: 10px;
}
.super_second {
  float: right;
  font-size: 10px;
  line-height: 40px;
}
.tuijian {
  height: 40px;
  width: 94%;
  text-align: center;
}
.van-search {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
}
.tab {
  min-height: 90vh;
}
</style>
