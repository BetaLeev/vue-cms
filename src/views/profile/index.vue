<template>
  <div class="app-container">
    <h3 class="text-center">green中心</h3>
    <div>
      <el-row :gutter='20'>
        <el-col :span='6'
          :xs='24'>
          <user-card :user='user' />
        </el-col>
        <el-col :span='18'
          :xs='24'>
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="我的订单"
                name="activity">
                <!-- <activity /> -->
              </el-tab-pane>
              <el-tab-pane label="我的发布"
                name="timeline">
                <!-- <timeline /> -->
              </el-tab-pane>
              <!-- <el-tab-pane label="Account"
                name="account"> -->
              <!-- <account :user="user" /> -->
              <!-- </el-tab-pane> -->
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getInfo } from "api/user";
import userCard from "./components/UserCard";
import { userInfo } from "os";
export default {
  mounted() {},
  components: {
    userCard
  },
  computed: {
    getUser() {
      return this.$store.state.token;
    }
  },
  data() {
    return {
      activeTab: "activity",
      user: {}
    };
  },
  created() {
    getInfo().then(res => {
      console.log(res);
      if (res.code === 20003) {
        window.location.href = "/login";
      }
      this.user = res.data.doc;
    });
  }
};
</script>

<style lang='stylus' scoped>
.app-container {
  padding: 20px;
}
</style>