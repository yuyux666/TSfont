<script setup>
import { RouterView } from 'vue-router'

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
        <el-menu-item index="/main/touristAttractions/tourOverview">
          <el-icon><Management /></el-icon>
          <span>景点概览</span>
        </el-menu-item>
        <el-menu-item index="/main/touristAttractions/tourShuangqiao">
          <el-icon><Management /></el-icon>
          <span>双桥沟</span>
        </el-menu-item>
        <el-menu-item index="/main/touristAttractions/tourHaizi">
          <el-icon><Management /></el-icon>
          <span>海子沟</span>
        </el-menu-item>
        <el-menu-item index="/main/touristAttractions/tourChangping">
          <el-icon><Management /></el-icon>
          <span>长坪沟</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <el-card class="page-container">
          <RouterView />
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped lang="scss">
@import '../../assets/mainter.scss';
</style>
