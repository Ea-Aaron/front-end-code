<template>
  <div>哈哈，我又变帅了</div>
  {{num}}
</template>

<script lang="ts">
// defineComponent函数，目的时定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字
  name: 'App',
  setup() {
    const num = 100
    return {
      num
    }
  }
});
</script>

<style>

</style>
