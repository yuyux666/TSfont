<script setup>
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue'

const visibleDrawer = ref(false)

const BookingForm = {
  hotel_name: '', // 酒店名
  occupier_name: '', // 预定人姓名
  occupier_phone: '', // 预定人电话
  room_num: '', // 房间数量
  room_id: '0', // 房型
  hotel_price: '120',
  cost: '', // 金额
  checkin_time: '', // 入住时间
  checkout_time: '', // 退房时间
  status: ''
}
const formModel = ref({
  ...BookingForm,
  datetimeRange: []
})
const rules = {
  occupier_name: [
    { required: true, message: '请输入预定人姓名', trigger: 'blur' },
    {
      pattern: /^[\u4e00-\u9fa5]{2,4}$/,
      message: '请输入正确的姓名',
      trigger: 'blur'
    }
  ],
  occupier_phone: [
    { required: true, message: '请输入预定人电话', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],

  checkin_time: [
    { required: true, message: '请输入入住时间', trigger: 'blur' }
  ],
  checkout_time: [
    { required: true, message: '请输入退房时间', trigger: 'blur' }
  ]
}
watch(
  () => formModel.value.room_num,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      formModel.value.cost = formModel.value.hotel_price * newValue
    }
  }
)
const open = () => {
  visibleDrawer.value = true
}
const centerDialogVisible = ref(false)
const submitForm = () => {
  // 提交表单前，将日期范围的值分别赋值给 checkin_time 和 checkout_time
  if (formModel.value.datetimeRange.length === 2) {
    formModel.value.checkin_time = formModel.value.datetimeRange[0]
    formModel.value.checkout_time = formModel.value.datetimeRange[1]
    // 然后你可以继续执行表单提交的逻辑...
  }
  centerDialogVisible.value = true
  ElMessage.success('支付成功！')
  visibleDrawer.value = false
}
const close = () => {
  console.log(formModel.value.datetimeRange)
}
defineExpose({ open })
</script>

<template>
  <el-drawer
    v-model="visibleDrawer"
    title="酒店预订"
    direction="rtl"
    size="50%"
    style="background-color: #122a3c; color: #fff"
  >
    <!-- 酒店预订表单 -->
    <el-form
      :model="formModel"
      ref="formRef"
      label-width="120px"
      :rules="rules"
      class="hotelBooking"
    >
      <el-form-item label="酒店名称">
        <el-input
          v-model="formModel.hotel_name"
          placeholder="四姑娘山宾馆"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="房间数量" prop="room_num">
        <el-input-number v-model="formModel.room_num" :min="1" />
      </el-form-item>
      <el-form-item label="房型">
        <el-select v-model="formModel.room_id">
          <el-option label="大床房" value="0"></el-option>
          <el-option label="双床房" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入住及退房时间">
        <el-date-picker
          v-model="formModel.datetimeRange"
          value-format="YYYY-MM-DD"
          @change="close"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          size="default"
        />
      </el-form-item>

      <el-form-item label="预定人姓名" prop="occupier_name">
        <el-input v-model="formModel.occupier_name"></el-input>
      </el-form-item>
      <el-form-item label="预定人电话" prop="occupier_phone">
        <el-input v-model="formModel.occupier_phone"></el-input>
      </el-form-item>
      <el-form-item>
        <span
          >共<span class="reserve-price">{{ formModel.cost }}</span
          >元</span
        >
      </el-form-item>
      <el-form-item>
        <div>
          <el-button
            type="primary"
            style="color: #122a3c"
            @click="submitForm"
            plain
            >直接支付</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </el-drawer>
  <!-- 支付弹窗 -->
  <div class="pay">
    <el-dialog
      v-model="centerDialogVisible"
      title="支付确认"
      width="500"
      align-center
    >
      <span>确定支付？</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
::v-deep .el-form-item__label {
  color: #fff;
  margin-right: 10px;
}
.el-form-item {
  margin-bottom: 30px; /* 根据需要调整间隔大小 */
}
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}
.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
.reserve-price {
  padding: 20px;
  font-size: 20px;
}
.reserve-price {
  color: #bd0000;
}
.block {
  width: 100%;
  .picker {
    width: 100%;
  }
}
.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
}
.line {
  width: 1px;
  background-color: var(--el-border-color);
}
</style>
