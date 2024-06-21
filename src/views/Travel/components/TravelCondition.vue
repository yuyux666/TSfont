<script setup>
import ScenePanel from '@/views/Common/ScenePanel.vue'
// import { ref } from 'vue'
// const percentage = ref(20)
// const customColor = ref('#409eff')

const customColors = [
  { color: '#16ce95', percentage: 20 },
  { color: '#24acf2', percentage: 40 },
  { color: '#f79d06', percentage: 60 },
  { color: '#d80304', percentage: 80 },
  { color: '#8f0021', percentage: 100 }
]
// const customColorMethod = (percentage) => {
//   if (percentage < 30) {
//     return '#909399'
//   }
//   if (percentage < 70) {
//     return '#e6a23c'
//   }
//   return '#67c23a'
// }
// const increase = () => {
//   percentage.value += 10
//   if (percentage.value > 100) {
//     percentage.value = 100
//   }
// }
// const decrease = () => {
//   percentage.value -= 10
//   if (percentage.value < 0) {
//     percentage.value = 0
//   }
// }
</script>
<template>
  <div class="mycontainer">
    <ScenePanel
      title="中国熊猫大道（四姑娘山镇）路况"
      subtitle="四姑娘山镇--双桥沟景区"
    >
      <div class="demo-progress">
        <h1 style="color: #fff">拥堵程度</h1>
        <el-progress percentage="80" :color="customColors" />
      </div>
    </ScenePanel>
    <ScenePanel title="长吉路路况" subtitle="四姑娘山镇--长坪沟景区"
      ><div class="demo-progress">
        <h1 style="color: #fff">拥堵程度</h1>
        <el-progress percentage="50" :color="customColors" />
      </div>
      <!-- <div>
        <el-button-group>
          <el-button :icon="Minus" @click="decrease" />
          <el-button :icon="Plus" @click="increase" />
        </el-button-group></div -->
    </ScenePanel>
    <ScenePanel title="巴郎山隧道路况" subtitle="成都--四姑娘山"
      ><div class="demo-progress">
        <h1 style="color: #fff">拥堵程度</h1>
        <el-progress percentage="10" :color="customColors" />
      </div>
      <!-- <div>
        <el-button-group>
          <el-button :icon="Minus" @click="decrease" />
          <el-button :icon="Plus" @click="increase" />
        </el-button-group></div -->
    </ScenePanel>
  </div>
</template>

<style lang="scss" scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
