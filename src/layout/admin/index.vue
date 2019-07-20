<template>
  <el-container class="admin-layout">
    <el-container>
      <el-aside>
        <sideBar />
      </el-aside>
      <el-container class="main">
        <el-header>
          <nav-bar />
        </el-header>
        <router-view></router-view>
      </el-container>
    </el-container>
    <!-- <BackToTop /> -->
  </el-container>
</template>

<script>
// import BackToTop from "@/components/BackToTop";
import sideBar from "@/layout/admin/components/Sidebar";
import navBar from "@/layout/admin/components/NavBar.vue";
export default {
  mounted() {},
  components: {
    // BackToTop,
    sideBar,
    navBar
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang='stylus' scoped>
.main {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: #eff1f4;
}
</style>
<style>
.el-header,
.el-footer {
  width: 100%;
  padding: 0 0;
  height: 56px !important;
  line-height: 56px !important;
}
.el-menu-item:focus {
  background: none;
}
.el-aside {
  height: 100vh;
  overflow: scroll;
  background-color: #2f4054;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-aside {
  width: auto !important;
}
</style>


