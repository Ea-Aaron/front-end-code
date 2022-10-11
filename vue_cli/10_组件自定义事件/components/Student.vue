<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生姓名给App</button>
    <button @click="unbind">点我解绑发送学生姓名</button>
    <button @click="death">销售student实例对象（vc）</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    add() {
      console.log("add被调用了");
      this.number++;
    },
    sendStudentName() {
      this.$emit("aaron", this.name, 666, 888, 999);
      this.$emit("ceshi");
    },
    unbind() {
      //   this.$off("aaron"); // 解绑单个事件
      //   this.$off(["aaron", "ceshi"]); // 解绑多个事件
      this.$off(); // 解绑student实例对象的全部事件
    },
    death() {
      this.$destroy(); // 销毁了student实例，销毁后所有student实例对象上的所有自定义事件都不奏效
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
