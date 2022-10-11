<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <!-- 通过父组件给子组件绑定一个自定义时间实现：子给父传递数据 (第一种写法，使用v-on或@) -->
    <Student @aaron="getStudentName" @ceshi="m1" @click.native="show"></Student>

    <!-- 通过父组件给子组件绑定一个自定义时间实现：子给父传递数据 (第二种写法，使用ref) -->
    <!-- <Student ref="student"></Student> -->
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
  data() {
    return {
      msg: "你好啊！！",
    };
  },
  methods: {
    show() {
      alert(123);
    },
    getSchoolName(name) {
      console.log("App收到学校名：", name);
    },
    getStudentName(name, ...args) {
      console.log("App收到学生名：", name, args);
    },
    m1() {
      console.log("m1被调用了！");
    },
  },
  /* mounted() {
    setTimeout(() => {
      this.$refs.student.$on("aaron", this.getStudentName);
    }, 3000);
  }, */
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>