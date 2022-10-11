<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <!-- 如下代码也能使用，但是不推荐，因为违反原则，修改props -->
        <!-- <input type="checkbox" v-model="todo.done" /> -->
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  //   声明接受对象
  props: ["todo"],
  methods: {
    //   取消or勾选
    handleCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      //   this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      // 通知App组件将对应的todo对象删除
      if (confirm("是否删除当前任务？")) {
        // this.deleteTodo(id);
        this.$bus.$emit("deleteTodo", id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: darkgrey;
}

li:hover button {
  display: block;
}
</style>