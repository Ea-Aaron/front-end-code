<template>
  <view class="home">
    <!-- 顶部导航栏 -->
    <uniNavBar></uniNavBar>

    <!-- 轮播图 -->
    <view class="top_banner_box">
      <swiper class="swiper" circular autoplay="true">
        <swiper-item v-for="(banner, index) in topBanner" :key="index">
          <img class="banner" :src="banner.img_url" alt="">
        </swiper-item>
      </swiper>
    </view>

    <!-- 课程导航 -->
    <coursenav></coursenav>

    <view class="index_banner_box">
      <img :src="indexBanner.img_url" alt="">
    </view>

    <view class="free_box">
      <view class="free_T_box public_tow_box">
        <view class="public_T">
          限时免费
        </view>
      </view>
      <!-- 课程介绍 -->
      <freeCard></freeCard>
    </view>

    <!-- 零基础就业班 -->
    <view class="public_title">
      <view class="public_class_t">零基础就业班</view>
      <jobScroll></jobScroll>
    </view>
  </view>
</template>

<script>
import uniNavBar from '@/components/uniNavBar';
import coursenav from '@/components/coursenav';
import freeCard from '@/components/freeCard';
import jobScroll from '@/components/jobscroll';

export default {
  components: {
    uniNavBar,
    coursenav,
    freeCard,
    jobScroll
  },
  data() {
    return {
      topBanner: [],
      indexBanner: ''
    };
  },
  mounted() {
    // 请求轮播图数据
    uni.request({
      url: 'http://html5.bjsxt.cn/api/index/banner',
      success: (res) => {
        this.topBanner = res.data.top_banner;
        this.indexBanner = res.data.index_banner;
      }
    });
  },
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  .top_banner_box {
    display: flex;
    width: 100%;
    padding: 10rpx;
    justify-content: center;
    align-content: center;
    border-radius: 5rpx;
    overflow: hidden;

    .swiper {
      width: 100%;
      height: 260rpx;

      .banner {
        width: 98%;
        height: 260rpx;
      }
    }
  }

  .index_banner_box {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    overflow: hidden;
    width: 100%;
    justify-content: center;
    margin-bottom: 15px;

    img {
      width: 724rpx;
      height: 132rpx;
    }
  }

  .public_tow_box {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 0 15px;

    .public_T {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .public_title {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    .public_class_t {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 15px;
    }
  }
}
</style>
