<template>
    <div>
        <van-sticky>
       <STheader/> 
       </van-sticky>
         <van-tabs
      v-model="active"
      sticky
    
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
    </div>

</template>

<script>
import STheader from '../components/STheader';

import list from '../components/list';

export default {
    name:"SecondTab",
    components:{
        STheader,list
    },
    data(){
        return{
            active: 0,
   data: [
        {
          id: 0,
          name: '综合排序',
          list: [
            {
              id: 0,
              title: '太二酸菜鱼(奥体高德汇店)',
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
              imgUrl: require('../assets/image/logo.jpg'),
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
      ]
        }
    }
}
</script>

<style>

</style>