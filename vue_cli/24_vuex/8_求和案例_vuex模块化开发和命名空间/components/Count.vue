<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3 style="color: red">Person组件的总人数为：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button class="count" @click="increase(n)">+</button>
    <button class="count" @click="decrease(n)">-</button>
    <button class="count" @click="increaseOdd(n)">当和为奇数时再加</button>
    <button class="count" @click="increaseWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的值
    };
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({sum:'sum',school:'school',subject:'subject'}),

    // 借助mapState生成计算属性，从state中读取数据（数组写法）
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),

    /* ********************************************* */
    // 借助mapGetters生成计算属性，从state中读取数据（对象写法）
    // ...mapGetters({bigSum:'bigSum'}),
    // 借助mapGetters生成计算属性，从state中读取数据（数组写法）
    ...mapGetters("countAbout", ["bigSum"]),
  },
  methods: {
    // 借助mapMutations生成方法，方法中会调用commit区联系mutations（对象写法）
    ...mapMutations("countAbout", { increase: "JIA", decrease: "JIAN" }),
    // 借助mapMutations生成方法，方法中会调用commit区联系mutations（数组写法）
    // ...mapMutations(['JIA','JIAN'])

    /* **************************************** */
    // 借助mapActions生成方法，方法中会调用dispatch区联系actions（数组写法）
    ...mapActions("countAbout", {
      increaseOdd: "jiaOdd",
      increaseWait: "jiaWait",
    }),
    // 借助mapActions生成方法，方法中会调用dispatch区联系actions（数组写法）
    // ...mapActions(['jiaOdd','jiaWait'])
  },
};
</script>

<style>
div {
  margin: 20px;
}
.count {
  margin-left: 10px;
}
</style>