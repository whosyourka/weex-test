<template>
  <div style="flex-direction:column" >
    <div style="flex:1">
      <router-view />
    </div>
    
    <!-- <div style="flex-direction:row;margin-top:10wx;margin-bottom:10wx">
      <div style="flex:1;" v-for="(item, index) in navList" :key="index" @click="goto(index)">
        <text style="text-align:center">{{item.name}}</text>
      </div>
    </div> -->
    <div class="tabbar">
      <div :style="{ left: activeTab * 150 + 'px'}" class="tab active"></div>
      <div :key="index" class="tab" v-for="(tab, index) in tabs" @click="tabitemclick(index)">
        <image :src="tab.icon" class="icon" />
        <text class="title">{{tab.title}}</text>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import TableBar from "@/components/TableBar";
const { router } = require("./router");
const dom = weex.requireModule("dom") || {};
const modal = weex.requireModule("modal");

const toast = message => {
  modal.toast({
    message,
    duration: 1
  });
};

export default {
  name: "App",
  components: {
    TableBar
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "首页",
          icon: "https://static.easyicon.net/preview/122/1225464.gif",
          href: "home"
        },
        {
          title: "菜单",
          icon: "https://static.easyicon.net/preview/123/1232005.gif",
          href: "HelloWorld"
        },
        {
          title: "订单",
          icon: "https://static.easyicon.net/preview/120/1200293.gif",
          href: "OrderItem"
        },
        {
          title: "购物车",
          icon: "https://static.easyicon.net/preview/122/1229112.gif",
          href: ""
        },
        {
          title: "我的",
          icon: "https://static.easyicon.net/preview/113/1138149.gif",
          href: ""
        }
      ],
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",
      navList: [
        {
          name: "首页",
          href: "home"
        },
        {
          name: "下单",
          href: "HelloWorld"
        }
      ]
    };
  },
  methods: {
    goto: function(index) {
      let name = this.navList[index].href;
      router.push(name);
    },
    tabitemclick(event) {
      this.activeTab = event;
      console.log(`onitemclick, value: ${this.activeTab}`);
      console.log(`onitemclick, value: ${event}`);
      this.$emit("childByValue", this.event);
      let name = this.tabs[event].href;
      if (name != "") {
        router.push(name);
      }
      orderMsgHandler.postMessage("ss");
    }
  }
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.logo {
  width: 424px;
  height: 200px;
}
.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}

.tabbar {
  background-color: antiquewhite;
  flex-direction: row;

  bottom: 0px;
  left: 0px;
  right: 0px;
}
.tab {
  height: 120px;
  width: 150px;
  justify-content: center;
  align-items: center;
}
.active {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(218, 59, 85);
  transition: left 0.2s ease-in-out;
}
.icon {
  width: 45px;
  height: 45px;
}
.title {
  font-size: 28px;
  color: black;
  margin-top: 10px;
}
</style>
