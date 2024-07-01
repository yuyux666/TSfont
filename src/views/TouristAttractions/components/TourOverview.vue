<script setup>
import { SceneListService } from '@/apis/scene'
import SceneItem from '@/views/Common/SceneItem.vue'
import ScenePanel from '@/views/Common/ScenePanel.vue'
import SearchPanel from '@/views/Common/SearchPanel.vue'

import { ref, onMounted } from 'vue'

const attractions = ref([
  {
    id: 1,
    title: '双桥沟',
    subtitle: '很美',
    price: '100',
    scenes: []
  },
  {
    id: 2,
    title: '长坪沟',
    subtitle: '最美',
    price: '100',
    scenes: []
  },
  {
    id: 3,
    title: '海子沟',
    subtitle: '超美',
    price: '100',
    scenes: [
      // {
      //   id: 3001,
      //   name: '测试商品',
      //   altitude: '100',
      //   picture:
      //     'https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067',
      //   desc: '测试商品描述'
      // }
    ]
  }
])
const ShuangqiaoList = ref([])
const ChangpingList = ref([])
const HaiziList = ref([])
const getShuangqiaoList = async () => {
  const res1 = await SceneListService(1)
  const res2 = await SceneListService(2)
  const res3 = await SceneListService(3)
  ChangpingList.value = res1.data.data
  ShuangqiaoList.value = res2.data.data
  HaiziList.value = res3.data.data
  attractions.value[0].scenes = ShuangqiaoList.value
  attractions.value[1].scenes = ChangpingList.value
  attractions.value[2].scenes = HaiziList.value
}
onMounted(() => {
  getShuangqiaoList()
})
</script>
<template>
  <div class="mycontainer">
    <div class="search">
      <SearchPanel title="景点"> </SearchPanel>
    </div>
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
.mycontainer {
  .search {
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
}
</style>
