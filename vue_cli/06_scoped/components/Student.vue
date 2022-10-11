<template>
  <div class="demo">
    <h2 class="title">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
};
</script>

// 当样式命名有冲突时，需要使用scope来时样式只能在局部使用
<style scoped>
.demo {
  background-color: skyblue;
}
</style>
