<template>
<div>
  <el-container style="height: 768px">
      <el-header>
        <el-menu
            :default-active="navMenu"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1">我的订单</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的京东</template>
            <el-menu-item index="2-1">我的京豆</el-menu-item>
            <el-menu-item index="2-2">我的白条</el-menu-item>
            <el-menu-item index="2-3">我的优惠卷</el-menu-item>
            <el-menu-item index="2-4">我的问卷</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">京东会员</el-menu-item>
          <el-menu-item index="4">企业采购</el-menu-item>
          <el-menu-item index="5">客户服务</el-menu-item>
          <el-menu-item index="6">网站导航</el-menu-item>
          <el-menu-item index="7">手机京东</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      navMenu: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-header, .el-footer {
  color: #333;
  text-align: center;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}
</style>
