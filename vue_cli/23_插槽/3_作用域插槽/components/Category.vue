<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games" msg="hello"
      >我是默认值，当使用者没有使用插槽时，我会出现</slot
    >
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
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