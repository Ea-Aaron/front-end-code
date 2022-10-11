<template>
  <div>
    <h1 class="title">你好啊</h1>
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

<style scoped>
.title {
  color: red;
}
</style>