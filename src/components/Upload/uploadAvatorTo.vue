<template>
  <div class="test">
    <p>头像</p>
    <el-upload class="avatar-uploader"
      action='/upload-avator'
      name='avator'
      :limit="1"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl"
        :src="imageUrl"
        class="avatar">
      <i v-else
        class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import { uploadAvator_SM, uploadAvator } from "api/user";
export default {
  data() {
    return {
      imageUrl: "",
      smRes: {}
    };
  },
  methods: {
    sendAvatorUrl() {
      let avatorUrl = this.imageUrl;
      this.$emit("getAvatorUrl", avatorUrl);
      console.log("dizhi:", avatorUrl);
    },
    handleAvatarSuccess(res, file) {
      let that = this;
      console.log(file);
      let fileForm = new FormData();
      fileForm.append("smfile", file.raw);
      uploadAvator_SM(fileForm).then(res => {
        that.smRes = res.data;
        that.imageUrl = that.smRes.url;
        console.log(that.smRes);
        uploadAvator({ file: file, smRes: that.smRes }).then(res => {
          console.log(res);
          that.sendAvatorUrl();
        });
      });
      // console.log(URL);
      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang='stylus' scoped></style>
<style>
.test {
  padding-bottom: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
