<template>
  <div class="header">
    <b-navbar toggleable="lg"
      type="dark"
      variant="info">
      <b-navbar-brand href="./admin">淘客区</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse"
        is-nav>

        <b-navbar-nav>
          <b-nav-item href="./login">最新资讯</b-nav-item>
          <b-nav-item href="./login">用户发布</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if='!token'
            href="./login">登陆</b-nav-item>

          <el-dropdown v-if='token'
            type="primary">
            <img class="header-avator"
              src="/img/header.jpg"
              alt="">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><a href="/me">个人资料</a></el-dropdown-item>
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      isLogin: 1
    };
  },
  computed: {
    token() {
      return window.localStorage.getItem("token") || 0;
    }
  },
  methods: {},
  created() {}
};
</script>

<style lang='stylus' scoped>
.header {
  .ml-auto {
    margin-right: 30px;
  }

  .header-avator {
    border: 1px solid red;
    height: 40px;
    width: 40px;
    border-radius: 3px;
  }
}</style>