<script setup>
import { ref } from 'vue'
import { getEmergencyList } from '@/apis/emergency'
const dialogFormVisible = ref(false)
// 分页逻辑
const articleList = ref([])
const total = ref(0)
// 定义请求参数对象
const params = ref({
  page: 1,
  pageSize: 5
})
// 获取应急信息列表
const getEmergency = async () => {
  // 接口请求
  const res = await getEmergencyList(params.value)
  console.log(res.data)
  // 更新数据
  articleList.value = res.data.data.records
  total.value = res.data.data.total
}
getEmergency()

// 获取点击文章内容
const selectedArticle = ref(null)
const showArticleContent = (item) => {
  selectedArticle.value = item
  dialogFormVisible.value = true
}
// 处理分页逻辑
const onSizeChange = (size) => {
  console.log(size)
  // 重新更改每页条数时
  // 重新第一页渲染
  params.value.page = 1
  params.value.pageSize = size
  getEmergency()
}
const onCurrentChange = (page) => {
  // 更新当前页
  params.value.page = page
  getEmergency()
}
</script>
<template>
  <div class="mycontainer">
    <el-card style="max-width: 100%" class="card">
      <template #header>
        <div class="card-header">
          <span>应急公告</span>
        </div>
      </template>
      <ul class="emergency-list">
        <li class="emergency-item" v-for="item in articleList" :key="item.id">
          <el-link @click="showArticleContent(item)">{{ item.title }}</el-link>
          <div class="pubilsh">
            <span>发布时间：{{ item.releaseDate }} </span>|<span>
              发布人：XXX</span
            >
          </div>
        </li>
      </ul>
      <el-dialog
        v-model="dialogFormVisible"
        style="width: 800px; min-height: 600px"
      >
        <div class="publish-header">{{ selectedArticle.title }}</div>
        <div class="publish-information">
          <span>发布时间：{{ selectedArticle.releaseDate }} |</span>
          <span> 发布人：XXX</span>
        </div>
        <p class="publish-content">
          {{ selectedArticle.content }}
        </p>
        <!-- <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">
              Confirm
            </el-button>
          </div>
        </template> -->
      </el-dialog>

      <!-- 分页 -->
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
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
:deep() {
  .el-pagination__total {
    color: #fff;
  }
  .el-pagination__jump {
    color: #fff;
  }
}
.card {
  border: 1px solid $xtxColor;
  border-radius: 10px;
  margin-top: 10px;
  // 透明背景色
  background-color: rgba(200, 196, 223, 0.4);
  color: #fffed7;
  font-weight: 500;
  font-size: 30px;
  text-align: center;
}
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
.emergency-list {
  // background: #000;
  display: flex;

  flex-direction: column;
  // justify-content: space-between;
  // align-items: center;
  .emergency-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px dotted white;
    color: white;
    font-size: 20px;
    font-weight: normal;
    .el-link {
      margin-right: 8px;
      color: white;
      font-size: 20px;
      font-weight: normal;
    }
    .el-link .el-icon--right.el-icon {
      vertical-align: text-bottom;
    }
  }
}
.publish-header {
  font-size: 30px;
}
.publish-information {
  margin-top: 10px;
  color: gray;
  border-bottom: 1px grey solid;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.publish-content {
  text-align: start;
  font-size: 20px;
  margin: 10px;
}
</style>
