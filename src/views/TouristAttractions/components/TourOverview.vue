s
<script setup>
import SceneItem from '@/views/Common/SceneItem.vue'
import ScenePanel from '@/views/Common/ScenePanel.vue'
import { Search } from '@element-plus/icons-vue'
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
      },
      {
        id: 1007,
        name: '枯树滩',
        altitude: '3470',
        picture:
          'https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067',
        desc: '相传枯树滩是阿巴朗依与墨尔多家族交战的遗迹，因地质灾害导致河流改道，淹没大片原始树木，枯死的沙棘、杂木钙化后留下一片树桩置于河滩，故称“枯树滩”'
      }
    ]
  },
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
  },
  {
    id: 3,
    title: '海子沟',
    subtitle: '超美',
    price: '100',
    scenes: [
      {
        id: 3001,
        name: '测试商品',
        altitude: '100',
        picture:
          'https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067',
        desc: '测试商品描述'
      }
    ]
  }
])
const input = ref('')

// 查询景点
const clearInput = () => {
  searchStatus.value = false
  console.log('clear')
}
const searchStatus = ref(false)
const search = () => {
  if (input.value !== '') {
    searchStatus.value = true
    console.log('search')
  }
}
</script>
<template>
  <div class="mycontainer">
    <div class="search">
      <div class="search-header">
        <el-input
          v-model="input"
          style="width: 240px"
          placeholder="搜索景点..."
          clearable
          @clear="clearInput"
        />
        <el-button type="primary" :icon="Search" @click="search"></el-button>
      </div>
      <div class="search-body" :class="{ 'search-body-show': searchStatus }">
        <el-row class="search-page">
          <el-col :span="8" class="left">
            <span class="Big-title">双桥沟</span>
            <span class="Big-price">门票价格：</span>
            <span class="Big-time">开放时间：8:00-15:00</span>
          </el-col>
          <el-col :span="16" class="right">
            <span class="small-title">人参果坪</span>
            <img
              src="https://img1.baidu.com/it/u=4196911048,1331054262&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067"
              alt=""
            />
            <span class="small-info">
              <p class="small-desc">好美很推荐</p>
              <p class="small-altitude">海拔：3000</p>
            </span>
          </el-col>
        </el-row>
      </div>
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
    overflow: hidden;
    min-height: 40px;
    .search-header {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    .search-body {
      margin-top: -400px;
      height: 365px;
      background-color: transparent;
      border: 1px solid aqua;
      border-radius: 20px;
      opacity: 0;
      transition: all 0.6s ease-in-out;
      &.search-body-show {
        margin-top: 50px;
        opacity: 1;
      }
      .search-page {
        height: 100%;
        padding: 20px;

        .left,
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
          background-color: #fff;
          height: 323px;

          .Big-title {
            font-size: 20px;
            color: #ec2323;
          }

          .Big-price,
          .Big-time {
            font-size: 16px;
            color: #cc0404;
          }
        }

        .right {
          height: 323px;
          background-color: #891b1b;
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

          .small-desc {
            font-size: 16px;
            color: #ff0a0a;
            margin-bottom: 5px;
          }

          .small-altitude {
            font-size: 14px;
            color: #b41b1b;
          }
        }
      }
    }
  }
}
</style>
