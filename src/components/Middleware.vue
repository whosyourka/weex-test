<template>
  <div class="middlerpage">
    <div class="middle_top">
      <div class="local_address">
        <text class="local_name">汇公馆</text>
        <text class="local_distance">距你150m</text>
      </div>
      <div class="local_switch">
        <switch class="switch" checked="true" style="margin-left: 40px;" />
      </div>
    </div>

    <div :key="i" class="item" v-for="(item, i) in items" @click="onitemclick(i,$event)">
      <image class="hrline" />
      <div class="middle_center">
        <div class="middle_item">
          <div class="middle_item_coupon">
            <text class="item_title">{{item.title}}</text>
            <text class="item_title_end" v-if="i==1">买二赠一</text>
          </div>
          <text class="item_title_es">{{item.title_es}}</text>
        </div>
        <image :src="item.icon" class="icon" />
      </div>
    </div>

    <div class="middle_bottom">
      <image class="bottom_image" :src="icon2" resize="cover"  />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Bus from "../eventBus.js";
const modal = weex.requireModule("modal");
const toast = message => {
  modal.toast({
    message,
    duration: 1
  });
};
export default {
  data() {
    return {
      icon2:
        "https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg",
      items: [
        {
          title: "现在下单",
          title_es: "ORDER NOW",
          icon: "https://static.easyicon.net/preview/119/1195147.gif"
        },
        {
          title: "咖啡钱包",
          title_es: "COFFEE WALLET",
          icon: "https://static.easyicon.net/preview/121/1219091.gif"
        },
        {
          title: "送他咖啡",
          title_es: "SEND COFFEE",
          icon: "https://static.easyicon.net/preview/123/1234314.gif"
        },
        {
          title: "企业账户",
          title_es: "ENTERPRISE ACCOUNT",
          icon: "https://static.easyicon.net/preview/122/1226481.gif"
        }
      ]
    };
  },

  methods: {
    onitemclick(i, event) {
      if (this.items[i].title == "咖啡钱包") {
        Bus.$emit("changeIndex", "Menu");
      }
    }
  }
};
</script>

<style scoped>
.middle_top {
  width: 670px;
  height: 125px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 40px;
  margin-right: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
}
.local_address {
  width: 300px;
  font-size: 40px;
  text-align: center;
  color: #000;
  flex: 1;
}

.local_switch {
  width: 145px;
  text-align: right;
}

.icon {
  width: 35wx;
  height: 35wx;
}

.local_name {
  font-size: 32px;
  color: rgb(71, 71, 71);
}

.local_distance {
  font-size: 25px;
  color: rgb(93, 93, 93);
}

.middle_center {
  flex: 1;
  height: 135px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 40px;
  margin-right: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
}

.middle_item {
  width: 300px;
  font-size: 40px;
  text-align: center;
  color: #000;
  flex: 1;
}

.middle_item_coupon {
  align-items: center;
  width: 300px;
  flex-direction: row;
  display: flex;
}

.item_title {
  font-weight: bold;
  font-size: 35px;
  color: #000;
}

.item_title_es {
  margin-top: 1px;
  font-weight: bold;
  font-size: 25px;
  color: rgb(119, 118, 118);
}

.middle_bottom {
  margin-right: 35px;
  margin-left: 35px;
  width: 670px;
  height: 135px;
}

.bottom_image {
  width: 670px;
  height: 135px;
}

.hrline {
  width: 670px;
  height: 1px;
  margin-left: 40px;
  margin-right: 40px;
  border: none;
  background-color: rgb(204, 197, 197);
}

.item_title_end {
  text-align: center;
  font-size: 20px;
  margin-left: 10px;
  background-color: tomato;
  color: white;
}
</style>
