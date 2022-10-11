<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学生地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校姓名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "aaron的小屋 atigugu",
      address: "武汉",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped>
.school {
  background-color: orange;
  padding: 5px;
}
</style>
