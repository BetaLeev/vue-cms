<template>
  <div class="nav-bar">
    <div class="left">
      <hamburger :is-active='side.opened'
        @toggleClick='toggleSideBar' />
      <breadcrumb />

    </div>
    <div class="right">
      <el-menu class="right-menu"
        mode="horizontal"
        default-active=""
        text-color="#000000"
        router>
        <el-menu-item index='1'>处理中心</el-menu-item>
        <el-submenu index='3'>
          <template slot="title">我的工作台</template>
          <el-menu-item index='1-2'>退出</el-menu-item>
          <el-menu-item index='/admin/user/profile'>个人中心</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

  </div>
</template>

<script>
import breadcrumb from "@/components/Breadcrumb";
import hamburger from "@/components/hamburger/index.vue";
export default {
  mounted() {},
  components: {
    hamburger,
    breadcrumb
  },
  data() {
    return {
      side: {
        opened: false
      }
    };
  },
  created() {},
  methods: {
    toggleSideBar() {
      this.side.opened = !this.side.opened;
      this.$store.dispatch("toggleSideBar");
    },
    initBreadCrumb() {
      for (const routeInfo of this.$route.matched) {
        if (typeof routeInfo.name === "string" && routeInfo.name !== "home") {
          this.breadList.push(routeInfo.name);
        }
      }
    }
  },
  watch: {
    $route() {
      // this.initBreadCrumb();
    }
    // console.log(this.$$route.matched);
  }
};
</script>

<style lang='stylus' scoped>
.el-menu {
  border: none;
}

.nav-bar {
  padding: 0 20px;
  height: 100%;
  background-color: #fff;

  .left {
    float: left;
    display: inline-block;
  }

  .right {
    float: right;
    height: 56px;
    overflow: hidden;
  }
}

.right-menu {
  display: inline-block;
  float: right;
  clear: both;
}
</style>
