<script setup>
import SceneItem from '@/views/Common/SceneItem.vue'
import ScenePanel from '@/views/Common/ScenePanel.vue'
import { ref } from 'vue'

const attractions = ref([
  {
    id: 1,
    title: '双桥沟',
    subtitle: '很美',
    price: '100',
    scenes: [
      {
        id: 1001,
        name: '测试景点',
        altitude: '3000',
        picture:
          'https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067',
        desc: '测试商品描述'
      },
      {
        id: 1002,
        name: '测试景点',
        altitude: '1100',
        picture:
          'https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067',
        desc: '测试商品描述'
      },
      {
        id: 1003,
        name: '测试景点',
        altitude: '1200',
        picture:
          'https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067',
        desc: '测试商品描述'
      },
      {
        id: 1004,
        name: '测试景点',
        altitude: '1400',
        picture:
          'https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067',
        desc: '测试商品描述'
      },
      {
        id: 1005,
        name: '测试景点',
        altitude: '1500',
        picture:
          'https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067',
        desc: '测试商品描述'
      },
      {
        id: 1006,
        name: '测试景点',
        altitude: '1080',
        picture:
          'https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067',
        desc: '测试商品描述'
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

<style scoped lang="scss">
@import '../../../assets/scene.scss';
</style>
