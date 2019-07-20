<template>
  <div class="user-container">
    <div class="user-approved">
      <h2>已审核用户</h2>
      <div class="user-block">
        <el-button type="primary"
          @click='handleAdd()'>添加用户</el-button>
        <div class="search-block">
          <span class="demonstration"></span>
          <el-date-picker v-model="searchDate"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            :change="ttt()">
          </el-date-picker>
        </div>
      </div>
      <el-table :data="computedApprovedData"
        style="width: 100%">

        <el-table-column prop="name"
          label="用户名"
          width="150">
        </el-table-column>
        <el-table-column prop="email"
          label="邮箱"
          fixed
          width="190">
        </el-table-column>
        <el-table-column label="头像"
          width="120">
          <template slot-scope="scope">
            <img class="user-avator"
              :src="scope.row.avator"
              alt="">
          </template>
        </el-table-column>

        <el-table-column prop="role"
          label="权限"
          width="120">
        </el-table-column>
        <el-table-column prop="tel"
          label="手机号"
          width="130">
        </el-table-column>
        <el-table-column prop="city"
          label="城市"
          width="130">
        </el-table-column>
        <el-table-column prop="date"
          label="注册时间"
          width="150"
          sortable>
        </el-table-column>

        </el-table-column>
        <el-table-column prop="mark"
          label="备注"
          width="120">
        </el-table-column>
        <el-table-column fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.row)"
              type="text"
              size="small">编辑</el-button>
            <el-button type="text"
              @click="handleDrop(scope.row)"
              size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-block">
        <span class="demonstration"></span>
        <el-pagination @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pagesizes"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="approvedData.length">
        </el-pagination>
      </div>

    </div>

    <!-- <h2>未经审核用户</h2>
    <el-table :data="unapprovedData"
      style="width: 100%">
      <el-table-column type="selection"
        width="55">
      </el-table-column>
      <el-table-column prop="name"
        label="用户名"
        width="150">
      </el-table-column>
      <el-table-column prop="email"
        label="邮箱"
        fixed
        width="190">
      </el-table-column>
      <el-table-column label="头像"
        width="120">
        <template slot-scope="scope">
          <img class="user-avator"
            :src="scope.row.avator"
            alt="">
        </template>
      </el-table-column>
      <el-table-column prop="date"
        label="注册时间"
        width="150">
      </el-table-column>
      <el-table-column prop="role"
        label="权限"
        width="120">
      </el-table-column>
      <el-table-column prop="tel"
        label="手机号"
        width="130">
      </el-table-column>
      <el-table-column prop="city"
        label="城市"
        width="130">
      </el-table-column>

      </el-table-column>
      <el-table-column prop="mark"
        label="备注"
        width="120">
      </el-table-column>
      <el-table-column fixed="right"
        label="操作"
        width="160">
        <template slot-scope="scope">
          <el-button @click="handleClick"
            size="small"
            type="success">通过</el-button>
          <el-button size="small"
            type="danger">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table> -->

    <el-dialog title="添加用户"
      :visible.sync="addFormVisible">
      <el-form :model="addForm">
        <el-form-item label="邮箱">
          <el-input type='text'
            v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input type='text'
            v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type='password'
            v-model="addForm.password"></el-input>
        </el-form-item>
        </el-form-item>
        <el-form-item label="密码确认">
          <el-input type='checkpass'
            v-model="addForm.checkpass"></el-input>
        </el-form-item>
        <!-- 上传图片，子组件发送avatorUrl事件-->

        <uploadAvatorTo @getAvatorUrl='setAvatorUrl' />

        <el-form-item label="权限">
          <el-select v-model="addForm.role"
            placeholder="请选择用户权限">
            <el-option label="普通用户"
              value="user"></el-option>
            <el-option label="管理员"
              value="admin"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea"
            v-model="addForm.mark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
        class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary"
          @click="saveAdd">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="编辑"
      :visible.sync="editFormVisible">
      <el-form :model="editForm">
        <el-form-item label="权限">
          <el-select v-model="editForm.role"
            placeholder="请选择用户权限">
            <el-option label="普通用户"
              value="user"></el-option>
            <el-option label="管理员"
              value="admin"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea"
            v-model="editForm.mark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
        class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary"
          @click="saveEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  fetchUsers,
  fetchUser_approved,
  addUser,
  dropUser,
  updateUser
} from "api/user";

// import userProfile from "./userProfile";

import uploadAvatorTo from "@/components/Upload/uploadAvatorTo";

