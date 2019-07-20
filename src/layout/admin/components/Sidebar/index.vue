<template>
  <div class="side ">
    <el-menu router
      class="el-menu-vertical-leev"
      :unique-opened='true'
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <!-- <el-menu-item v-for='menu,index in sidebarMenu'>
        <template slot="title"
          scope="">
          <i :class='menu.icon'></i>
          <span slot="title">{{menu.title}}</span>
        </template>

        <template v-if='menu.submenu'>
          <el-submenu v-for='submenu,index in menu'>
            <template slot="title"
              scope="">
              <i :class='submenu.icon'></i>
              <span slot="title">{{submenu.title}}</span>
            </template>
          </el-submenu>
        </template>
      </el-menu-item> -->

      <!-- <el-submenu v-for='menu,index in sidebarMenu'
        :index='index'>
        <template slot="title"
          scope="">
          <i :class='menu.icon'></i>
          <span slot="title">{{menu.title}}</span>
        </template>
        <el-menu-item-group v-if='menu.subMenu'>
          <el-menu-item v-for='item,index in menu'
            :index='item'>{{item.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index='/admin/user/showuser'>查看用户</el-menu-item>
          <el-menu-item index='/admin/user/analyse'>用户分析</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">广告管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index='/admin/ad/banner'>首页轮播图</el-menu-item>
          <el-menu-item index='/admin/ad/news'>最新资讯</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">文章管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index='/admin/article/front'>前端文章</el-menu-item>
          <el-menu-item index='/admin/article/end'>后端文章</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">任务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index='/admin/job/'>前端任务</el-menu-item>
          <el-menu-item index='/admin/job/end'>后端任务</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index='/admin/product'>虚拟商品</el-menu-item>
          <el-menu-item index='/admin/product'>实体商品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index='/admin/order/website'>网站订单</el-menu-item>
          <el-menu-item index='/admin/order/design'>设计订单</el-menu-item>
          <el-menu-item index='/admin/order/others'>其他订单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">邮箱验证管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index='/admin/user/adduser'>验证列表</el-menu-item>
          <el-menu-item index='/admin/user/adduser'>邀请码</el-menu-item>
          <el-menu-item index='/admin/user/showuser'>邮箱黑名单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index='/admin/user/showuser'>背景颜色</el-menu-item>
          <el-menu-item index='/admin/user/adduser'>主题色</el-menu-item>
          <el-menu-item index='/admin/user/adduser'>其他设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

  </div>
</template>
<style lang="stylus">
.side {
  .is-opened > .el-menu > li {
    background: #263444;
  }

  .el-menu {
    border-right: none;
    background-color: #2f4054;
  }

  li, .el-submenu {
    color: rgb(191, 203, 217) !important;
  }

  .el-submenu__title {
    color: rgb(191, 203, 217) !important;
  }

  .el-menu-item-group__title {
    padding: 0;
  }

  .el-submenu__title:hover {
    background: #001528 !important;
  }

  .el-menu-item:hover {
    background: #001528 !important;
  }

  .el-menu-vertical-leev:not(.el-menu--collapse) {
    width: 170px;
    min-height: 400px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      sidebarMenu: [
        {
          title: "用户管理1",
          icon: "el-icon-platform-eleme",
          submenu: [
            {
              title: "用户列表",
              path: "/admin/user/list"
            },
            { title: "用户分析", path: "/admin/user/analyse" }
          ]
        },
        {
          title: "用户管理2",
          icon: "el-icon-platform-eleme"
        },
        {
          title: "广告管理",
          icon: "el-icon-eleme",
          submenu: [
            {
              title: "轮播广告图",
              path: ""
            },
            {
              title: "最新资讯",
              path: ""
            }
          ]
        }
      ]
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.sidebar.opened;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>