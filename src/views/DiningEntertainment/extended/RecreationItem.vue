<script setup>
defineProps({
  entertainment: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="entertainment-item">
    <img :src="entertainment.pictureUrl" alt="" />
    <p class="name ellipsis">{{ entertainment.projectName }}</p>

    <div class="content">
      <p class="address ellipsis">地址：{{ entertainment.project_location }}</p>
      <p class="address ellipsis">描述：{{ entertainment.description }}</p>
      <p class="avg_consumption ellipsis">
        平均消费：{{ entertainment.avgConsumption }}元
      </p>
      <span class="price">门票价格：{{ entertainment.ticketPrice }}元</span>
      <span class="time">
        <p>
          营业时间{{ entertainment.entertainment_start }}~{{
            entertainment.entertainment_end
          }}
          | 营业中
        </p>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.entertainment-item {
  display: block;
  // border: 1px solid aqua;

  border-radius: 10px;
  width: 350px;
  padding: 10px 10px;
  text-align: center;
  transition: all 0.5s;
  height: 380px;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgba(255, 254, 215, 0.897);
  }

  img {
    width: 250px;
    height: 170px;
    border-radius: 10px;
    border: 1px solid rgb(124, 209, 230);
  }
  .name {
    padding-top: 2px;
    font-size: 20px;
    color: rgb(124, 209, 230);
  }
  .content {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 80px;
    p {
      padding-top: 10px;
    }
    .type {
      color: #fff;
    }
    .avg_consumption {
      color: #fff;
    }

    .address {
      // font-size: 15px;
      color: #ffffff;
    }
    .desc {
      display: block;
      color: #ffffff;
      display: -webkit-box;
      min-height: 60px;
      -webkit-line-clamp: 2; //示例值，表示最多显示3行
      -webkit-box-orient: vertical;
    }
    .price {
      padding-top: 5px;
      display: block;
      color: $priceColor;
      // line-height: 100%;
      height: 30px;
      font-size: 20px;
    }
    .time {
      color: #fff;
    }
    .isopen {
      color: #fff;
    }
  }
}
</style>