export default {
  mounted() {},
  components: {
    uploadAvatorTo
    // userProfile
  },
  computed: {
    computedApprovedData: function() {
      let that = this;
      return this.approvedData.slice(
        (that.currentPage - 1) * that.pagesize,
        that.currentPage * that.pagesize
      );
    }
  },
  data() {
    return {
      currentPage: 1,
      pagesize: 2,
      pagesizes: [1, 2, 3],
      editFormVisible: false,
      addFormVisible: false,
      searchDate: "",
      approvedData: [
        {
          email: "11@qq.com",
          name: "Tom",
          avator: "https://i.loli.net/2019/05/24/5ce7d6476d32481995.png",
          date: "2016-05-01",
          role: "user",
          city: "武汉",
          tel: "123456789",
          mark: "Office"
        }
      ],
      unapprovedData: [
        {
          email: "1231231@qq.com",
          name: "Tom",
          avator: "https://i.loli.net/2019/05/24/5ce7d6476d32481995.png",
          date: "2016-05-01",
          role: "user",
          city: "武汉",
          tel: "123456789",
          mark: "Office"
        },
        {
          email: "1231231@qq.com",
          name: "Tom",
          avator: "https://i.loli.net/2019/05/24/5ce7d6476d32481995.png",
          date: "2016-05-01",
          role: "user",
          city: "武汉",
          tel: "123456789",
          mark: "Office"
        }
      ],
      addForm: {
        email: "",
        name: "",
        avator: "",
        date: "",
        role: "",
        city: "",
        tel: "",
        mark: ""
      },
      editForm: {
        role: "",
        mark: ""
      }
    };
  },

  methods: {
    setAvatorUrl(val) {
      this.addForm.avator = val;
      console.log("biaodan", val);
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("Avatar picture must be JPG format!");
      }
      if (!isLt2M) {
        this.$message.error("Avatar picture size can not exceed 2MB!");
      }
      return isJPG && isLt2M;
    },

    // 获取用户事件
    handleFetchUsers() {
      console.log(111);
      fetchUsers().then(res => {
        console.log(res);
        this.approvedData = res.data;
      });
    },

    // 点击添加用户按钮事件
    handleAdd() {
      this.addFormVisible = true;
    },

    // 保存用户事件
    saveAdd() {
      let that = this;
      console.log(this.addForm);
      addUser(that.addForm).then(res => {
        console.log(res);
        if (res.success) {
          fetchUsers().then(res => {
            that.approvedData = res.data;
          });
          that.addFormVisible = false;
          that.addForm = {};
        }
      });
    },

    // 点击编辑用户按钮事件
    handleEdit(row) {
      // console.log(row);
      this.editForm = Object.assign({}, row);
      // console.log(this.editForm);
      this.editFormVisible = true;
    },

    saveEdit() {
      let that = this;
      this.editFormVisible = false;
      console.log(that.editForm);
      updateUser(that.editForm).then(res => {
        console.log(res);
        fetchUsers().then(res => {
          that.approvedData = res.data;
        });
      });
    },

    // 点击删除用户按钮事件
    handleDrop(row) {
      console.log(row);
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          dropUser(row)
            .then(res => {
              console.log(res);
              fetchUsers().then(res => {
                this.approvedData = res.data;
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                console.log(res);
              });
            })
            .catch(() => {
              console.log(11);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    open() {},

    ttt() {
      // console.log(this.searchDate[0]);
      // console.log(this.searchDate[1]);
    },
    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    }
  },
  created() {
    this.handleFetchUsers();
    // fetchUser_approved().then(res => {
    //   this.approvedData = res.data.filter(item => {
    //     return item.approved;
    //   });
    //   this.unapprovedData = res.data.filter(item => {
    //     return !item.approved;
    //   });
    // });
  }
};
</script>

<style lang='stylus' scoped>
.user-container {
  padding: 20px;
  padding-bottom: 100px;

  .user-approved {
    padding: 10px;
    overflow: hidden;
    padding-bottom: 50px;
    border: 1px solid white;
    border-radius: 3px;
    box-shadow: 3px 3px 3px 5px #e2e2e2;

    .user-block {
      padding: 10px 0px;
      margin-bottom: 10px;
      height: 60px;

      &>button {
        float: left;
      }

      .search-block {
        position: relative;
        float: right;
      }
    }

    .pagination-block {
      margin-top: 10px;
      padding: 10px;
      height: 40px;
      position: relative;
      float: right;
    }
  }

  .user-avator {
    height: 40px;
    line-height: 30px;
    width: 40px;
  }
}
</style>

<style lang="stylus" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
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
