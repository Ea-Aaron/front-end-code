<template>
  <view class="course_nav_con">
    <view class="course_nav_info" v-for="(item,index) in list" :key="index">
      <text class="course_nav_icon icon iconfont" :class="item.icon"></text>
      <view class="course_info_text">{{ item.text }}</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    // 获取课程导航信息
    uni.request({
      url: 'http://html5.bjsxt.cn/api/index/nav',
      success: (res) => {
        this.list = res.data.data;
      }
    });
  },
}
</script>

<style lang="scss">
@import "@/static/font/iconfont.css";

.course_nav_con {
  display: flex;
  box-sizing: border-box;
  // 盒子主轴方向
  flex-direction: row;
  // 超出是否换行
  flex-wrap: wrap;
  padding: 15rpx 10rpx;

  .course_nav_info {
    width: 20%;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    margin-bottom: 15rpx;

    .course_nav_icon {
      font-size: 30px;
    }

    .icon-java {
      color: #2a83fe;
    }

    .icon-weifuwu {
      color: #fd3761;
    }

    .icon-zuzhijiagou {
      color: #2b91e2;
    }

    .icon-dashuju {
      color: #2a83fe;
    }

    .icon-h {
      color: #00b478;
    }

    .icon-icon-- {
      color: #fd6012;
    }

    .icon-rengongzhineng {
      color: #fe391f;
    }

    .icon-ruanjianceshi {
      color: #00b478;
    }

    .icon-huatong {
      color: #fea917;
    }

    .icon-bianchengshibaobiao_icon {
      color: #2a83fe;
    }

    .icon-jianmo {
      color: #00b478;
    }

    .icon-chuangye {
      color: #fe391f;
    }

    .course_info_text {
      width: 100%;
      font-size: 13px;
      margin-top: 10px;
      // 文本内容不允许换行，超出的部分隐藏
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>