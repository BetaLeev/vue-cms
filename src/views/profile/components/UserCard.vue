<template>
  <div>
    <el-card>
      <div slot='header'
        class="clearfix">
        <span>我的个人资料</span>
        <!-- <el-button type="primary"
          @click="openFullScreen"
          v-loading.fullscreen.lock="fullscreenLoading">
          指令
        </el-button> -->

      </div>
      <div class="user-profile">
        <div class="box-center">
          <img :src="user.avator"
            alt=""
            :width="'100px'"
            :height="'100px'">
          <h2>
            Hello
          </h2>
          <p>{{user.name}}</p>
        </div>
        <div class="box-center">
          <div class="user-name text-center">{{user.email}}</div>
          <div class="user-role text-muted">角色：{{user.role}} || 管理员</div>
          <div class="user-role text-muted">城市：{{user.city}} </div>
          <div class="user-role text-muted">电话：{{user.tel}} </div>
          <div class="user-role text-muted">QQ：{{user.qq}} </div>
          <div class="moreUserInfo"
            v-if='moreInfo'>
            123123123
            <el-button type="primary"
              plain
              @click='modifyUserInfo'>修改个人资料</el-button>
          </div>
          <el-link style="float:right"
            :underline="false"
            type="primary"
            icon='el-icon-plus'
            @click='showMore'></el-link>
        </div>
      </div>
    </el-card>

    <!-- 修改个人资料 -->
    <el-dialog title="个人资料修改"
      :visible.sync="userFormVisible">
      <el-form :model="userForm">
        <el-form-item label="用户名">
          <el-input v-model="userForm.name"
            autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="性别">
          <el-radio-group v-model="userForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item> -->

        <el-form-item label="手机号">
          <el-input v-model="userForm.tel"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="QQ号">
          <el-input v-model="userForm.qq"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="userForm.city"
            autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
        class="dialog-footer">
        <el-button @click="userFormVisible = false">取 消</el-button>
        <el-button type="primary"
          @click="handleChangeInfo(userForm)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { updateUserInfo } from "api/user";
import { constants } from "crypto";
export default {
  mounted() {},
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: "",
          avator: "",
          role: "",
          city: "",
          tel: "",
          qq: ""
        };
      }
    }
  },
  data() {
    return {
      userFormVisible: false,
      moreInfo: false,
      fullscreenLoading: false,

      userForm: {
        name: "",
        city: "",
        tel: "",
        qq: ""
        // sex: ""
      }
    };
  },
  methods: {
    showMore() {
      this.moreInfo = !this.moreInfo;
    },
    handleChangeInfo(form) {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });

      console.log(form);
      updateUserInfo(form).then(res => {
        console.log(res);
        loading.close();
        this.userFormVisible = false;
      });
    }
  },
  created() {}
};
</script>

<style lang='stylus' scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: blod;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-font-weight: 400;
    font-size: 15px;
  }
}
</style>