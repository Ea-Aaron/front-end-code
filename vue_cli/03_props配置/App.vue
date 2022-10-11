<template>
  <div>
    <!-- 使用v-bind绑定，vue会执行""中的表达式 -->
    <Student name="张三" sex="男" :age="18"></Student>
    <hr />
    <Student name="李思思" sex="女" :age="20"></Student>
    <hr />
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
};
</script>

<style>
</style>