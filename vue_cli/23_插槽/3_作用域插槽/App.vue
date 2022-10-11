<template>
  <div class="container">
    <Category :title="游戏">
      <template scope="aaron">
        <ul>
          <li v-for="(g, i) in aaron.games" :key="i">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category :title="游戏">
      <!-- 利用解构赋值 -->
      <template scope="{games,msg}">
        <ol style="color: red">
          <li v-for="(g, i) in games" :key="i">{{ g }}</li>
        </ol>
        <h4>{{ msg }}</h4>
      </template>
    </Category>

    <Category :title="游戏">
      <template slot-scope="{ games }">
        <h4 v-for="(g, i) in games" :key="i">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: {
    Category,
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>