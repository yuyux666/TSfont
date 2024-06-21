<script setup></script>
<template>
  <div class="mycontainer">
    <div class="banner">
      <p class="text-center demonstration"></p>
      <el-carousel
        height="400px"
        direction="vertical"
        type="card"
        :autoplay="false"
      >
        <el-carousel-item>
          <h2>安全须知</h2>
          <h3 text="2xl" justify="center">
            <p>
              1.高山探险是一项危险的运动，有可能会给自己及他人带来生命上的危险，
              活动参与者必须对此有清醒地认识。参加人员必须提供健康证明或体检报告，
              购买人身意外保险，有高血压及，白脑血管疾病请勿参加。
              2.高海拔地区徒步和攀爬都会比低海拔地区更加艰难，切忌心浮气躁、用力过猛。走路和做事都要慢慢来，讲究节奏，多加休息。
              特别是离开营地向上攀爬时，应该一步一挪，不宜脚步过急。视个人情况，每上升一段距离，稍作休息，调整呼吸。
              高海拔地区氧气稀薄，保持呼吸的通畅和效率特别重要，尽量保持有节奏的深呼吸，摄取足够氧气来缓解高山反应和疲劳感。
            </p>
          </h3>
        </el-carousel-item>
        <el-carousel-item>
          <h2>温馨提示</h2>
          <h3 text="2xl" justify="center">
            <p>
              1.参加人员应自觉服从领队的管理，自觉分担公用装备，有吃苦耐劳的精神。
              2.因天气、安全等不可抗拒因素影响，登山行程随时可能发生变化，要有很强的团队意识，服从团队安排。
              3.山上景色非常美，一定要带个好相机。但是考虑到徒步和登山的艰苦，为了尽量减轻负担，建议登山时携带轻便相机。
            </p>
          </h3>
        </el-carousel-item>
        <el-carousel-item>
          <h2>适应高原反应的方法</h2>
          <h3 text="2xl" justify="center">
            <p>
              每个人都会有不同程度的高山反应，只是表现形式不同，适应程度不同而已。低海拔地区的人初次来到高海拔地区一定会有高反。注意以下适应高反的事项：
              1&#41;必要的适应性行走和活动 2&#41;一定要有充足的睡眠，
              3&#41;多喝热水。尤其是刚扎营后，每人应尽快喝1一2升热水。高山上禁喝冷水。4&#41;在营地多吃食物，吃饱吃好。
              5&#41;冲顶时携带热水和糖。
              6&#41;冲顶时不是冲上去的，而是挪上去的，不要急，慢慢来。
              7&#41;注意保暖。
            </p>
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <div class="publish-header">注意事项</div>

      <p class="publish-content">
        1. 交通方式：<br />
        四姑娘山可通过飞机、火车/高铁或自驾等方式前往。如果选择自驾，需要注意沿途会经过山路，花费一些时间。<br /><br />
        2. 安全与健康：<br />
        四姑娘山属于高海拔地区，可能会出现高山反应，如头痛、气喘等。因此，不宜剧烈运动，并应少饮酒，多食蔬菜和水果。<br />
        年老体弱者，有高血压、冠心病等疾病的人不宜前往。<br />
        景区内昼夜温差大，需带足保暖防寒衣物，并备常用药品。<br />
        夏季多雨，建议备雨伞或雨衣。<br /><br />
        3. 环保与行为准则：<br />
        爱护景区的生态环境，不随意丢弃垃圾，并注意烟火。<br />
        骑马时间较长时，应挑选合适的马匹及马鞍，注意安全。<br /><br />
        4. 装备建议：<br />
        景区日照强，紫外线强，需戴太阳帽，涂抹防晒霜。<br />
        景区内漂流等户外活动需要相应的装备，如合适的鞋子和服装。<br /><br />
        5. 其他注意事项：<br />
        景区内的氧气瓶价格较高，建议提前自行准备。<br />
        节假日自驾去的朋友一定要提前预定住宿，并建议安排两至三天的行程以避免疲劳驾驶。<br />
        爱好摄影、登山的朋友，请带好有关器材，并注意户外保暖。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mycontainer {
  .banner {
    .el-carousel__item {
      border-radius: 20px;
      padding: 0 20px;
      border: 1px solid $xtxColor;
      margin-top: 10px;
      background-color: #99a9bf;
    }

    .el-carousel__item h2 {
      color: rgb(11, 52, 93);
      font-weight: 800;
    }

    .el-carousel__item h3 p {
      text-align: start;
      font-size: 20px;
      color: rgb(11, 52, 93);
      font-weight: 500;
    }
  }
  .content {
    margin-top: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;

    .publish-header {
      font-size: 30px;
      margin: 20px auto;
    }

    .publish-content {
      text-align: start;
      font-size: 20px;
      margin: 10px;
    }
  }
}
</style>
