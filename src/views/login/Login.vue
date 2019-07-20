<template>
  <div class="login-container">
    <el-form ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="right">

      <div class="title-container">
        <h1> 登 录</h1>
      </div>

      <el-form-item prop="email">
        <el-input ref="email"
          v-model="loginForm.email"
          placeholder="请输入邮箱登陆"
          prefix-icon="el-icon-user-solid"
          name="email"
          type="text"
          autocomplete="off" />
      </el-form-item>

      <el-form-item label-position="right"
        prop="pass">
        <el-input type="password"
          v-model="loginForm.password"
          prefix-icon="el-icon-view"
          placeholder="请输入密码"
          autocomplete="off"></el-input>
      </el-form-item>

      <el-row>
        <el-col :xs="8"
          :sm="8">
          <div class="grid-content bg-purple-light">
            <el-form-item>
              <el-input :inline="true"
                placeholder="验证码"
                prefix-icon="el-icon-picture-outline-round"
                maxlength="4"
                v-model="loginForm.code"
                autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-col>

        <el-col :xs="4"
          :offset="1"
          :sm="4">
          <el-link class="code"
            type="danger"
            v-html='authCode'
            @click='initAuthCode'></el-link>
        </el-col>
        <el-button type="primary"
          style="width:100%"
          @click.native.prevent="handleLogin(loginForm)">登录</el-button>

      </el-row>

    </el-form>
  </div>
</template>

<script>
// import { login } from "api/user.js";
import { authCode } from "utils/auth.js";

export default {
  mounted() {},
  data() {
    return {
      authCode: "",
      loginForm: {
        email: "",
        password: "",
        code: ""
      },
      loginRules: {
        email: [
          {
            required: true,
            type: "email",
            message: "请输入正确的邮箱",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    initAuthCode() {
      authCode().then(res => {
        this.authCode = res;
      });
    },

    handleLogin(form) {
      let that = this;
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     console.log("符合规则");
      //     this.$store
      //       .dispatch("login", form)
      //       .then(res => {
      //         if (res.success) {
      //           console.log("验证码正确成功", form);
      //           if (res.code === 20000) {
      //             this.$message({
      //               message: "恭喜，登陆成功",
      //               type: "success"
      //             });
      //             // window.localStorage.setItem("token", res.data.token);
      //             this.$router.push("/me");
      //             // 2415544829@qq.com
      //           } else {
      //             that.$message.error("错误，未知错误");
      //           }
      //         } else {
      //           if (res.code === 20001) {
      //             that.$message.error("错误，密码错误");
      //           } else {
      //             this.initAuthCode();
      //             that.$message.error("错误，验证码错误");
      //             that.loginForm.code = "";
      //           }
      //         }
      //         console.log("登陆成功");
      //       })
      //       .catch(err => {
      //         console.log(err);
      //       });
      //   } else {
      //     console.log("不符合规定");
      //   }
      // });
    }
  },

  created() {
    this.initAuthCode();
  }
};
</script>

<style lang='stylus' scoped>
.login-container {
  padding: 20px;

  .login-form {
    margin: 0 auto;

    .el-input {
      display: inline-block;
      height: 47px;
      width: 100%;
    }
  }

  .code {
    position: relative;
    top: -20px;
    padding: 10px;
  }
}
</style>