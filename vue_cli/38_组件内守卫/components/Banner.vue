<template>
  <div class="page-header">
    <h2>Vue Router Demo</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="go">测试一下go</button>
  </div>
</template>

// 自动手动引入的组件为一般组件，放在components文件中
<script>
export default {
  name: 'Banner',
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    go() {
      // go(i) i为正数，则为前进i次；i为负数，则后退i次
      this.$router.go(2)
    }
  }
}
</script>

<style>
</style>