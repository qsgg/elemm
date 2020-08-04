<template>
  <div>
    <div v-for="item in data" :key="item.id">
      <div class="card" @click="getShop(item.id)">
        <div class="img">
          <img :src="item.imgUrl" />
        </div>
        <div class="content">
          <div class="title">{{item.title}}</div>
          <div class="evaluate">
            <span style="color: #f6620d;">
              <van-icon name="star" />
              {{item.evaluate}}
            </span>
            月售{{item.monthly}}
          </div>
          <div class="distances">
            <div class="starting">
              <span class="rise">起送￥{{item.standard}}</span>
              <span class="give">
                {{ item.delivery.free ? `免配送费` : `配送`}}
                <span
                  :class="item.delivery.free ? 'free' : ''"
                >{{item.delivery.price}}</span>
              </span>
            </div>
            <div class="time-dis">
              <span class="disan">{{item.distance}}</span>
|
              <span class="time">{{item.time}}分钟</span>
            </div>
          </div>
          <div class="tags">
            <span class="tag" v-for="(items,index) in item.tags" :key="index">{{items}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data'],
  methods: {
    // 跳转到商店
    getShop: function (id) {
      console.log('跳转')
      console.log(id)
      this.$router.push({ path: 'shop', query: { id } })
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  padding: 0 20px;
  margin: 30px 0 0;
  .img {
    margin-right: 14px;
    img {
      width: 20vw;
      height: 20vw;
    }
  }
  .content {
    font-size: 12px;
    width: 100%;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .evaluate {
      padding-top: 5px;
    }
    .distances {
      padding-top: 5px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      span {
        margin-right: 5px;
      }
      span:last-of-type {
        margin: 0;
      }
      .give {
        .free {
          color: #ccc;
          text-decoration: line-through;
        }
      }
    }
    .tags {
      padding-top: 10px;
      .tag {
        padding: 3px 2px;
        color: #cc5860;
        border: 1px solid #e5d8dd;
        border-radius: 2px;
        margin-right: 5px;
      }
    }
  }
}
</style>