<template>
  <!-- 首页 -->
  <div class="home">
    <Header />
    <!-- <Carousel /> -->

    <!-- <router-view></router-view> -->

    <!-- <div class="iCountUp">
      <ICountUp :delay="delay"
        :endVal="endVal"
        :options="options"
        @ready="onReady" />
    </div> -->
    <our-server />
    <our-mission />
  </div>
</template>

<script>
// import img from "public/img/404.png";
// import ICountUp from "vue-countup-v2";

// @ is an alias to /src
// import Login from "@/components/Login.vue";
import Header from "@/components/Header";

import Carousel from "@/components/Carousel";

// import Service from "@/components/Service";
// import Designer from "@/components/Designer";

import OurServer from "./home-component/OurServer";
import OurMission from "./home-component/OurMission";

export default {
  name: "home",

  components: {
    // Login

    Header,
    Carousel,

    OurServer,
    OurMission
  },
  data() {
    return {
      active: "1",
      slide: 0,
      sliding: null,

      delay: 1000,
      endVal: 120500,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  },
  computed: {
    user: function() {
      return window.localStorage.getItem("user") || null;
    }
  },
  methods: {
    onReady: function(instance, CountUp) {
      const that = this;
      instance.update(that.endVal + 100);
    }
    // onSlideStart(slide) {
    //   this.sliding = true;
    // },
    // onSlideEnd(slide) {
    //   this.sliding = false;
    // },
  }
};
</script>

<style lang="stylus" scoped>
.iCountUp {
  font-size: 12em;
  margin: 0;
  color: #4d63bc;
}

.home {
  height: 1500px;
  width: 100%;
  background: pink;
}

.nav {
  height: 500px;
  width: 100%;
  background: orange;
}
</style>
