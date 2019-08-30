<template>
  <div>
    <list class="list">
      <refresh
        class="refresh"
        @refresh="onrefresh"
        @pullingdown="onpullingdown"
        :display="refreshing ? 'show' : 'hide'"
      >
        <text class="indicator-text">Refreshing...</text>
        <loading-indicator class="indicator"></loading-indicator>
      </refresh>
      <cell v-for="(item,i) in items" append="tree" :index="i" :key="i" class="row">
        <div>
          <image class="tophrline" />
          <div class="item_address">
            <text class="take_style">{{item.pickWay}}</text>
            <text class="take_store">{{item.address}}</text>
            <text class="take_status">{{item.orderStatus}}</text>
          </div>
          <image class="hrline" />

          <div class="item_address">
            <text class="product_name">{{item.productName}}</text>
            <text class="product_num">等共{{item.productNum}}件商品</text>
            <text class="product_price">￥{{item.price}}</text>
          </div>

          <text class="order_time">{{item.orderTime}}</text>

          <div class="again">
            <text class="again_null"></text>
            <text class="order_again">再来一单</text>
          </div>
        </div>
      </cell>
    </list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      refreshing: false,
      items: [
        {
          pickWay: "自提",
          address: "天地软件远 (NO.1708)",
          orderStatus: "已完成",
          productName: "摩卡",
          productNum: "2",
          price: "8.86",
          orderTime: "2019-09-12 16:30"
        },
        {
          pickWay: "自提",
          address: "天地软件远 (NO.1708)",
          orderStatus: "已完成",
          productName: "摩卡",
          productNum: "2",
          price: "8.86",
          orderTime: "2019-09-12 16:30"
        },
        {
          pickWay: "自提",
          address: "天地软件远 (NO.1708)",
          orderStatus: "已完成",
          productName: "摩卡",
          productNum: "2",
          price: "8.86",
          orderTime: "2019-09-12 16:30"
        },
        {
          pickWay: "自提",
          address: "天地软件远 (NO.1708)",
          orderStatus: "已完成",
          productName: "摩卡",
          productNum: "2",
          price: "8.86",
          orderTime: "2019-09-12 16:30"
        }
      ]
    };
  },

  methods: {
    onrefresh(event) {
      modal.toast({ message: "Refreshing", duration: 1 });
      this.refreshing = true;
      setTimeout(() => {
        this.refreshing = false;
      }, 2000);
    },
    onpullingdown(event) {
      console.log("dy: " + event.dy);
      console.log("pullingDistance: " + event.pullingDistance);
      console.log("viewHeight: " + event.viewHeight);
      console.log("type: " + event.type);
    }
  }
};
</script>

<style scoped>
.tophrline {
  width: 750px;
  height: 15px;
  border: none;
  background-color: rgb(172, 169, 169);
}
.item_top {
  width: 670px;
  height: 135px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
}

.item_address {
  flex-direction: row;
  align-items: baseline;
  display: flex;
  padding: 20px;
}
.take_style {
  padding: 5px 10px 5px 10px;
  font-size: 20px;
  color: rgb(135, 184, 240);
  border-width: 1px;
  border-style: groove;
  border-radius: 5px;
}

.take_store {
  padding: 10px 15px 5px 15px;
  color: rgb(72, 72, 73);
  font-size: 30px;
  flex: 1;
}

.take_status {
  text-align: right;
  margin-right: 20px;
  color: rgb(89, 89, 90);
  font-size: 30px;
}

.hrline {
  width: 670px;
  height: 1px;
  margin-left: 40px;
  margin-right: 40px;
  border: none;
  background-color: rgb(172, 167, 167);
}

.product_name {
  color: rgb(72, 72, 73);
  font-size: 35px;
  font-weight: bold;
}

.product_num {
  padding: 10px 15px 5px 15px;
  color: rgb(72, 72, 73);
  font-size: 25px;
  flex: 1;
}

.product_price {
  text-align: right;
  margin-right: 20px;
  color: rgb(89, 89, 90);
  font-size: 35px;
  font-weight: bold;
}

.order_time {
  padding: 10px 15px 5px 15px;
  color: rgb(135, 143, 143);
  font-size: 25px;
}

.again {
  flex-direction: row;
  align-items: baseline;
  display: flex;
  padding: 20px;
}

.again_null {
  flex: 1;
}
.order_again {
  text-align: center;
  margin-right: 20px;
  width: 200px;
  padding: 10px 20px 10px 20px;
  font-size: 30px;
  border-width: 1px;
  border-style: groove;
  border-radius: 10px;
}
</style>
