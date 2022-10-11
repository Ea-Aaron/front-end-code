<template>
  <div>
    <button @click="getStudent">点我请求学生数据</button>
    <button @click="getCars">点我请求汽车数据</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  methods: {
    getStudent() {
      axios.get('http://localhost:8080/aaron1/students').then(
        response => {
          console.log('请求成功了', response.data);
        },
        error => {
          console.log('请求失败了', error.message);
        }
      )
    },
    getCars() {
      axios.get('http://localhost:8080/aaron2/cars').then(
        response => {
          console.log('请求成功了', response.data);
        },
        error => {
          console.log('请求失败了', error.message);
        }
      )
    }
  }
};
</script>

<style>
</style>