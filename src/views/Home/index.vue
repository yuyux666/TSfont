<script setup>
import HomeBanner from './components/HomeBanner.vue'
// import HomeNew from './components/HomeNew.vue'
// import HomeHot from './components/HomeHot.vue'
// import homeProduct from './components/HomeProduct.vue'
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFix from '@/views/Layout/components/LayoutFix.vue'
</script>

<template>
  <div class="pageContainner">
    <LayoutFix />
    <!-- 添加全屏背景视频 -->
    <div class="bg">
      <video autoplay muted loop id="bg-video">
        <source src="@/assets/videos/mybg30s.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>

    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>

    <div class="container">
      <HomeBanner />
      <div class="info">
        <img src="@/assets/images/reminder.jpg" alt="" />
      </div>
    </div>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
<style scoped lang="scss">
.pageContainner {
  position: relative;
  background: #000;

  #bg-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;

    z-index: 0;
    background-size: cover;
  }

  .info {
    width: 100%;
    height: auto;
    img {
      width: auto\9;
      height: auto;
      max-width: 100%;
      display: inline-block;
      vertical-align: middle;
      margin-top: 200px;
      border: 0;
    }
  }
}
</style>
