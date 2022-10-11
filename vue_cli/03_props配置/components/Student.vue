<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <button @click="addAge">点我年龄+1</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      myAge: this.age,
      msg: "学习Vue的学生",
    };
  },
  methods: {
    addAge() {
      this.myAge++;
    },
  },

  // 简单声明接受
  //   props: ["name", "sex", "age"],

  //   接受的同时对数据进行类型限制
  /* props: {
    name: String,
    sex: String,
    age: Number,
  }, */

  //   接受的同时对数据进行类型限制+是否必填+默认值
  props: {
    name: {
      type: String, // 类型
      require: true, // 是否必填
    },
    sex: {
      type: String,
      require: false,
    },
    age: {
      type: Number,
      default: 88, // 默认值
    },
  },
};
</script>

<style>
</style>