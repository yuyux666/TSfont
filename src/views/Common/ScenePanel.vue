<script setup>
defineProps({
  title: {
    type: String
  },
  subtitle: {
    type: String
  }
})
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subtitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  // background-color: #fff;
  background-color: transparent;
  margin: 10px;
  padding: 10px;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      color: aqua;

      small {
        font-size: 16px;
        color: #ffffff;
        margin-left: 20px;
      }
    }
  }
}
</style>
