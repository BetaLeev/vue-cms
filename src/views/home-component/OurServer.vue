<template>
  <div class="our-server">
    <h2 class="our-title">我们的服务</h2>

    <el-col :sm='6'
      :xs='12'
      v-for="item,index in server"
      :key='index'>
      <u-animate-container>
        <u-animate name="fadeIn"
          :delay="item.animate.delay"
          :duration="item.animate.duration"
          animateClass="animated"
          :begin="false">
          <el-card class="our-box-card">
            <i :class='item.icon'
              class="our-icon"></i>
            <p class="our-box-count">
              <ICountUp :startVal="item.countUp.startVal"
                :endVal="item.countUp.endVal"
                :decimals="item.countUp.decimals"
                :duration="item.countUp.duration"
                :options="item.countUp.options" />
            </p>
            <h3 v-text="item.title"></h3>
            <p v-text="item.describle"></p>
          </el-card>
        </u-animate>
      </u-animate-container>
    </el-col>
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
      server: [
        {
          icon: "el-icon-platform-eleme",
          animate: {
            delay: ".1s",
            duration: "1s"
          },
          countUp: {
            startVal: 0,
            endVal: 1234,
            decimals: 0,
            duration: 4.5,
            options: {
              useEasing: true,
              useGrouping: true,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: ""
            }
          },
          title: "安卓应用开发",
          describle: "安卓游戏，软件专业定制"
        },
        {
          icon: "el-icon-apple",
          animate: {
            delay: ".3s",
            duration: "1s"
          },
          countUp: {
            startVal: 0,
            endVal: 2234,
            decimals: 0,
            duration: 11.5,
            options: {
              useEasing: true,
              useGrouping: true,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: ""
            }
          },
          title: "苹果应用开发",
          describle: "苹果游戏，软件专业定制"
        },
        {
          icon: "el-icon-goblet-square-full",
          animate: {
            delay: ".5s",
            duration: "1s"
          },
          countUp: {
            startVal: 0,
            endVal: 3234,
            decimals: 0,
            duration: 14.5,
            options: {
              useEasing: true,
              useGrouping: true,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: ""
            }
          },
          title: "咖啡陪聊",
          describle: "一杯咖啡的时间"
        },
        {
          icon: "el-icon-table-lamp",
          animate: {
            delay: ".7s",
            duration: "1.5s"
          },
          countUp: {
            startVal: 0,
            endVal: 3204,
            decimals: 0,
            duration: 21.5,
            options: {
              useEasing: true,
              useGrouping: true,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: ""
            }
          },
          title: "专业摄影",
          describle: "精修照片，精美图册"
        },
        {
          icon: "el-icon-alarm-clock",
          animate: {
            delay: "1.5s",
            duration: "1.5s"
          },
          countUp: {
            startVal: 0,
            endVal: 35204,
            decimals: 0,
            duration: 15,
            options: {
              useEasing: true,
              useGrouping: true,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: ""
            }
          },
          title: "叫醒服务",
          describle: "前BBB退役叫醒专员，早起晚睡。"
        },
        {
          icon: "el-icon-service",
          animate: {
            delay: "1.3s",
            duration: "1.5s"
          },
          countUp: {
            startVal: 0,
            endVal: 35204,
            decimals: 0,
            duration: 5,
            options: {
              useEasing: true,
              useGrouping: true,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: ""
            }
          },
          title: "电竞陪玩",
          describle: "前知名电竞选手陪您吃鸡"
        },
        {
          icon: "el-icon-cold-drink",
          animate: {
            delay: "1.1s",
            duration: "1.5s"
          },
          countUp: {
            startVal: 0,
            endVal: 31204,
            decimals: 0,
            duration: 15,
            options: {
              useEasing: true,
              useGrouping: true,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: ""
            }
          },
          title: "逗乐服务",
          describle: "变个魔术讲个笑话带给您笑容"
        },
        {
          icon: "el-icon-lollipop",
          animate: {
            delay: ".9s",
            duration: "1.5s"
          },
          countUp: {
            startVal: 0,
            endVal: 51204,
            decimals: 0,
            duration: 12,
            options: {
              useEasing: true,
              useGrouping: true,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: ""
            }
          },
          title: "喷射服务",
          describle: "猎鹰九号，带您飞"
        }
      ]
    };
  }
};
</script>

<style lang='stylus' scoped>
.our-server {
  padding: 50px;
  height: 700px;
  background: #F2F6FC;

  .our-title {
    font-size: 2rem;
    padding: 20px;
    text-align: center;
  }

  .our-box-card {
    background: #f5f7f9;
    text-align: center;
    margin: 10px;
    min-height: 200px;
    max-height: 200px;
    overflow: hidden;

    .our-icon {
      font-size: 42px;
      display: block;
      margin-bottom: 12px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      color: #888;
      line-height: 24px;
      margin-top: 5px;
    }

    .our-box-count {
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.06);
      display: inline;
      padding: 0 8px;
      border-radius: 4px;
      font-size: 14px;
      line-height: 25px;
      color: #909090;
    }

    &:hover {
      box-shadow: 3px 3px 3px 3px #e2e2e2;
    }
  }
}
</style>