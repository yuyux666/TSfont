<script setup></script>
<template>
  <div class="home-banner">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item>
        <img src="@/assets/images/unuse1.jpg" alt="" />
        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/unuse2.jpg" alt="" />
        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/unuse3.jpg" alt="" />
        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/unuse4.jpg" alt="" />
        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  margin: 50px auto;
  .el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 8px;
      width: 100%;
      height: auto;
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
