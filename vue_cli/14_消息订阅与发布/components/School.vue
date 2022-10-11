<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学生地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "School",
  data() {
    return {
      name: "aaron的小屋 atigugu",
      address: "武汉",
    };
  },
  mounted() {
    /* this.$bus.$on("hello", (data) => {
      console.log("School组件收到了数据，数据是：", data);
    }); */
    this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      console.log("School收到了消息", msgName, data);
    });
  },
  beforeDestroy() {
    // this.$bus.$off("hello");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: orange;
  padding: 5px;
}
</style>
