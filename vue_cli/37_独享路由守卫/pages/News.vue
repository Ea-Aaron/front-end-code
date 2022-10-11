<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1
    }
  },
  // 原本写法
  /* mounted() {
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  beforeDestroy() {
    console.log('News即将被销毁了');
    clearInterval(this.timer)
  } */

  // 新的生命周期钩子 路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
  activated() {
    console.log('News被激活了');
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    console.log('News失活了');
    clearInterval(this.timer)
  },
}
</script>

<style>
</style>