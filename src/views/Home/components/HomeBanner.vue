<script setup>
import { ref } from 'vue'
const bannerList = ref([
  { id: '1', src: 'http://localhost:5173/src/assets/images/unuse1.jpg' },
  { id: '2', src: 'http://localhost:5173/src/assets/images/unuse2.jpg' },
  { id: '3', src: 'http://localhost:5173/src/assets/images/unuse3.jpg' },
  { id: '4', src: 'http://localhost:5173/src/assets/images/unuse4.jpg' }
])
</script>
<template>
  <div class="home-banner">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.src" alt="" />
        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  margin: 30px auto;
  .el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 8px;
      max-width: 100%;
      max-height: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .el-carousel__item:nth-child(2n) {
    // background-color: #99a9bf;
    background-color: transparent;
  }

  .el-carousel__item:nth-child(2n + 1) {
    // background-color: #d3dce6;
    background-color: transparent;
  }
}
</style>
