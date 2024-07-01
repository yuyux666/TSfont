<script setup>
import { SceneListService } from '@/apis/scene'
import SceneItem from '@/views/Common/SceneItem.vue'
import ScenePanel from '@/views/Common/ScenePanel.vue'
import { ref, onMounted } from 'vue'

const attractions = ref([
  {
    id: 2,
    title: '长坪沟',
    subtitle: '最美',
    price: '100',
    scenes: []
  }
])
const ChangpingList = ref([])
const getShuangqiaoList = async () => {
  const res1 = await SceneListService(1)
  ChangpingList.value = res1.data.data

  attractions.value[0].scenes = ChangpingList.value
}
onMounted(() => {
  getShuangqiaoList()
})
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
