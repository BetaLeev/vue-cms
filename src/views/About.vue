// <template>
  // <div class="register-container">
    // <div id="nav">
      // <router-link to="/login">登录</router-link> |
      // <router-link to="/register">注册</router-link>
      // </div>
    // <h1>注册</h1>
    // <van-cell-group>
      //
      <van-field v-model="formData.username" //
        required //
        clearable //
        label="用户名" //
        right-icon="question-o" //
        placeholder="请输入用户名" //
        @click-right-icon="$toast('question')" />

      //
      <van-field v-model="formData.password" //
        type="password" //
        label="密码" //
        placeholder="请输入密码" //
        required />
      // <van-uploader :after-read="onRead">
        // <img ref="img" //
          src='@/assets/logo.png' //
          width='230' //
          height='120' //
          alt="">
        // <van-button icon="
//           photo" //
          type="primary">上传图片</van-button>
        // </van-uploader>

      // </van-cell-group>

    // <van-button type="default" //
      @click='registerSubmit(formData)'>注册</van-button>
    // </div>
  // </template>
// <script>
// import request from "@/utils/request.js";

// export default {
//   data() {
//     return {
//       formData: {
//         username: "",
//         password: "",
//         avator: ""
//       }
//     };
//   },

//   methods: {
//     onRead(file) {
//       console.log(file);
//       this.$refs.img.src = file.content;
//       // this.baseImg = file.content;
//       // let base = file.content;
//       let form = new FormData();
//       form.append("smfile", file.file);
//       // console.log(form.get("file"));
//       // return request({
//       //   url: "/add",
//       //   method: "post",
//       //   data: file
//       // });
//       return request({
//         url: "https://sm.ms/api/upload",
//         method: "post",
//         data: form
//       }).then(res => {
//         // console.log(res);
//         this.formData.avator = res.data.url;
//       });
//     },
//     registerSubmit(data) {
//       console.log(data);
//       return request({
//         url: "/add",
//         method: "post",
//         data
//       }).then(res => {
//         console.log(res);
//         if (res.success == true) {
//           this.formData = {};
//         }
//       });
//     }
//   }
// };
//
</script>
