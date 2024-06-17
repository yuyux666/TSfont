<script setup>
import { ref } from 'vue'
const dialogFormVisible = ref(false)
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
        <li class="emergency-item" v-for="item in 5" :key="item">
          <el-link @click="dialogFormVisible = true">应急文章标题1</el-link>
          <div class="pubilsh">
            <span>发布时间：xx月xx日 </span>|<span> 发布人：XXX</span>
          </div>
        </li>
      </ul>
      <el-dialog v-model="dialogFormVisible" width="800">
        <div class="publish-header">应急文章标题1</div>
        <div class="publish-information">
          <span>发布时间：xx月xx日 |</span>
          <span> 发布人：XXX</span>
        </div>
        <p class="publish-content">
          5月19日，为庆祝第十四个中国旅游日，四姑娘山管理局团委以“永远跟党走，奋进新征程”为主题开展了系列活动。活动通过诗歌朗诵、歌舞演绎、知识抢答、旅游志愿服务宣誓等形式，更为生动的引导广大团员青年的爱国意识，作为旅游人的行业觉悟，自觉从党的重大成就和历史经验中汲取力量、增长智慧、坚定信心，引导广大团员青年亮身份、做表率、当先锋，以奋斗的姿态迎接新征程，在四姑娘山景区上下营造昂扬向上、团结奋进的良好氛围，充分展现青年们的爱党爱国情怀和奋发向上的精神风貌。同时开展了四姑娘山景区志愿者服务启动仪式，积极引导青年团员争做文明旅游志愿者，为四姑娘山景区旅游发展做出贡献，努力服务好每一位游客。
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
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
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
