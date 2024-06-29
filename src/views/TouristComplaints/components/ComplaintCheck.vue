<script setup>
import ScenePanel from '@/views/Common/ScenePanel.vue'
import EvaluateItem from '../extended/EvaluateItem.vue'
import { ref } from 'vue'

const evaluateRef = ref()

const contentForm = ref({
  id: '1',
  name: '周杰伦',
  title: '强制消费',
  content: '强制进店消费商品，希望整治',
  file_name: 'photo.jpg'
})
const complaintDetailVisible = ref(false)

const showEvaluationDialog = (row) => {
  evaluateRef.value.open(row)
}

const complaintList = [
  {
    id: '1',
    submit_time: '2021-03-12', // 投诉时间
    complainter_name: '李投诉', // 投诉人
    title: '强制消费！', // 投诉标题
    result_content: '已处理', // 处理结果
    processing_time: '2021-03-14', // 处理时间
    processor_name: '王处理', // 处理人
    approvere_name: '张审批', // 审批人
    status: '处理完成', // 投诉状态
    grade: '' // 评分
  },
  {
    id: '2',
    submit_time: '2021-03-12', // 投诉时间
    complainter_name: '李投诉', // 投诉人
    title: '厕所差', // 投诉标题
    result_content: '已处理', // 处理结果
    processing_time: '2021-03-14', // 处理时间
    processor_name: '王处理', // 处理人
    approvere_name: '张审批', // 审批人
    status: '处理完成', // 投诉状态
    grade: '3' // 评分
  },
  {
    id: '3',
    submit_time: '2021-03-12', // 投诉时间
    complainter_name: '李投诉', // 投诉人
    title: '垃圾多', // 投诉标题
    result_content: '', // 处理结果
    processing_time: '2021-03-14', // 处理时间
    processor_name: '王处理', // 处理人
    approvere_name: '张审批', // 审批人
    status: '待处理', // 投诉状态
    grade: '' // 评分
  },
  {
    id: '',
    submit_time: '2021-03-12', // 投诉时间
    complainter_name: '李投诉', // 投诉人
    title: '垃圾多', // 投诉标题
    result_content: '', // 处理结果
    processing_time: '2021-03-14', // 处理时间
    processor_name: '王处理', // 处理人
    approvere_name: '张审批', // 审批人
    status: '待处理', // 投诉状态
    grade: '' // 评分
  }
]
</script>
<template>
  <div class="mycontainer">
    <ScenePanel title="投诉列表">
      <!-- 表格区域 -->
      <el-table
        :data="complaintList"
        v-loading="loading"
        style="width: 90; border-radius: 10px; min-height: 300px"
      >
        <el-table-column label="投诉日期" prop="submit_time"></el-table-column>
        <el-table-column
          label="投诉人"
          prop="complainter_name"
        ></el-table-column>
        <el-table-column label="投诉标题" prop="title">
          <!-- 会以默认插槽为主，prop可以被忽略 -->
          <template #default="{ row }">
            <el-link
              :underline="false"
              @click="complaintDetailVisible = true"
              >{{ row.title }}</el-link
            >
          </template>
        </el-table-column>
        <el-table-column
          label="处理结果"
          prop="result_content"
        ></el-table-column>
        <el-table-column
          label="处理时间"
          prop="processing_time"
        ></el-table-column>
        <el-table-column label="处理员" prop="processor_name"></el-table-column>
        <el-table-column label="审核员" prop="approvere_name"></el-table-column>
        <el-table-column label="投诉状态" prop="status">
          <!-- 利用作用域插槽row，可以获取当前行的数据 -->
          <!-- 相当于v-for的item -->
          <!-- <template #default="{ row }"
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
          ></template> -->
        </el-table-column>
        <el-table-column label="投诉评价" prop="grade">
          <template #default="{ row }">
            <template v-if="row.status === '处理完成'">
              <el-rate
                v-if="row.grade !== ''"
                v-model="row.grade"
                size="small"
                :disabled="true"
              />
              <el-link v-else @click="showEvaluationDialog(row)" target="_blank"
                >前往评价>></el-link
              >
            </template>
            <template v-else>
              <span>请等待处理</span>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </ScenePanel>

    <!-- 投诉评价 -->
    <EvaluateItem ref="evaluateRef"></EvaluateItem>

    <!-- 查看投诉内容详情 -->
    <el-dialog
      v-model="complaintDetailVisible"
      title="查看投诉内容"
      width="500"
      align-center
    >
      <el-form
        :model="contentForm"
        ref="formRef"
        :rules="rules"
        label-width="100px"
        style="width: 70%"
      >
        <el-form-item label="投诉人" prop="name">
          <el-input
            v-model="contentForm.name"
            placeholder="周杰伦"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="投诉标题" prop="title">
          <el-input
            v-model="contentForm.title"
            placeholder="请输入标题"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="投诉内容" prop="content">
          <el-input v-model="contentForm.content" type="textarea" disabled />
        </el-form-item>
        <el-form-item label="附件列表" prop="file_name">
          <span>{{ contentForm.file_name }}</span>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="complaintDetailVisible = false">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
