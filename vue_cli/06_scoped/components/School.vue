<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学生地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "aaron的小屋 atigugu",
      address: "武汉",
      x: 666,
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>
