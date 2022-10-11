<template>
  <div>父组件</div>
  <h2>MSG:{{msg}}</h2>
  <button @click="updataMsg">更新数据</button>
  <hr>
  <Child :dataMsg="msg"></Child>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Child from './components/child.vue'

export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  setup() { 
    let msg = ref('你在干什么')
    function updataMsg() { 
      msg.value += '='
    }
    return {
      msg,
      updataMsg
    }
  }
});
</script>

<style>

</style>
