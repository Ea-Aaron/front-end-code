<template>
  <div>
    <!-- 原生获取dom元素 -->
    <!-- <h1 id="demo">{{ msg }}</h1> -->
    <h1 ref="demo">{{ msg }}</h1>
    <button ref="btn" @click="showDom">点我获取上方DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDom() {
      console.log(this); // this指向是的组件的实例化对象
      console.log(this.$refs.demo); // 真实DOM元素
      console.log(this.$refs.btn); // 真实DOM元素
      console.log(this.$refs.sch); // school组件的实例化对象（vc）
    },
  },
};
</script>

<style>
</style>