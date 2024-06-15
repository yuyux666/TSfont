<script setup>
import SceneItem from '@/views/Common/SceneItem.vue'
import ScenePanel from '@/views/Common/ScenePanel.vue'
import { ref } from 'vue'

const attractions = ref([
  {
    id: 2,
    title: '长坪沟',
    subtitle: '最美',
    price: '100',
    scenes: [
      {
        id: 2001,
        name: '枯树滩',
        altitude: '3470',
        picture:
          'https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067',
        desc: '相传枯树滩是阿巴朗依与墨尔多家族交战的遗迹，因地质灾害导致河流改道，淹没大片原始树木，枯死的沙棘、杂木钙化后留下一片树桩置于河滩，故称“枯树滩”'
      }
    ]
  }
])
</script>
<template>
  <div class="mycontainer">
    <div class="Tour-scenes">
      <ScenePanel
        :title="item.title"
        :subtitle="item.subtitle"
        v-for="item in attractions"
        :key="item.id"
      >
        <div class="box">
          <ul class="scenes-list">
            <li v-for="scene in item.scenes" :key="scene.id">
              <SceneItem :scene="scene"></SceneItem>
            </li>
          </ul>
        </div>
      </ScenePanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/scene.scss';
</style>
