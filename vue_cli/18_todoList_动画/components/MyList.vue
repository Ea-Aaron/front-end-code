<template>
  <div>
    <ul class="todo-main">
      <transition-group name="hello" appear>
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: { MyItem },
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

.hello-enter-active {
  animation: test 0.5s linear;
}

.hello-leave-active {
  animation: test 1s linear reverse;
}

@keyframes test {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>