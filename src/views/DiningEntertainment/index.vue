<script setup>
// import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <!-- el-menu整个菜单组件
      1 激活颜色             5 router选项开启，el-menu-item的index就是点击跳转的路径
      3 默认高亮菜单项
      -->
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :active-text-color="$xtxColor"
        router
        text-color="#fff"
      >
        <el-menu-item index="/main/diningEntertainment/dining">
          <el-icon><Management /></el-icon>
          <span>美食</span>
        </el-menu-item>
        <el-menu-item index="/main/diningEntertainment/entertainment">
          <el-icon><Management /></el-icon>
          <span>演出</span>
        </el-menu-item>
        <el-menu-item index="/main/diningEntertainment/recreation">
          <el-icon><Management /></el-icon>
          <span>娱乐</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <el-card class="page-container"> <RouterView /> </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped lang="scss">
@import '../../assets/mainter.scss';
</style>
