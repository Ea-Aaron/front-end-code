<template>
  <view>
    <view class="free_card_box" v-for="(item, index) in teaList" :key="index">
      <!-- 头像 -->
      <view class="free_card_img">
        <img :src="item.teacher_logo" alt="">
      </view>

      <view class="free_card_txt">
        <!-- 课程介绍 -->
        <view class="free_card_T">{{ item.limitName }}</view>

        <!-- 老师介绍 -->
        <view class="free_card_info">
          <view class="free_card_info_txt">
            <view class="info_txt1">{{ item.teacher_name }}{{ item.teacher_job }}</view>
            <view>{{ item.limitNum }}人学过</view>
          </view>

          <!-- 是否报名 -->
          <view class="free_card_info_btn" v-if="item.baoming == '马上报名'">{{ item.baoming }}</view>
          <view class="free_card_info_btn free_card_info_btn1" v-else>{{ item.baoming }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "free-card",
  data() {
    return {
      teaList: []
    };
  },
  mounted() {
    uni.request({
      url: "http://html5.bjsxt.cn/api/index/specific?userid=2162",
      success: (res) => {
        this.teaList = res.data.data;
      }
    });
  }
}
</script>

<style lang="scss">
.free_card_box {
  display: flex;
  padding: 10px 0;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 15px;
  background-color: #fff;

  .free_card_img {
    flex-shrink: 0;
    width: 100rpx;
    height: 100rpx;
    border-radius: 100%;
    margin: 0 15px;

    img {
      width: 100%;
      height: 100;
      border-radius: 100%;
    }
  }

  .free_card_txt {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding-left: 15px;

    .free_card_T {
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 10px 0;
    }

    .free_card_info {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      flex-flow: row nowrap;
      justify-content: space-between;

      .free_card_info_txt {
        width: 60%;
        overflow: hidden;
        font-size: 16px;
        color: #666;

        .info_txt1 {
          height: 20px;
          font-size: 14px;
          overflow: hidden;
        }
      }

      .free_card_info_btn {
        width: 100px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        background-color: #00b783;
        border-radius: 34px;
        color: #fff;
        font-size: 16px;
        margin-top: 10px;
        margin-right: 15px;
      }
      .free_card_info_btn1 {
        background-color: #ddd;
      }
    }
  }
}
</style>