<template>
  <div>姓名：{{user.name}}</div>
  <div>年龄：{{user.age}}</div>
  <div>性别：{{user.gender}}</div>
  <div>媳妇：{{user.wife}}</div>
  <hr>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    /* 
      reactive
      作用: 定义多个数据的响应式
      const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
      响应式转换是“深层的”：会影响对象内部所有嵌套的属性
      内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
    */
    const obj: any = {
      name: '小明',
      age: 20,
      wife: {
        name: '小甜甜',
        age: 18,
        cars: ['奔驰', '宝马', '奥迪']
      }
    }
    // 把数据变成响应式
    // 返回的是一个Proxy的代理对象，被代理的目标对象就是obj对象
    // user显示是代理对象，obj是目标对象
    // user对象的类型是Proxy
    const user = reactive<any>(obj)
    console.log(user);

    // 方法
    // function updateUser() { }
    const updateUser = () => {
      // user.name = '小红'

      // user----->代理对象   user----->目标对象
      // user对象或者obj对象添加一个新的属性，哪一种方式回影响界面的更新
      // obj.gender = '男' // 这种方式，界面没有渲染
      // user.gender = '男' // 页面可以渲染，切数据也添加到了obj对象上
      // user对象或这obj对象删除一个属性，哪一种方式回影响界面的更新
      // delete obj.age // 页面不会渲染
      // delete user.age // 页面可以渲染，且数据也从obj上移除

      // 总结：如果操作带俩对象，目标对象中的数据也会变化，同时如果想操作数据时，页面也跟着渲染，需要操作代理对象
    }
    return {
      user,
      updateUser
    }
  }
});
</script>

<style>

</style>
