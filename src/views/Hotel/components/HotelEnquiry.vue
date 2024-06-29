<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import HotelBooking from '../extended/HotelBooking.vue'
import { formatTime } from '@/utils/format'

// 搜索表单
const hotelForm = {
  id: '',
  hotel_name: '', // 酒店名
  priority: '', // 优先级
  location: '',
  description: '',
  isopen: '',
  stars: '',
  lowest_price: '120', // 最低价格
  datetimeRange: [] // 入住与退房时间
}
const formModel = ref({
  ...hotelForm
})

const params = ref({
  pagenum: 1,
  pagesize: 5,
  cate_id: '',
  state: ''
})
// 搜索逻辑
const onSearch = () => {
  // 因为v-model绑定了cate_id，所以请求后台可以成功返回对应数据
  params.value.pagenum = 1
}
// 重置逻辑
const onReset = () => {
  // 筛选条件
  params.value.pagenum = 1
  params.value.cate_id = ''
  params.value.state = ''
}
onMounted(() => {
  const today = formatTime(new Date()) // 假设 formatTime 函数返回 YYYY-MM-DD 格式的日期字符串
  const tomorrow = formatTime(new Date(Date.now() + 24 * 60 * 60 * 1000)) // 明日的日期

  formModel.value.datetimeRange = [today, tomorrow] // 将今日和明日日期设置为 datetimeRange 的初始值
})
const bookingRef = ref()
const onAddBooking = () => {
  bookingRef.value.open({})
}
</script>
<template>
  <div class="mycontainer">
    <!-- 表单区域 -->
    <el-form inline class="hotel-search" :model="formModel">
      <el-form-item label="住房时间" class="label-name">
        <el-date-picker
          v-model="formModel.datetimeRange"
          value-format="YYYY-MM-DD"
          type="daterange"
          range-separator="To"
          start-placeholder="入住日期"
          end-placeholder="退房日期"
          size="default"
        />
      </el-form-item>
      <el-form-item label="星级：" class="label-name">
        <!-- Vue3中 v-model是 :modelValue和@update:modelValue的简写 -->
        <el-select style="width: 150px" v-model="formModel.stars">
          <el-option label="五星级" value="五星级"></el-option>
          <el-option label="四星级" value="四星级"></el-option>
          <el-option label="三星级" value="三星级"></el-option>
          <el-option label="二星级" value="二星级"></el-option>
          <el-option label="一星级" value="一星级"></el-option>
          <el-option label="一星级以下" value="零星级"></el-option>
          <el-option label="乡村旅游" value="乡村旅游"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="酒店名：" class="label-name">
        <el-input
          style="width: 200px"
          :placeholder="`搜索酒店名...`"
          clearable
          v-model="formModel.hotel_name"
        />
      </el-form-item>
      <el-form-item label="">
        <el-button @click="onSearch" type="primary">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格区域 -->
    <div class="search-body">
      <ul class="hotel-list">
        <li class="hotel-item">
          <el-row class="hotel-row">
            <el-col :span="8" class="hotel-pic">
              <img
                src="https://img2.baidu.com/it/u=1007211387,345022702&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=800"
                alt=""
              />
              <span class="isopen">开放中</span>
            </el-col>
            <el-col :span="10" class="hotel-info">
              <span class="hotel-name">四姑娘山宾馆</span>
              <div class="hotel-address"><span>地址：</span>四姑娘镇镇上</div>
              <div class="hotel-desc">
                四姑娘山宾馆位于四姑娘镇镇上,距离海子沟,长坪沟距离双桥沟。酒店内绿化环境优美,酒店设施设备齐全,设有大型停车场。有独立的阳光茶,餐厅。房间95间,可同时容纳200人左右入住,餐厅可同时容纳100多人用餐。
              </div>
            </el-col>
            <el-col :span="6" class="hotel-price">
              <div class="hotel-star">
                <i class="iconfont icon-xingji"></i>五星级
              </div>
              <div class="hotel-lowPrice">270元</div>
              <el-button
                type="primary"
                plain
                @click="onAddBooking"
                class="hotel-reserve"
                >我要预定</el-button
              >
            </el-col>
          </el-row>
        </li>
        <li class="hotel-item">
          <el-row class="hotel-row">
            <el-col :span="8" class="hotel-pic">
              <img
                src="https://img2.baidu.com/it/u=1007211387,345022702&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=800"
                alt=""
              />
              <span class="isopen">开放中</span>
            </el-col>
            <el-col :span="10" class="hotel-info">
              <span class="hotel-name">四姑娘山宾馆</span>
              <div class="hotel-address"><span>地址：</span>四姑娘镇镇上</div>
              <div class="hotel-desc">
                四姑娘山宾馆位于四姑娘镇镇上,距离海子沟,长坪沟距离双桥沟。酒店内绿化环境优美,酒店设施设备齐全,设有大型停车场。有独立的阳光茶,餐厅。房间95间,可同时容纳200人左右入住,餐厅可同时容纳100多人用餐。
              </div>
            </el-col>
            <el-col :span="6" class="hotel-price">
              <div class="hotel-star">
                <i class="iconfont icon-xingji"></i>五星级
              </div>
              <div class="hotel-lowPrice">270元</div>
              <el-button
                type="primary"
                plain
                @click="onAddBooking"
                class="hotel-reserve"
                >我要预定</el-button
              >
            </el-col>
          </el-row>
        </li>
      </ul>
    </div>
    <!-- 抽屉区域 -->
    <hotel-booking ref="bookingRef"></hotel-booking>
  </div>
</template>

<style lang="scss">
.iconfont {
  font-size: 36px;
  display: block;
  color: #ffffff;
}
.hotel-search {
  display: flex;
  justify-content: space-evenly;
  .label-name .el-form-item__label {
    color: white;
  }
}
.hotel-list {
  border: 1px solid $titleColor;
  border-radius: 10px;
  margin-top: 10px;
  // 透明背景色
  // background-color: rgba(200, 196, 223, 0.4);
  // background-color: #ae5454;
  .hotel-item {
    border-bottom: 1px solid $titleColor;
    margin: 0 30px;
    transition: all 0.5s;
    &:hover {
      box-shadow:
        0 -5px 10px -5px rgba(255, 254, 215, 0.897),
        /* 上边框阴影 */ 0 5px 10px -5px rgba(255, 254, 215, 0.897); /* 下边框阴影 */
    }
    &:last-child {
      border-bottom: none;
    }

    .hotel-row {
      height: 250px;
      padding: 20px 0;
      .hotel-pic {
        // background-color: #4ea0df;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid #fff;
        img {
          width: 220px;
          max-height: 180px;
        }
        .isopen {
          width: 100px;
          height: 30px;
          text-align: center;
          color: #fff;
          line-height: 30px;
          border-radius: 8px;
        }
      }
      .hotel-info {
        // background-color: #e46741;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-right: 1px solid #fff;
        .hotel-name {
          font-size: 25px;
          color: $titleColor;
        }
        .hotel-address {
          span {
            color: $titleColor;
          }
          color: #fff;
        }
        .hotel-desc {
          color: #fff;
          line-height: 1.5;
        }
      }
      .hotel-price {
        // background-color: #d4249a;
        // position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        .hotel-star {
          // position: absolute;
          color: $titleColor;
          text-align: center;
          .iconfont {
            font-size: 36px;
            display: block;
            color: $titleColor;
          }
        }
        .hotel-lowPrice {
          color: #ff8581;
          font-size: 25px;
        }
        .hotel-reserve {
          color: #122a3c;
        }
      }
    }
  }
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
