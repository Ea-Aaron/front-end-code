<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件的总和为：{{ sum }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="personAdd">添加</button>
    <hr />
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    sum() {
      return this.$store.state.sum;
    },
    personList() {
      return this.$store.state.personList;
    },
  },
  methods: {
    personAdd() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("PERSON_ADD", personObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>