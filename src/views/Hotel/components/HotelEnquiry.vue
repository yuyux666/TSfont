<script setup>
import { ref } from 'vue'

// 定义请求参数对象
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

const visibleDrawer = ref(false)
const onAddReserve = () => {
  visibleDrawer.value = true
}
const defaulrForm = {
  title: '',
  cate_id: '',
  cover_img: '',
  content: '',
  state: ''
}
const formModel = ref({
  ...defaulrForm
})
// const value1 = ref('')
const value2 = ref('')
</script>
<template>
  <div class="mycontainer">
    <!-- 表单区域 -->
    <el-form inline class="hotel-search">
      <el-form-item label="星级：">
        <!-- Vue3中 v-model是 :modelValue和@update:modelValue的简写 -->
        <el-select style="width: 150px">
          <el-option label="五星级" value="五星级"></el-option>
          <el-option label="四星级" value="四星级"></el-option>
          <el-option label="三星级" value="三星级"></el-option>
          <el-option label="二星级" value="二星级"></el-option>
          <el-option label="一星级" value="一星级"></el-option>
          <el-option label="一星级以下" value="零星级"></el-option>
          <el-option label="乡村旅游" value="乡村旅游"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="酒店名：">
        <el-input
          v-model="input"
          style="width: 240px"
          :placeholder="`搜索酒店名...`"
          clearable
          @clear="clearInput"
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
              <div class="hotel-star">五星级</div>
              <div class="hotel-lowPrice">270元</div>
              <el-button
                type="primary"
                @click="onAddReserve"
                class="hotel-reserve"
                >我要预定</el-button
              >
            </el-col>
          </el-row>
        </li>
      </ul>
    </div>
    <!-- 抽屉区域 -->
    <el-drawer
      v-model="visibleDrawer"
      title="酒店预订"
      direction="rtl"
      size="50%"
    >
      <!-- 酒店预订表单 -->
      <el-form label-width="100px">
        <el-form :model="formModel" ref="formRef" label-width="100px">
          <el-form-item label="酒店名" prop="title">
            <el-input
              v-model="formModel.title"
              placeholder="四姑娘山宾馆"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item label="房间及住客" prop="cate_id">
            <el-select>
              <el-option label="房间" value="五星级"></el-option>
              <el-option label="人数" value="四星级"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="房型" prop="cate_id">
            <el-select>
              <el-option label="大床房" value="大床房"></el-option>
              <el-option label="双床房" value="双床房"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="入住及退房时间" prop="cover_img">
            <div class="block">
              <el-date-picker
                v-model="value2"
                type="datetimerange"
                start-placeholder="Start date"
                end-placeholder="End date"
                format="YYYY-MM-DD HH:mm:ss"
                date-format="YYYY/MM/DD ddd"
                time-format="A hh:mm:ss"
              />
            </div>
          </el-form-item>

          <el-form-item label="预定人姓名" prop="cover_img">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="预定人电话" prop="cover_img">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <span>共XX元</span>
            <el-button @click="onPublish('草稿')" type="info"
              >直接支付</el-button
            >
          </el-form-item>
        </el-form>
      </el-form>
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
.mycontainer ::v-deep .el-form-item__label {
  color: #fff;
}
.hotel-search {
  display: flex;
  justify-content: end;
}
.hotel-list {
  border: 1px solid $xtxColor;
  border-radius: 10px;
  margin-top: 10px;
  // 透明背景色
  background-color: rgba(116, 101, 199, 0.4);
  // background-color: #ae5454;
  .hotel-item {
    border-bottom: 1px solid #fffed7;
    margin: 0 30px;
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
          border: 1px solid rgb(145, 255, 211);
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
          color: #fffed7;
        }
        .hotel-address {
          span {
            color: #fffed7;
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
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 20px;
        .hotel-star {
          width: 100px;
          height: 30px;
          border: 1px solid rgb(145, 255, 211);
          text-align: center;
          color: #fff;
          line-height: 30px;
          border-radius: 8px;
        }
        .hotel-lowPrice {
          color: #bd0000;
          font-size: 25px;
        }
        .hotel-reserve {
          color: #fffed7;
        }
      }
    }
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
