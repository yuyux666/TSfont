<script setup>
import ScenePanel from '@/views/Common/ScenePanel.vue'
import { ref } from 'vue'
const articleList = ref([])
</script>
<template>
  <div class="mycontainer">
    <ScenePanel title="投诉列表">
      <!-- 表格区域 -->
      <el-table :data="articleList" v-loading="loading" style="width: 90%">
        <el-table-column label="投诉日期" prop="title">
          <template #default="{ row }">
            <el-link type="primary" :underline="false">{{ row.title }}</el-link>
          </template>
        </el-table-column>
        <el-table-column label="投诉人" prop="cate_name"></el-table-column>
        <el-table-column label="投诉标题" prop="pub_date">
          <!-- 会以默认插槽为主，prop可以被忽略 -->
          <template #default="{ row }">
            {{ formatTime(row.pub_date) }}
          </template>
        </el-table-column>
        <el-table-column label="处理结果" prop="state"></el-table-column>
        <el-table-column label="处理时间" prop="state"></el-table-column>
        <el-table-column label="处理人" prop="state"></el-table-column>
        <el-table-column label="投诉状态">
          <!-- 利用作用域插槽row，可以获取当前行的数据 -->
          <!-- 相当于v-for的item -->
          <template #default="{ row }"
            ><el-button
              circle
              plain
              type="primary"
              :icon="Edit"
              @click="onEditArticle(row)"
            ></el-button>
            <el-button
              circle
              plain
              type="danger"
              :icon="Delete"
              @click="onDeleteArticle(row)"
            ></el-button
          ></template>
        </el-table-column>

        <el-table-column label="投诉评价" prop="state"></el-table-column>
      </el-table>
    </ScenePanel>
  </div>
</template>

<style lang="scss" scoped></style>
