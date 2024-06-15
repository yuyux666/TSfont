<script setup>
defineProps({
  scene: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <RouterLink to="/" class="scenes-item">
    <img v-img-lazy="scene.picture" alt="" />
    <p class="name ellipsis">{{ scene.name }}</p>
    <p class="desc ellipsis">{{ scene.desc }}</p>
    <p class="altitude">海拔：{{ scene.altitude }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">
.scenes-item {
  display: block;
  background-color: transparent;
  // border: 1px solid aqua;
  border-radius: 10px;
  width: 230px;
  padding: 10px 10px;
  text-align: center;
  transition: all 0.5s;
  height: 300px;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgba(255, 254, 215, 0.897);
  }

  img {
    width: 160px;
    height: 160px;
    border-radius: 10px;
    border: 1px solid #fffed7;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
    color: #bdf8ff;
  }

  .desc {
    display: block;
    color: #bdf8ff;
    display: -webkit-box;
    min-height: 50px;
    -webkit-line-clamp: 2; //示例值，表示最多显示3行
    -webkit-box-orient: vertical;
  }

  .altitude {
    color: #fffed7;
    font-size: 18px;
  }
}
</style>
