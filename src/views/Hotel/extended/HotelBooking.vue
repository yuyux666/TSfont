<script setup>
import { ref, watch } from 'vue'
import { hotelRoomService, hotelBookingService } from '@/apis/hotel'
//抽屉显隐
const visibleDrawer = ref(false)
//房型列表
const rooms = ref([])
const BookingForm = {
  id: 0,
  hotelName: '', // 酒店名
  occupier_name: '', // 预定人姓名
  occupier_phone: '', // 预定人电话
  room_maxNum: '9999', // 房间最大数量
  room_num: '1', // 房间数量
  room_id: '', // 房型
  cost: 0, // 支付金额
  dayTime: '1' // 入住天数
}
//预定表单
const formRef = ref(null)
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
  ]
  // room_id: [{ required: true, message: '请选择房型', trigger: 'change' }]
}

// 监听选择的数量与房型，计算总金额
watch(
  () => ({
    room_num: formModel.value.room_num,
    room_id: formModel.value.room_id,
    datetimeRange: formModel.value.datetimeRange // 注意这里直接监听整个数组的引用变化
  }),
  async (newVal, oldVal) => {
    //没选房型，不计算
    if (newVal.room_id === '') return
    // 当room_num、room_id或datetimeRange中的任何一个发生变化时，都会执行这个函数
    if (
      newVal.room_num !== oldVal.room_num ||
      newVal.room_id !== oldVal.room_id ||
      newVal.datetimeRange !== oldVal.datetimeRange // 注意这里比较的是数组引用
    ) {
      //获取天数
      const dayTime = getDayTime(newVal.datetimeRange)
      const price = rooms.value.find(
        (room) => room.id === newVal.room_id
      ).roomPrice
      // 调用价格计算接口
      formModel.value.cost = newVal.room_num * dayTime * price
    }
  },
  { deep: true } // 使用深度监听，因为正在比较对象中的属性
)
const open = (data) => {
  //调用该方法打开抽屉
  visibleDrawer.value = true
  //设置酒店信息
  formModel.value = { ...formModel.value, ...data }
  //获取房型信息
  getRoomInfo()
}
//对话框显隐
const centerDialogVisible = ref(false)
//提交表单（支付按钮）
const submitForm = async () => {
  //等待校验
  await formRef.value.validate()
  //打开支付对话框
  centerDialogVisible.value = true
}

const onPay = async (isPay) => {
  centerDialogVisible.value = false
  if (isPay) {
    //预定成功关闭抽屉
    visibleDrawer.value = false
    //提交预定
    const res = await hotelBookingService({
      hotelId: formModel.value.id,
      roomId: formModel.value.room_id,
      checkinTime: formModel.value.datetimeRange[0],
      checkoutTime: formModel.value.datetimeRange[1],
      occupier_name: formModel.value.occupier_name,
      occupier_phone: formModel.value.occupier_phone,
      roomNum: formModel.value.room_num,
      cost: formModel.value.cost
    })
    showSuccessToast({
      message: res.data.message,
      style: {
        backgroundColor: 'rgba(255, 254, 215, 0.897)',
        color: '#666'
      }
    })
  } else {
    showFailToast({
      message: '预定取消',
      style: {
        backgroundColor: 'rgba(255, 254, 215, 0.897)',
        color: '#666'
      }
    })
  }
}
//获取房型信息
const getRoomInfo = async () => {
  const res = await hotelRoomService({
    id: formModel.value.id,
    checkIn: formModel.value.datetimeRange[0],
    checkOut: formModel.value.datetimeRange[1]
  })
  rooms.value = res.data.data
}
//日期计算函数，输入两个yyyy-mm-dd格式的日期，返回相差的天数
const getDayTime = (dateArr) => {
  const dt1 = new Date(dateArr[0])
  const dt2 = new Date(dateArr[1])
  // 计算时间差的毫秒数
  const diffInMs = Math.abs(dt2 - dt1)
  // 将毫秒数转换为天数
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
  return diffInDays
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
        <el-select v-model="formModel.room_id" placeholder=" ">
          <el-option
            v-for="room in rooms"
            :key="room.id"
            :label="room.roomType"
            :value="room.id"
          >
            <template #default>
              <span>{{ room.roomType }}</span>
              <span style="margin-left: 50px"
                >剩余房间数量: {{ room.unusedNumber }}</span
              >
              <span style="margin-left: 50px"
                >价格：{{ room.roomPrice }}元</span
              >
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
  margin-bottom: 30px;
  /* 根据需要调整间隔大小 */
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
