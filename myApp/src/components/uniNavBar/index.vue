<template>
  <view>
    <uni-nav-bar leftWidth="0rpx" statusBar="true" shadow="true">
      <view class="input-view">
        <uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
        <input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" />
      </view>
      <block slot="right">
        <view class="city">
          搜索
        </view>
      </block>
    </uni-nav-bar>
  </view>
</template>

<script>
import { uniNavBar } from '@dcloudio/uni-ui';
export default {
  components: {
    uniNavBar
  },
  data() {
    return {

    };
  },
}
</script>


<style lang="scss">
$nav-height: 30px;

.input-view {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  width: 600rpx;
  flex: 1;
  background-color: #f8f8f8;
  height: $nav-height;
  border-radius: 15px;
  padding: 0 15px;
  flex-wrap: nowrap;
  margin: 7px 0;
  line-height: $nav-height;
}

.input-uni-icon {
  line-height: $nav-height;
}

.nav-bar-input {
  height: $nav-height;
  line-height: $nav-height;
  /* #ifdef APP-PLUS-NVUE */
  width: 370rpx;
  /* #endif */
  padding: 0 5px;
  font-size: 12px;
  background-color: #f8f8f8;
}
</style>