<template>
  <div class="register-container">
    <el-form ref="registerForm"
      :model="registerForm"
      :rules="registerRules"
      class="register-form"
      autocomplete="off"
      label-position="right">

      <div class="title-container">
        <h1> 注册</h1>
      </div>

      <el-form-item prop="email">
        <el-row>

          <el-col :sm='16'
            :xs='14'>
            <el-input ref="email"
              v-model="registerForm.email"
              placeholder="输入邮箱地址获取验证码"
              name="email"
              type="text" />
          </el-col>

          <el-col :offset="1"
            :sm='2'
            :xs='2'>
            <el-button ref='emailButton'
              type='warning'
              @click="emailCode('registerForm')"
              :disabled="isDisabled">{{time}}</el-button>
          </el-col>

        </el-row>

      </el-form-item>

      <el-form-item>
        <el-input placeholder="验证码"
          prop='code'
          maxlength="4"
          type="text"
          v-model="registerForm.code"
          autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item prop="name">
        <el-input ref="name"
          v-model="registerForm.name"
          placeholder="输入昵称"
          name="昵称"
          type="text" />
      </el-form-item>

      <el-form-item label-position="right"
        prop="password">
        <el-input type="password"
          placeholder="输入密码"
          v-model="registerForm.password"
          autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label-position="right"
        prop="checkpass">
        <el-input type="password"
          placeholder="确认密码"
          v-model="registerForm.checkpass"
          autocomplete="off"></el-input>
      </el-form-item>

      <el-button type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleRegister('registerForm')">注册</el-button>

    </el-form>
  </div>
</template>

<script>
import { register } from "api/user.js";
import { authCode, sendEmailCode } from "utils/auth.js";
import { setInterval, clearInterval } from "timers";

export default {
  mounted() {},
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    let validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次密码不一致！"));
      } else {
        callback();
      }
    };

    return {
      isDisabled: false,
      time: "发送邮箱验证码",
      registerForm: {
        email: "",
        name: "",
        password: "",
        checkpass: "",
        code: ""
      },

      registerRules: {
        email: [
          {
            required: true,
            type: "email",
            message: "请输入正确的邮箱",
            trigger: "blur"
          }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        name: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkpass: [
          {
            validator: validateCheckPass,
            message: "请再次输入密码",
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
    emailCode(form) {
      // console.log(this.registerForm.email);

      let _that = this;
      this.isDisabled = true;
      // this.$refs[form].validateField("email", err => {
      //   if (err) {
      //     this.$message.error("邮箱格式输入不正确，请刷新后重新输入.");
      //     this.isDisabled = false;
      //   } else {
      //     let email = { email: this.registerForm.email };
      //     console.log(email);
      //     sendEmailCode(email).then(res => {
      //       console.log(res);
      //       console.log("邮箱发送完成");
      //       let i = 5;
      //       if (_that.isDisabled && i) {
      //         let timeInterval = setInterval(function() {
      //           i--;
      //           _that.time = `还有${i}秒`;
      //           if (i < 0) {
      //             _that.time = "发送邮箱验证码";
      //             _that.isDisabled = false;
      //             clearInterval(timeInterval);
      //           }
      //         }, 1000);
      //       }
      //     });
      //   }
      // });
    },

    handleRegister(form) {
      // this.$refs[form].validate(valid => {
      //   if (valid) {
      //     console.log("验证通过");
      //     console.log(this.registerForm);
      //     register(this.registerForm).then(res => {
      //       if (res.success) {
      //         this.$message({
      //           message: "恭喜你，注册成功",
      //           type: "success"
      //         });
      //       } else {
      //         this.$message.error("注册失败");
      //       }
      //     });
      //   } else {
      //     console.log("验证不通过");
      //     return false;
      //   }
      // });
    }
  },
  created() {}
};
</script>

<style lang='stylus' scoped>
.register-container {
  background: rgba(0, 32, 255, 0.3);
  height: 50vh;
  padding: 20px;
  height: auto;

  .register-form {
    margin: 0 auto;
    position: relative;

    .el-input {
      display: inline-block;
      height: 47px;
      width: 100%;
    }
  }
}
</style>