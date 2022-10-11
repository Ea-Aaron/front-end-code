<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log('Home即将被销毁');
  },
  mounted() {
    console.log('Home挂载完毕', this);
  },
};
</script>

<style>
</style>