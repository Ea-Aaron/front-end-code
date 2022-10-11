<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendSchoolName">点我把学生姓名给School组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendSchoolName() {
      //   this.$bus.$emit("hello", this.name);
      pubsub.publish("hello", 666);
    },
  },
};
</script>

// 当样式命名有冲突时，需要使用scope来时样式只能在局部使用
<style scoped>
.student {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>
