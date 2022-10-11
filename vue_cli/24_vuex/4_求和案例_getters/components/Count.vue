<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button class="count" @click="increase">+</button>
    <button class="count" @click="decrease">-</button>
    <button class="count" @click="increaseOdd">当和为奇数时再加</button>
    <button class="count" @click="increaseWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的值
    };
  },
  computed: {
    sum() {
      return this.$store.state.sum;
    },
    bigSun() {
      return this.$store.getters.bigSun;
    },
  },
  methods: {
    increase() {
      this.$store.commit("JIA", this.n);
    },
    decrease() {
      this.$store.commit("JIAN", this.n);
    },
    increaseOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    increaseWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style>
.count {
  margin-left: 10px;
}
</style>