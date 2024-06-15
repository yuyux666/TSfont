<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
</script>
<template>
  <div class="mycontainer">
    <div class="search">
      <el-input
        v-model="input"
        style="width: 240px"
        placeholder="搜索路线..."
      />
      <el-button type="primary" :icon="Search"></el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mycontainer {
  .search {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style>
