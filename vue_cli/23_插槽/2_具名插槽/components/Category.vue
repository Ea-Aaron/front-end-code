<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot name="center">我是默认值，当使用者没有使用插槽时，我会出现</slot>
    <slot name="footer">我是默认值，当使用者没有使用插槽时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  background-color: yellow;
  text-align: center;
}
</style>