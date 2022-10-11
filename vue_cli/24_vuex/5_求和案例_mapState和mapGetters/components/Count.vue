<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
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
import { mapState, mapGetters } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的值
    };
  },
  computed: {
    // 靠程序员自己手写计算属性
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    // 借助mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({sum:'sum',school:'school',subject:'subject'}),

    // 借助mapState生成计算属性，从state中读取数据（数组写法）
    ...mapState(["sum", "school", "subject"]),

    /* ********************************************* */
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },

    // 借助mapGetters生成计算属性，从state中读取数据（对象写法）
    // ...mapGetters({bigSum:'bigSum'}),
    // 借助mapGetters生成计算属性，从state中读取数据（数组写法）
    ...mapGetters(["bigSum"]),
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