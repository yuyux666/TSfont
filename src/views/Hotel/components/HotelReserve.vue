<script setup>
import ScenePanel from '@/views/Common/ScenePanel.vue'
import { onMounted, ref } from 'vue'
import { hotelOrderService } from '@/apis/hotel'
const orderList = ref([])
onMounted(() => {
  getOrderList()
})
const pageParms = ref({
  pageNum: 1,
  pageSize: 10,
  total: 0
})
const getOrderList = async () => {
  const res = await hotelOrderService({
    pageNum: pageParms.value.pageNum,
    pageSize: pageParms.value.pageSize
  })
  orderList.value = res.data.data.records
  pageParms.value.total = res.data.data.total
}
const onCurrentChange = () => {
  getOrderList()
}
const onSizeChange = () => {
  getOrderList()
}
const getRoomState = (order) => {
  switch (order.status) {
    case 0:
      return '已提交'
    case 1:
      return '已支付'
    case 2:
      return '已入住'
    case 3:
      return '已退款'
    case 4:
      return '已完成'
  }
}
</script>
<template>
  <div class="mycontainer">
    <ScenePanel title="我的预定">
      <!-- 表格区域 -->
      <el-table
        :data="orderList"
        v-loading="loading"
        style="width: 90; border-radius: 10px; min-height: 300px"
      >
        <el-table-column label="预定酒店" prop="hotelName">
          <template #default="{ row }">
            <el-link type="primary" :underline="false">{{
              row.hotelName
            }}</el-link>
          </template>
        </el-table-column>
        <el-table-column label="预定房型" prop="roomType"></el-table-column>
        <el-table-column label="入住时间" prop="checkinTime"></el-table-column>
        <el-table-column label="退房时间" prop="checkoutTime"></el-table-column>
        <el-table-column label="金额" prop="cost"> </el-table-column>
        <el-table-column label="预定时间" prop="createTime">
          <template #default="{ row }">
            {{ row.createTime.slice(0, 10) }}
          </template>
        </el-table-column>
        <el-table-column label="预定人" prop="occupierName"></el-table-column>
        <el-table-column
          label="预定电话"
          prop="occupierPhone"
        ></el-table-column>
        <el-table-column label="状态">
          <template #default="{ row }">
            <el-tag :type="success" disable-transitions>{{
              getRoomState(row)
            }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        v-model:current-page="pageParms.pageNum"
        v-model:page-size="pageParms.pageSize"
        :page-sizes="[5, 10]"
        :total="pageParms.total"
        :background="true"
        layout="jumper, total, sizes, prev, pager, next"
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
        style="margin-top: 50px; justify-content: flex-end"
      />
    </ScenePanel>
  </div>
</template>

<style lang="scss" scoped></style>
