<script setup>
import ScenePanel from '@/views/Common/ScenePanel.vue'
</script>
<template>
  <div class="mycontainer">
    <ScenePanel title="To 四姑娘山" subtitle="自驾/公共交通">
      <div class="to-content">
        <img src="@/assets/images/toGirlsRoute.png" alt="" />
        <div class="to-routeList">
          <ul>
            <li>
              巴朗山线
              <br />
              成都 -->
              成灌高速-->都汶高速映秀-->卧龙镇-->巴郎山隧道-->四姑娘山镇
            </li>
            <li>
              大熊猫环线
              <br />
              成都-->成雅高速-->雅安-->宝兴-->四姑娘山镇
            </li>
            <li>
              藏羌风情线
              <br />
              成都-->成灌高速-->都汶高速-->汶川-->理县-->卓克基-->两河-->小金-->四姑娘山镇
            </li>
            <li>
              经典川西环线
              <br />成都 --> 成雅高速-->雅安-->
              泸定-->新都桥-->塔公-->八美-->丹巴-->小金-->四姑娘山镇
            </li>
          </ul>
        </div>
      </div>
    </ScenePanel>
    <ScenePanel title="In 四姑娘山" subtitle="景区导览路线">
      <div class="to-content">
        <img src="@/assets/images/innerGirlsRoute.jpg" alt="" />
        <div class="to-routeList">
          <ul>
            <li>
              双桥沟路线
              <br />
              乘坐景区观光车直达终点站——红杉林 返程时可乘观光车逐个游览
            </li>
            <li>
              长坪沟路线
              <br />
              长坪沟游人中心检票进入-->乘坐景区观光车抵达喇嘛寺-->开始徒步之旅
            </li>
            <li>
              海子沟路线
              <br />
              海子沟游人中心检票进入 徒步或骑马游览
            </li>
          </ul>
        </div>
      </div>
    </ScenePanel>
  </div>
</template>

<style lang="scss" scoped>
.mycontainer {
  .to-content {
    display: flex;
    flex-direction: row;
    img {
      width: 500px;
    }
    .to-routeList {
      color: #fff;
      font-size: 20px;
      li {
        margin: 50px;
      }
    }
  }
}
</style>
