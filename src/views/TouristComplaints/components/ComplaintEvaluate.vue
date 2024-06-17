<script lang="ts" setup>
import { ref } from 'vue'
import ScenePanel from '@/views/Common/ScenePanel.vue'
const activeNames = ref(['1'])
const value2 = ref(0)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>
<template>
  <div class="mycontainer">
    <ScenePanel title="投诉评价列表">
      <div class="demo-collapse">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="投诉标题1" name="1">
            <div class="demo-rate-block">
              <span class="demonstration">投诉评价</span>
              <el-rate v-model="value2" :colors="colors" />
            </div>
          </el-collapse-item>

          <el-collapse-item title="投诉标题2" name="2">
            <div class="demo-rate-block">
              <span class="demonstration">投诉评价</span>
              <el-rate v-model="value2" :colors="colors" />
            </div>
          </el-collapse-item>
          <el-collapse-item title="投诉标题3" name="3">
            <div class="demo-rate-block">
              <span class="demonstration">投诉评价</span>
              <el-rate v-model="value2" :colors="colors" />
            </div>
          </el-collapse-item>
          <el-collapse-item title="投诉标题4" name="4">
            <div class="demo-rate-block">
              <span class="demonstration">投诉评价</span>
              <el-rate v-model="value2" :colors="colors" />
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </ScenePanel>
  </div>
</template>

<style lang="scss" scoped>
.mycontainer {
  width: 100%;
  .demo-collapse {
    width: 80%;
  }
  .demo-rate-block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
  }
  .demo-rate-block:last-child {
    border-right: none;
  }
  .demo-rate-block .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>
