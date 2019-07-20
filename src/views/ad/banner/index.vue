<template>
  <div class="container">
    <div class="banner-container">

      <el-button type='primary'
        class="add-button"
        @click='addDialogFormVisible = true'>新建banner图</el-button>

      <el-table :data="tableData"
        border
        style="width: 100%">
        <el-table-column prop="title"
          label="标题"
          width="200">
        </el-table-column>

        <el-table-column prop="order"
          label="序列"
          width="90">
        </el-table-column>

        <el-table-column prop="img"
          label="图片"
          width="200">
          <template slot-scope="scope">
            <img style="height:60px"
              width="90%"
              :src="scope.row.img">
          </template>
        </el-table-column>

        <el-table-column prop="describle"
          label="描述">
        </el-table-column>

        <el-table-column prop="url"
          label="网址"
          width="200">
        </el-table-column>

        <el-table-column fixed="right"
          label="操作"
          width="145">
          <template slot-scope="scope">
            <el-button @click="handleModify(scope.row)"
              type="success"
              size="small">修改</el-button>
            <el-button type="danger"
              @click="handleDrop(scope.row)"
              size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>

    <!-- 新建banner对话框 -->
    <el-dialog title="新建banner"
      :visible.sync="addDialogFormVisible">
      <el-form :model="addForm">
        <el-form-item label="标题">
          <el-input v-model="addForm.title"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="序列">
          <el-select v-model="addForm.order"
            placeholder="请选择图片顺序">
            <el-option label="1"
              value="1"></el-option>
            <el-option label="2"
              value="2"></el-option>
          </el-select>
        </el-form-item>

        <uploadAvatorTo />

        <el-form-item label="描述">
          <el-input v-model="addForm.describle"
            autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
        class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
          @click="saveNewBanner">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="修改banner详情"
      :visible.sync="modifyDialogFormVisible">
      <el-form :model="updateForm">
        <el-form-item label="标题"
          :label-width="formLabelWidth">
          <el-input v-model="updateForm.title"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="序列"
          :label-width="formLabelWidth">
          <el-select v-model="updateForm.order"
            placeholder="请选择图片顺序">
            <el-option label="1"
              value="1"></el-option>
            <el-option label="2"
              value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="描述"
          :label-width="formLabelWidth">
          <el-input v-model="updateForm.describle"
            autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
        class="dialog-footer">
        <el-button @click="modifyDialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
          @click="handleUpdateForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  fetchAllBanner,
  createNewBanner,
  updateBanner,
  deleteBanner
} from "@/api/banner";
import uploadAvatorTo from "@/components/Upload/uploadAvatorTo";
import { constants } from "crypto";
export default {
  components: {
    uploadAvatorTo
  },

  methods: {
    getAllBanner() {
      const self = this;
      fetchAllBanner().then(res => {
        console.log(res);
        self.tableData = res.data;
      });
    },
    handleModify(row) {
      console.log(row);
      this.modifyDialogFormVisible = true;
      this.updateForm = Object.assign({}, row);
    },

    handleDrop(row) {
      const id = row._id;
      deleteBanner(id).then(res => {
        console.log(res);
      });
      console.log(row);
    },

    saveNewBanner() {
      console.log(this.addForm);
      createNewBanner(this.addForm).then(res => {
        console.log(res);
      });
      this.addDialogFormVisible = false;
      console.log(12);
    },

    handleUpdateForm() {
      console.log(this.updateForm);
      updateBanner(this.updateForm).then(res => {
        console.log(res);
      });
      this.modifyDialogFormVisible = false;
      console.log(123);
    }
  },

  created() {
    this.getAllBanner();
  },

  data() {
    return {
      tableData: [
        {
          title: "轮播图测试",
          order: 1,
          img: "https://i.loli.net/2019/07/05/5d1f14c439a8719187.jpg",
          describle: "轮播图描述测试轮播图描述测试轮播图描述测试轮播图描述测试",
          url: "https://i.loli.net/2019/07/05/5d1f14c439a8719187.jpg"
        },
        {
          title: "轮播图测试2",
          order: 1,
          img: "https://i.loli.net/2019/07/05/5d1f2522715c982233.png",
          describle: "轮播图描述测试轮播图描述测试轮播图描述测试轮播图描述测试",
          url: "https://i.loli.net/2019/07/05/5d1f2522715c982233.png"
        },
        {
          title: "轮播图测试3",
          order: 1,
          img: "https://i.loli.net/2019/07/05/5d1f25455664494678.jpg",
          describle: "轮播图描述测试轮播图描述测试轮播图描述测试轮播图描述测试",
          url: "https://i.loli.net/2019/07/05/5d1f25455664494678.jpg"
        },
        {
          title: "轮播图测试4",
          order: 1,
          img: "https://i.loli.net/2019/07/05/5d1f2574bfec134215.png",
          describle: "轮播图描述测试轮播图描述测试轮播图描述测试轮播图描述测试",
          url: "https://i.loli.net/2019/07/05/5d1f2574bfec134215.png"
        }
      ],

      addDialogFormVisible: false,
      modifyDialogFormVisible: false,
      form: {
        title: "",
        order: "",
        img: "",
        describle: ""
      },
      updateForm: {},
      addForm: {},
      modifyForm: {},
      formLabelWidth: "120px"
    };
  }
};
</script>

<style lang="stylus" scoped>
.container {
  padding-bottom: 40px;
}

.banner-container {
  padding: 10px;
  overflow: hidden;
  padding-bottom: 50px;
  border: 1px solid white;
  border-radius: 3px;
  box-shadow: 3px 3px 3px 5px #e2e2e2;

  .add-button {
    margin: 10px 0px;
  }
}
</style>

