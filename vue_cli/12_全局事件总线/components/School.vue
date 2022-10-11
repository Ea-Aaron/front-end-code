<template>
  <div class="school">
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
    };
  },
  mounted() {
    this.$bus.$on("hello", (data) => {
      console.log("School组件收到了数据，数据是：", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.school {
  background-color: orange;
  padding: 5px;
}
</style>
