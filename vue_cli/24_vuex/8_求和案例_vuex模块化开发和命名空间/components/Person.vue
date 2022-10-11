<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件的总和为：{{ sum }}</h3>
    <h3>人员列表中第一个人的姓名为：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="personAdd">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServe">添加一个随机姓名的人</button>
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
  mounted() {
    console.log("person", this.$store);
  },
  computed: {
    sum() {
      return this.$store.state.countAbout.sum;
    },
    personList() {
      return this.$store.state.personAbout.personList;
    },
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  methods: {
    personAdd() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/PERSON_ADD", personObj);
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      this.name = "";
    },
    addPersonServe() {
      this.$store.dispatch("personAbout/addPersonServe");
    },
  },
};
</script>

<style>
</style>