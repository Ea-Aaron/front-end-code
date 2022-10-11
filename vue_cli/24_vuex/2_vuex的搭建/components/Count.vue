<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
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
      n: 1,
      sum: 0,
    };
  },
  methods: {
    increase() {
      this.sum += this.n;
    },
    decrease() {
      this.sum -= this.n;
    },
    increaseOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    increaseWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 1000);
    },
  },
};
</script>

<style>
.count {
  margin-left: 10px;
}
</style>