<script setup>
import { ref, watch, onMounted } from 'vue'
import { formatTime } from '@/utils/format'

const visibleDrawer = ref(false)

const rooms = ref([
  { id: '0', type: '大床房', maxNum: '18', price: '180' },
  { id: '1', type: '双床房', maxNum: '10', price: '170' }
])

const BookingForm = {
  id: 0,
  hotelName: '', // 酒店名
  occupier_name: '', // 预定人姓名
  occupier_phone: '', // 预定人电话
  room_maxNum: '9999', // 房间最大数量
  room_num: '1', // 房间数量
  room_id: '0', // 房型
  hotel_price: '', //房型对应价格
  cost: '', // 支付金额
  dayTime: '1', // 入住天数
  status: '' // 支付状态
}
const formModel = ref({
  ...BookingForm,
  datetimeRange: [],
  rooms
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
// 默认今日日期
onMounted(() => {
  const today = formatTime(new Date()) // 假设 formatTime 函数返回 YYYY-MM-DD 格式的日期字符串
  const tomorrow = formatTime(new Date(Date.now() + 24 * 60 * 60 * 1000)) // 明日的日期

  formModel.value.datetimeRange = [today, tomorrow] // 将今日和明日日期设置为 datetimeRange 的初始值
})

// 点击下拉栏传值，更新对应的房间数量与房型价格
const updateRoomDetails = () => {
  // 切换后从1开始
  formModel.value.room_num = '1'
  const selectedRoom = rooms.value.find(
    (room) => room.id === formModel.value.room_id
  )
  if (selectedRoom) {
    formModel.value.room_maxNum = selectedRoom.maxNum
    formModel.value.hotel_price = selectedRoom.price
  }
}
watch(() => formModel.value.room_id, updateRoomDetails)

// 监听选择的数量与房型，计算总金额
watch(
  () => ({
    room_num: formModel.value.room_num,
    room_id: formModel.value.room_id,
    datetimeRange: formModel.value.datetimeRange // 注意这里直接监听整个数组的引用变化
  }),
  async (newVal, oldVal) => {
    // 当room_num、room_id或datetimeRange中的任何一个发生变化时，都会执行这个函数

    if (
      newVal.room_num !== oldVal.room_num ||
      newVal.room_id !== oldVal.room_id ||
      newVal.datetimeRange !== oldVal.datetimeRange // 注意这里比较的是数组引用
    ) {
      console.log('111')
      // 调用价格计算接口
      formModel.value.cost =
        newVal.room_num * formModel.value.dayTime * formModel.value.hotel_price
      console.log(formModel.value.cost)
      console.log(
        formModel.value.datetimeRange[1] - formModel.value.datetimeRange[1]
      )
    }
  },
  { deep: true } // 使用深度监听，因为正在比较对象中的属性
)
const open = (data) => {
  visibleDrawer.value = true
  // formModel = ref({...fromModel,...data})
  formModel.value = { ...formModel.value, ...data }
  console.log(formModel.value)
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
  // showSuccessToast('登录成功！')
}

const onPay = (isPay) => {
  centerDialogVisible.value = false
  if (isPay) {
    formModel.value.status = '已支付'
    showSuccessToast({
      message: '支付成功！',
      style: {
        backgroundColor: 'rgba(255, 254, 215, 0.897)',
        color: '#666'
      }
    })
  } else {
    formModel.value.status = '待支付'
    showFailToast({
      message: '支付失败！',
      style: {
        backgroundColor: 'rgba(255, 254, 215, 0.897)',
        color: '#666'
      }
    })
  }
  visibleDrawer.value = false
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
          v-model="formModel.hotelName"
          placeholder="四姑娘山宾馆"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="房间数量">
        <el-input-number
          v-model="formModel.room_num"
          :min="1"
          :max="formModel.room_maxNum"
        />
      </el-form-item>
      <el-form-item label="房型">
        <el-select v-model="formModel.room_id">
          <el-option
            v-for="room in formModel.rooms"
            :key="room.id"
            :label="room.type"
            :value="room.id"
          >
            <template #default>
              <span>{{ room.type }}</span>
              <span style="margin-left: 50px"
                >剩余房间数量: {{ room.maxNum }}</span
              >
              <span style="margin-left: 50px">价格：{{ room.price }}元</span>
            </template>
          </el-option>
        </el-select>
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
          <el-button @click="onPay(false)">取消</el-button>
          <el-button type="primary" @click="onPay(true)"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
body :deep(.van-toast) {
  background-color: #fff !important;
}
:deep(.el-form-item__label) {
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
