<template>
  <div class="ev-container"
    v-loading.fullscreen.lock="fullscreenLoading">

    <div v-show="activeLogin"
      class="login-container">

      <login />

      <el-link type='warning'
        :underline="false"
        @click='toggleLogin'
        icon="el-icon-user">
        没有账户，立即注册。</el-link>

    </div>

    <div v-show="!activeLogin"
      class="register-container">

      <register />

      <el-link type='success'
        :underline="false"
        @click='toggleLogin'
        icon="el-icon-cold-drink">
        已有账户，转去登录</el-link>
    </div>

  </div>
</template>

<script>
import login from "./Login";
import register from "./Register";
export default {
  mounted() {},
  components: {
    login,
    register
  },
  data() {
    return {
      fullscreenLoading: 0,
      activeLogin: 1,
      loginForm: {
        username: "leev",
        password: "leev"
      }
    };
  },
  methods: {
    toggleLogin() {
      this.activeLogin = !this.activeLogin;
    },
    handleLogin() {}
  },
  created() {}
};
</script>

<style lang='stylus' scoped>
.ev-container {
  height: 100vh;
  width: 100vw;
  background: url('/img/login-bg.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .login-container {
    top: 50%;
    left: 50%;
    height: 400px;
    max-width: 550px;
    position: relative;
    background: hsla(110, 10%, 90%, 0.2);
    transform: translate(-50%, -50%);
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  }

  .login-container:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(3px);
  }

  .register-container {
    top: 50%;
    left: 50%;
    height: 500px;
    max-width: 550px;
    position: relative;
    transform: translate(-50%, -50%);
    background: hsla(110, 10%, 90%, 0.2);
    box-shadow: 12px 12px 2px 1px rgba(255, 0, 0, 0.2);
  }
}
</style>