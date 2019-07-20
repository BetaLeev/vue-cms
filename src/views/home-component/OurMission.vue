<template>
  <div class="our-mission">
    <el-row :gutter="20"
      style="padding:60px">
      <h2 class="our-title">任务招募</h2>
      <br>
      <el-col :sm="12">
        <el-card class="our-mission-card"
          :bordered="false"
          v-for="item,index in mission"
          :key='index'>
          <u-animate-container>
            <u-animate name="fadeInLeft"
              :delay="item.animate.delay"
              :duration="item.animate.duration"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false">
              <span v-text="item.content"></span>
              <a :href="item.target">
                <span class="more">查看详细</span>
              </a>
            </u-animate>
          </u-animate-container>
        </el-card>
      </el-col>
      <el-col :sm="12">
        <u-animate-container>
          <u-animate name="zoomInRight"
            delay=".1s"
            duration="2s"
            :iteration="1"
            :offset="0"
            animateClass="animated"
            :begin="false">
            <img :src='missionPic'
              class="our-mission-img"
              alt="">
          </u-animate>
        </u-animate-container>
      </el-col>
    </el-row>
    <u-animate-container>
      <u-animate name="rollIn"
        delay="2.1s"
        duration="1s"
        :iteration="1"
        :offset="0"
        animateClass="animated"
        :begin="false">
        <el-button class="btn-more"
          type="warning"
          large>欲求不满，查看更多
          <i class="el-icon-brush"></i>
        </el-button>
      </u-animate>
    </u-animate-container>

  </div>
</template>

<script>
import { UAnimateContainer, UAnimate } from "vue-wow";
import ICountUp from "vue-countup-v2";

export default {
  mounted() {},
  components: {
    UAnimateContainer,
    UAnimate,
    ICountUp
  },
  data() {
    return {
      missionPic: "https://s2.ax1x.com/2019/02/17/ky8fqf.png",
      mission: [
        {
          animate: {
            delay: ".1s",
            duration: "1s"
          },
          content: "兼职刷单，垫付30元.",
          target: "www.baidu.com"
        },
        {
          animate: {
            delay: ".5s",
            duration: "1s"
          },
          content: "论坛灌水，百人三千。",
          target: "www.baidu.com"
        },
        {
          animate: {
            delay: "1.1s",
            duration: "1s"
          },
          content: "黑百度坑人网站，义务劳动。",
          target: "www.baidu.com"
        },
        {
          animate: {
            delay: "1.7s",
            duration: "1s"
          },
          content: "服务器防护，详谈。",
          target: "www.baidu.com"
        }
      ]
    };
  }
};
</script>

<style lang='stylus' scoped>
.our-mission {
  padding: 50px;
  height: 700px;
  margin-left: -50px;
  margin-right: -50px;
  background: #eee;

  .our-title {
    font-size: 2rem;
    padding: 0px;
    text-align: center;
  }

  .our-mission-card {
    color: gray;
    margin: 10px;

    .more {
      float: right;
      transition: 0.7s ease;
    }

    .more:hover {
      color: red;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover {
      box-shadow: 3px 3px 3px 3px #e2e2e2;
    }
  }

  .our-mission-img {
    height: 300px;
    width: 80%;
    margin-left: 30px;
  }

  .btn-more {
    text-align: center;
    position: relative;
    width: 190px;
    line-height: 20px;
    left: 50%;
    margin-left: -95px;
  }
}
</style>