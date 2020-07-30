<template>
  <div>
    <van-sticky ref="search">
      <van-search
        class="search"
        v-model="searchVal"
        @input="getInput"
        @focus="getFocus"
        @blur="getBlur"
        placeholder="请输入搜索关键词"
        shape="round"
        show-action
        input-align="left"
        :autofocus="true"
      >
        <div slot="left" class="back" @click="getBack">
          <van-icon name="arrow-left" size="20" />
        </div>
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </van-sticky>
    <div class="found">
      <h4>历史搜索</h4>
      <span
        v-for="(item,index) in foundList"
        :key="index"
        @click="onSearch"
        :data-text="item"
      >{{item}}</span>
    </div>

      <div class="found">
      <h4>热门搜索</h4>
      <span
        v-for="(item,index) in foundList"
        :key="index"
        @click="onSearch"
        :data-text="item"
      >{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchVal: '',
      foundList: ['华莱士', '酸菜鱼', '隆江猪脚饭', '木桶饭', '肯德基']
    }
  },
  methods: {
    // 搜索获得焦点
    getFocus: function (el) {
      const i = document.querySelector("input[type='search']")// eslint-disable-line no-unused-vars
      // i.style.textAlign = "left";
    },
    // 搜索框失去焦点
    getBlur: function () {
      const i = document.querySelector("input[type='search']")// eslint-disable-line no-unused-vars
      // i.style.textAlign = "center";
    },
    // 搜索框内容改变
    getInput: function (el) {
      console.log(el)
    },
    // 返回
    getBack: function () {
      this.$router.go(-1)
    },
    onSearch: function (el) {
      this.searchVal = el.target.dataset.text || this.searchVal
      console.log(this.searchVal)
    }
  }
}
</script>
<style lang="scss" scoped>
.back {
  margin-right: 10px;
  display: flex;
  align-items: center;
}
.found {
  padding: 10px 10px 0;
  h4 {
    margin: 5px;
  }
  span {
    display: inline-block;
    background-color: #f7f7f7;
    padding: 10px 15px;
    margin: 5px;
    font-size: 0.8rem;
    border-radius: 5px;
  }
}
</style>
