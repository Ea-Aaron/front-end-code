<template>
  <h1>父组件</h1>
  <button @click="isShow = !isShow">更新组件</button>
  <hr>
  <child v-if="isShow"></child>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import child from './components/child.vue'

export default defineComponent({
  name: 'App',
  components: {
    child
  },
  setup() {
    const isShow = ref(true)
    return {
      isShow
    }
  },
})

</script>

<style lang='less'>

</style>