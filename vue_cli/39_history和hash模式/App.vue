<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Banner></Banner>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 在原生html中使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- vue中借助router-link实现路由之间的跳转 -->
          <!-- 简化后，直接通过路由的名字跳转 -->
          <!-- replace可以修改浏览器的缓存方式 -->
          <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'

export default {
  name: "App",
  components: {
    Banner
  }
};
</script>
