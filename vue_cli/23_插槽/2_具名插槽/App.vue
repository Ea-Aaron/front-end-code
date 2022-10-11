<template>
  <div class="container">
    <Category :title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="https://www.baidu.com">更多美食</a>
    </Category>
    <Category :title="游戏">
      <ul slot="center">
        <li v-for="(g, i) in games" :key="i">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">热门游戏</a>
      </div>
    </Category>
    <Category :title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        slot="center"
      ></video>
      <!-- 只有使用template标签时才可以采用v-slot写法 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com">单机游戏</a>
          <a href="https://www.baidu.com">热门游戏</a>
        </div>
        <h4>欢迎前来观影</h4>
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
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
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