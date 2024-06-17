<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
defineProps({
  title: {
    type: String
  }
})
const input = ref('')

// 查询景点
const clearInput = () => {
  searchStatus.value = false
  console.log('clear')
}
const searchStatus = ref(false)
const search = () => {
  if (input.value !== '') {
    searchStatus.value = true
    console.log('search')
  }
}
</script>
<template>
  <div class="search">
    <div class="search-header">
      <el-input
        v-model="input"
        style="width: 240px"
        :placeholder="`搜索${title}...`"
        clearable
        @clear="clearInput"
      />
      <el-button type="primary" :icon="Search" @click="search"></el-button>
    </div>
    <div class="search-body" :class="{ 'search-body-show': searchStatus }">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  overflow: hidden;
  min-height: 40px;
  .search-header {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  .search-body {
    margin-top: -400px;
    height: 365px;
    background-color: transparent;
    border: 1px solid aqua;
    border-radius: 20px;
    opacity: 0;
    transition: all 0.6s ease-in-out;
    &.search-body-show {
      margin-top: 50px;
      opacity: 1;
    }
    .search-page {
      height: 100%;
      padding: 20px;

      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 10px;

        // 嵌套子元素样式
        & > span {
          margin-bottom: 5px; // 除非最后一个子元素
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .left {
        height: 323px;
        width: 100%;
        border-right: 1px solid #fffed7;
        display: flex;
        justify-content: space-between;
        padding: 30px;
        flex-direction: column;

        .Big-title {
          font-size: 40px;
          color: $xtxColor;
        }

        .Big-price,
        .Big-time {
          font-size: 16px;
          color: #ffffff;
        }
      }

      .right {
        height: 323px;
        display: flex;
        flex-direction: row;
        align-items: flex-center; // 从顶部开始布局（默认）
        justify-content: flex-start; // 内容从顶部开始（默认）
        .small-title {
          padding: 30px;
          margin: 0 20px;
          // 设置文字竖着显示
          writing-mode: vertical-rl; // 从右到左的垂直书写
          // 或者使用
          font-size: 30px; // 根据需要调整字体大小
          // 设置文字颜色
          color: #ffe3e3;

          // 可能需要的其他样式，如行高或文本对齐方式
          line-height: 1.5; // 根据需要调整行高
          text-align: center; // 如果需要水平居中对齐
        }

        img {
          width: 280px;
          height: auto;
          border-radius: 20px;
        }
        .small-info {
          display: flex;

          height: 100%;
          width: 300px;
          flex-direction: column;
          justify-content: space-between; /* 垂直方向上空间分布，使得子元素分别位于顶部和底部 */
          padding: 10px;
          .small-desc {
            margin-top: 30px;
            padding: 10px;
            font-size: 16px;
            color: #ffecec;
            line-height: 2;
          }

          .small-altitude {
            // margin-top: auto;
            padding: 10px;
            border: 1px solid #fffed7;
            width: 100px;
            border-radius: 10px;
            font-size: 14px;
            color: #f7b62a;
            margin: 0 auto 10px;
          }
        }
      }
    }
  }
}
</style>
