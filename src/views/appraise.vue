<template>
  <div class="appraise">
    <div class="rate-control flex">
      <div class="letf flex">
        <div class="num">4.7</div>
        <div class="rate">
          <div class="text">商家评分</div>
          <van-rate v-model="rateVal" readonly allow-half size="5" gutter="10" />
        </div>
      </div>
      <div class="right flex">
        <div class="merchant flex">
          <div class="taste">
            <p>味道</p>
            <span class="font-middle">4.7</span>
          </div>
          <div class="pack">
            <p>包装</p>
            <span class="font-middle">4.7</span>
          </div>
        </div>
        <div class="rider">
          <p>配送</p>
          <span class="font-middle">4.7</span>
        </div>
      </div>
    </div>
    <div class="tabs">
      <span v-for="item in tags" :key="item.id">
        <van-tag
          class="tag-item"
          type="danger"
          :text-color="item.color"
          :color="item.bgColor"
          @click="onTabs"
        >{{`${item.name}&nbsp;${item.num}`}}</van-tag>
      </span>
      <van-divider dashed :style="{borderColor:'#9f9f9f'}" />
      <van-checkbox v-model="checked" checked-color="#07c160">只看有内容的评价</van-checkbox>
    </div>
    <div class="comm-control">
      <div class="comment" v-for="item in comment" :key="item.id">
        <div class="icon">
          <img :src="item.icon" />
        </div>
        <div class="main">
          <div class="title flex">
            <div>
              <span>{{item.name}}</span>
            </div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="rate">
            <van-rate v-model="item.rate" :size="1" readonly :gutter="12" />
            <span class="zan">{{item.rate ==5?"超赞":''}}</span>
          </div>
          <div class="content" v-html="item.content"></div>
          <div class="tags">
            <van-icon class="job" name="good-job-o" :size="20" />
            <van-tag class="job" color="#ebf5ff" text-color="#6b7982" v-for="(tag,i) in item.tags" :key="i">{{tag}}</van-tag>
          </div>
          <div class="reply">{{item.reply}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rateVal: 3.7,
      checked: true,
      userRate: 4,
      tags: [
        {
          id: 0,
          name: '全部',
          num: 345,
          color: 'white',
          bgColor: '#2297fe'
        },
        {
          id: 1,
          name: '最新',
          num: 0,
          color: 'black',
          bgColor: '#eaf6ff'
        },
        {
          id: 2,
          name: '好评',
          num: 330,
          color: 'black',
          bgColor: '#eaf6ff'
        },
        {
          id: 3,
          name: '差评',
          num: 13,
          color: '#666',
          bgColor: '#f5f5f5'
        }
      ],
      comment: [
        {
          id: 0,
          name: '无*****哥',
          icon:
            'https://p0.meituan.net/xianfu/a5c31ae0e09bd021c65eab5fce254110325859.jpg@130w_130h_1e_1c',
          rate: 5,
          time: '2020-06-03',
          content: '哈哈哈哈哈啊啊哈哈啊啊哈哈哈阿',
          tags: ['波霸奶茶', '香辣汉堡'],
          reply:
            '商家回复：亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝你生活愉快！'
        },
        {
          id: 1,
          name: '无*****哥',
          icon:
            'https://p0.meituan.net/xianfu/a5c31ae0e09bd021c65eab5fce254110325859.jpg@130w_130h_1e_1c',
          rate: 4,
          time: '2020-06-03',
          content: '哈哈哈哈哈啊啊哈哈啊啊哈哈哈阿',
          tags: ['北京鸡肉卷'],
          reply:
            '商家回复：亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝你生活愉快！'
        }
      ]
    }
  },
  methods: {
    onTabs: function (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  flex: 1;
}
.font-middle {
  font-size: 1.2rem;
}
.appraise {
  background-color: #ececec;
}
.rate-control {
  font-size: 0.8rem;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #fff;
  .letf {
    align-items: center;
    .num {
      font-size: 2.3rem;
      color: red;
      margin-right: 10px;
    }
    .rate {
      .text {
        margin-bottom: 10px;
      }
    }
  }
  .right {
    .merchant {
      flex: 2;
      justify-content: space-between;
      padding: 0 20px;
    }
    .rider {
      flex: 1;
      text-align: right;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 80%;
        left: 0;
        top: 20%;
        background-color: #eee;
      }
    }
  }
}
.tabs {
  background-color: #fff;
  padding: 20px 10px;
  margin-bottom: 10px;
  .tag-item {
    margin: 0 5px;
    font-size: 0.8rem;
    padding: 5px 8px;
  }
}
.comm-control {
  padding: 0 10px;
  background-color: #fff;
  .comment {
    display: flex;
    padding: 20px 0;
    &:not(:last-of-type) {
      border-bottom: 1px solid #eee;
    }
    .icon {
      width: 50px;
      height: 40px;
      padding-right: 10px;
      img {
        height: 100%;
      }
    }
    .main {
      font-size: 0.9rem;
      .title {
        justify-content: space-between;
        .time {
          color: #aaa;
          font-size: 0.5rem;
        }
      }
      .rate {
        margin: 3px 0;
        .zan {
          margin-left: 15px;
          color: #ed6615;
        }
      }
      .tags {
        display: flex;
        align-items: center;
        margin: 5px 0;
        .job {
          margin-right: 5px;
        }
      }
      .reply {
        background-color: #fafafa;
        border: 1px solid #eee;
        padding: 10px;
        color: #666;
        margin-top: 15px;
        font-size: 0.8rem;
        border-radius: 6px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: #fafafa;
          border-width: 1px;
          border-style: solid;
          border-color: #eee #eee transparent transparent;
          left: 20px;
          top: -7px;
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
