<template>
  <div class="orderpage">
    <div class="title">订单列表</div>
    <div class="tab_item">
      <text>全部</text>
      <text>立等可取</text>
      <text>预约订单</text>
    </div>
    <OrderItem />
  </div>
</template>

<script>
/* eslint-disable */
import OrderItem from "./OrederItem";

const modal = weex.requireModule("modal");

export default {
  name: "App",
  components: {
    OrderItem
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  padding: 25px;
  color: rgb(72, 72, 73);
  font-size: 40px;
  font-weight: bold;
}

.tab_item {
  flex-direction: row;
  align-items: baseline;
  display: flex;
  padding: 20px;
  justify-content: space-around;
}
</style>
