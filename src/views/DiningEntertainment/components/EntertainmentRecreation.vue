<script setup>
import ScenePanel from '@/views/Common/ScenePanel.vue'
import RecreationItem from '../extended/RecreationItem.vue'

import { ref } from 'vue'
import { RecreationProjectListService } from '@/apis/entertainment'
// const value = ref([20, 100])

const entertainments = ref([])
const total = ref(0)
// 定义请求参数对象
const params = ref({
  page: 1,
  pageSize: 5
})
const searchForm = ref({
  name: '',
  ...params.value
})

const getEntertainmentList = async (data) => {
  console.log(searchForm.value)
  const res = await RecreationProjectListService(data)
  console.log(res)
  entertainments.value = res.data.data.records
  total.value = res.data.data.total
}
getEntertainmentList()
// 处理分页逻辑
const onSizeChange = (size) => {
  console.log(size)
  // 重新更改每页条数时
  // 重新第一页渲染
  params.value.page = 1
  params.value.pageSize = size
  getEntertainmentList(searchForm.value)
}
const onCurrentChange = (page) => {
  // 更新当前页
  params.value.page = page
  getEntertainmentList(searchForm.value)
}
const onSearch = () => {
  console.log(111)
  console.log(searchForm)
  params.value.page = 1
  getEntertainmentList(searchForm.value)
  showSuccessToast({
    message: '搜索成功！',
    style: {
      backgroundColor: 'rgba(255, 254, 215, 0.897)',
      color: '#666'
    }
  })
}
const onReset = () => {
  params.value.page = 1
  searchForm.value = {
    name: '',
    avgPrice: '',
    ...params.value
  }
  showSuccessToast({
    message: '重置成功！',
    style: {
      backgroundColor: 'rgba(255, 254, 215, 0.897)',
      color: '#666'
    }
  })
  getEntertainmentList(searchForm.value)
}
</script>
<template>
  <div class="mycontainer">
    <div class="search">
      <el-form inline class="dining-search" :model="searchForm">
        <el-form-item label="娱乐项目名：">
          <el-input
            v-model="searchForm.name"
            style="width: 240px"
            :placeholder="`搜索娱乐项目...`"
            clearable
            @clear="clearInput"
          />
        </el-form-item>
        <el-form-item label="">
          <el-button @click="onSearch" type="primary">搜索</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="entertainmentList">
      <ScenePanel title="娱乐项目列表">
        <div class="box">
          <ul class="scenes-list">
            <li v-for="entertainment in entertainments" :key="entertainment.id">
              <RecreationItem :entertainment="entertainment"></RecreationItem>
            </li>
          </ul>
        </div>
      </ScenePanel>
      <el-pagination
        v-model:current-page="params.page"
        v-model:page-size="params.pageSize"
        :page-sizes="[2, 3, 5, 10]"
        :background="true"
        layout="jumper, total, sizes, prev, pager, next"
        :total="total"
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
        style="margin-top: 50px; justify-content: flex-end"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mycontainer ::v-deep .el-form-item__label {
  color: #fff;
}
.mycontainer {
  .search {
    display: flex;
    justify-content: end;
    .dining-search {
      .slider-demo-block {
        max-width: 600px;
        display: flex;
        align-items: center;
      }
      .slider-demo-block .el-slider {
        margin-top: 0;
        margin-left: 12px;
      }
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
    .search-page {
      height: 100%;
      padding: 20px;

      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 10px;

        // 嵌套子元素样式
        & > span {
          margin-bottom: 5px; // 除非最后一个子元素
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .left {
        height: 323px;
        width: 100%;
        border-right: 1px solid #fffed7;
        display: flex;
        justify-content: space-between;
        padding: 30px;
        flex-direction: column;

        .Big-title {
          font-size: 40px;
          color: $xtxColor;
        }

        .Big-price,
        .Big-time {
          font-size: 16px;
          color: #ffffff;
        }
      }

      .right {
        height: 323px;
        display: flex;
        flex-direction: row;
        align-items: flex-center; // 从顶部开始布局（默认）
        justify-content: flex-start; // 内容从顶部开始（默认）
        .small-title {
          padding: 30px;
          margin: 0 20px;
          // 设置文字竖着显示
          writing-mode: vertical-rl; // 从右到左的垂直书写
          // 或者使用
          font-size: 30px; // 根据需要调整字体大小
          // 设置文字颜色
          color: #ffe3e3;

          // 可能需要的其他样式，如行高或文本对齐方式
          line-height: 1.5; // 根据需要调整行高
          text-align: center; // 如果需要水平居中对齐
        }

        img {
          width: 280px;
          height: auto;
          border-radius: 20px;
        }
        .small-info {
          display: flex;

          height: 100%;
          width: 300px;
          flex-direction: column;
          justify-content: space-between; /* 垂直方向上空间分布，使得子元素分别位于顶部和底部 */
          padding: 10px;
          .small-desc {
            margin-top: 30px;
            padding: 10px;
            font-size: 16px;
            color: #ffecec;
            line-height: 2;
          }

          .small-altitude {
            // margin-top: auto;
            padding: 10px;
            border: 1px solid #fffed7;
            width: 100px;
            border-radius: 10px;
            font-size: 14px;
            color: #f7b62a;
            margin: 0 auto 10px;
          }
        }
      }
    }
  }
  .entertainmentList {
    background-color: transparent;
    margin-top: 20px;
    .sub {
      margin-bottom: 2px;

      a {
        padding: 2px 12px;
        font-size: 16px;
        border-radius: 4px;

        &:hover {
          background: $xtxColor;
          color: #fff;
        }

        &:last-child {
          margin-right: 80px;
        }
      }
    }

    .box {
      .cover {
        width: 240px;
        height: 610px;
        margin-right: 10px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        .label {
          width: 188px;
          height: 66px;
          display: flex;
          font-size: 18px;
          color: #fff;
          line-height: 66px;
          font-weight: normal;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate3d(0, -50%, 0);

          span {
            text-align: center;

            &:first-child {
              width: 76px;
              background: rgba(0, 0, 0, 0.9);
            }

            &:last-child {
              flex: 1;
              background: rgba(0, 0, 0, 0.7);
            }
          }
        }
      }

      .scenes-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          margin-right: 10px;
          margin-bottom: 40px;

          &:nth-last-child(-n + 3) {
            margin-bottom: 0;
          }

          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
