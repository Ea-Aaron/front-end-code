<template>
  <div>
    <!-- 使用v-bind绑定，vue会执行""中的表达式 -->
    <School></School>
    <hr />
    <Student></Student>
    <hr />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
};
</script>

<style>
</style>