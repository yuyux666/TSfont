<script setup>
import { ref } from 'vue'
const evaluateVisible = ref(false)
const currentComplaintTitle = ref('')
const value2 = ref(4)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
// 评价框
const showEvaluationDialog = (row) => {
  currentComplaintTitle.value = row.title // 更新当前投诉标题
  value2.value = null // 重置评分（如果需要的话）
  evaluateVisible.value = true // 显示对话框
}
// 提交评价
const onsubmitEvaluation = () => {
  // 处理提交逻辑
  evaluateVisible.value = false // 关闭对话框
  console.log('提交评价', value2.value)
  // 提交评价接口请求
  showSuccessToast({
    message: '评价成功！',
    style: {
      backgroundColor: 'rgba(255, 254, 215, 0.897)',
      color: '#666'
    }
  })
}
const open = (row) => {
  showEvaluationDialog(row)
}
defineExpose({ open })
</script>
<template>
  <el-dialog
    v-model="evaluateVisible"
    title="投诉评价"
    width="500"
    align-center
  >
    <span
      >您对《{{ currentComplaintTitle }}》的处理结果满意吗？期待您的好评！</span
    >
    <div class="rate">
      <el-rate v-model="value2" :colors="colors" />
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="evaluateVisible = false">取消</el-button>
        <el-button type="primary" @click="onsubmitEvaluation">
          提交评价
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
