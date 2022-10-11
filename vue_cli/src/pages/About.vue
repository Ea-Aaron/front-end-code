<template>
  <h2>我是About的内容</h2>
</template>

// 路由引入的组件成为路由组件，放在pages文件中
<script>
export default {
  name: "About",

  // 通过路由规则，进入组件时调用
  beforeRouteEnter(to, from, next) {
    console.log('About--beforeRouteEnter', to, from);
    if (to.meta.isAuth) { // 判断当前路由是否需要权限控制
      if (localStorage.getItem('city') === 'wuhan') {
        next()
      } else {
        alert('所在城市不符合，无权限查看')
      }
    } else {
      next()
    }
  },

  // 通过路由规则，离开组件时调用
  beforeRouteLeave(to, from, next) {
    console.log('About--beforeRouteLeave', to, from);
    next()
  }
};
</script>

<style>
</style>