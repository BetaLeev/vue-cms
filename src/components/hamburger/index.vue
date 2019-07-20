<template>
  <div class="hamburger"
    @click='toggleClick'
    :class="{'is-active':isActive}">
    <i class="el-icon-s-fold"></i>
  </div>
</template>

<script>
export default {
  name: "hamburger",
  mounted() {},
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    }
  },
  created() {}
};
</script>

<style lang='stylus' scoped>
i {
  line-height: 60px;
  height: 30px;
  width: 30px;
  font-size: 2rem;
  position: relative;
}

.hamburger {
  float: left;
}
</style>
<style>
.hamburger.is-active {
  top: -7px;
  position: relative;
  transform: rotate(180deg);
}
</style>
