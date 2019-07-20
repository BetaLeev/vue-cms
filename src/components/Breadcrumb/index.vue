<template>
  <div class="bread">
    <el-breadcrumb separator="/"
      style="line-height:50px;clear:both;">
      <!-- <transition-group> -->
      <!-- <el-breadcrumb-item v-for='(item,index) in levelList'
        :key='item.path'
        :to="{ path: `${item.path}` }">{{item}}</el-breadcrumb-item> -->
      <!-- </transition-group> -->
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "breadcrumb",
  mounted() {},
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route(route) {
      console.log(route.path);
    }
  },
  methods: {
    getBreadCrumb() {
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      console.log(matched);
    }
  },
  created() {}
};
</script>

<style lang='stylus' scoped>
.bread {
  float: left;
  display: inline-block;
  padding-left: 12px;
  vertical-align: middle;
  line-height: 60px;
  height: 60px;
}</style>