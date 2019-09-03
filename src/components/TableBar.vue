<template>
  <div class="tabbar">
    <div :style="{ left: activeTab * 150 + 'px'}" class="tab active"></div>
    <div :key="index" class="tab" v-for="(tab, index) in tabs" @click="tabitemclick(index)">
      <image :src="tab.icon" class="icon" />
      <text class="title">{{tab.title}}</text>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const { router } = require("../router");
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
          href: "HelloWorld"
        },
        {
          title: "购物车",
          icon: "https://static.easyicon.net/preview/122/1229112.gif",
          href: "home"
        },
        {
          title: "我的",
          icon: "https://static.easyicon.net/preview/113/1138149.gif",
          href: "home"
        }
      ]
    };
  },
  methods: {
    onchange(event) {
      console.log(`onchage, value: ${event.value}`);
      this.checked = event.value;
    },
    onswitch(event) {
      console.log(`onchage, value: ${event.value}`);
      this.haha = event.value;
    },
    tabitemclick(event) {
      this.activeTab = event;
      console.log(`onitemclick, value: ${this.activeTab}`);
      console.log(`onitemclick, value: ${event}`);
      this.$emit("childByValue", this.event);
      let name = this.tabs[event].href;
      // if (name != ''){
      toast(name);
      router.push(name);

      // }
    }
  },
  computed: {
    panels() {
      return this.tabs.map(tab => ({ content: tab.title }));
    }
  }
};
</script>

<style scoped>
.tabbar {
  background-color: antiquewhite;
  flex-direction: row;
  position: fixed;
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
