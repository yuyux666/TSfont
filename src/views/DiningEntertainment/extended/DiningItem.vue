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
    <img v-img-lazy="restaurant.picture" alt="" />
    <p class="name ellipsis">{{ restaurant.store_name }}</p>
    <p class="address ellipsis">地址：{{ restaurant.tore_location }}</p>
    <p class="desc ellipsis">{{ restaurant.description }}</p>
    <span class="price">平均消费：{{ restaurant.avg_consumption }}元</span>
    <span class="time">
      <p>营业时间{{ restaurant.opentime }}~{{ restaurant.endtime }} | 营业中</p>
    </span>
  </div>
</template>

<style scoped lang="scss">
.restaurant-item {
  display: block;
  background-color: rgba(241, 243, 249, 0.756);
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
    border: 1px solid #fffed7;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 20px;
    color: #ffffff;
  }
  .address {
    font-size: 15px;
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
    display: block;
    color: #eb6e21;
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
</style>
