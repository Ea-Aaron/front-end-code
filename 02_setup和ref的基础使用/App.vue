<template>
  <div>{{count}}</div>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  // vue2的写法
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   updateCount() {
  //     this.count++
  //   }
  // }

  // vue3的写法
  // setup是组合API的入口函数
  setup() {
    // let count = 0 此时的数据并不是响应式的数据（响应式数据：数据变化，页面跟着渲染变化）
    // ref是一个函数，作用：定义一个响应式数据，返回一个Ref对象，对象中有一个value属性，想要对数据进行操作，需要使用ref.value操作
    // html模板中不需要写ref.value的写法
    // 一般用来定义一个基本类型的响应式数据
    const count = ref(0)
    function updateCount() {
      // count++  // 报错的原因是 count是一个Ref对象，对象不能进行++操作
      count.value++
    }
    // 返回的是一个对象
    return {
      // 属性
      count,
      // 方法
      updateCount
    }
  }
});
</script>

<style>

</style>
