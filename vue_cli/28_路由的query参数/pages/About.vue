<template>
  <h2>我是About的内容</h2>
</template>

// 路由引入的组件成为路由组件，放在pages文件中
<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log('About即将被销毁');
  },
  mounted() {
    console.log('About挂载完毕', this);
  },
};
</script>

<style>
</style>