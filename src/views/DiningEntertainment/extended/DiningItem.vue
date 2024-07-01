<script setup>
defineProps({
  restaurant: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="restaurant-item">
    <img :src="restaurant.promotionalImage" alt="" />
    <!-- <img v-img-lazy="restaurant.promotionalImage" alt="" /> -->
    <p class="name ellipsis">{{ restaurant.storeName }}</p>

    <div class="content">
      <p class="address ellipsis">地址：{{ restaurant.storeLocation }}</p>
      <span class="price">平均消费：{{ restaurant.avgConsumption }}元</span>
      <p class="desc ellipsis">{{ restaurant.description }}</p>
      <span class="time">
        <p>
          营业时间{{ restaurant.opentime }}~{{ restaurant.endtime }} |
          {{ restaurant.isopen === 1 ? '开放中' : '暂停营业' }}
        </p>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.restaurant-item {
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
    width: 280px;
    height: 180px;
    border-radius: 10px;
    border: 1px solid rgb(124, 209, 230);
  }
  .name {
    padding-top: 10px;
    font-size: 20px;
    color: rgb(124, 209, 230);
  }
  .content {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 50px;
    justify-content: space-between;
    p {
      padding-top: 10px;
    }

    .address {
      // font-size: 15px;
      color: #ffffff;
    }
    .desc {
      display: block;
      color: #ffffff;
      display: -webkit-box;
      min-height: 50px;
      max-width: 250px;
      -webkit-line-clamp: 2; //示例值，表示最多显示3行
      -webkit-box-orient: vertical;
    }
    .price {
      padding-top: 4px;
      display: block;
      color: $priceColor;
      // line-height: 100%;
      height: 30px;
      font-size: 20px;
    }
  }
  .time {
    color: rgb(124, 209, 230);
  }
  .isopen {
    color: #fff;
  }
}
</style>
