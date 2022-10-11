<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 让不展示的路由保持挂载，不被销毁  include="News"指定组件不被销毁-->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>

    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>