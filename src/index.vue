<template>
  <div>
    <div style="flex:18" class="wrapper">
      <router-view />
    </div>
    <div style="flex-direction:row;margin-top:10wx;margin-bottom:10wx">
      <div style="flex:1;" v-for="(item, index) in navList" :key="index">
        <text style="text-align:center" @click="goto(index)">{{item.name}}</text>
      </div>
    </div>
  </div>
</template>

<script>
const { router } = require("./router");
const dom = weex.requireModule("dom") || {};
const modal = weex.requireModule("modal");
const orderMsgHandler = new BroadcastChannel("Avengers");
const toast = message => {
  modal.toast({
    message,
    duration: 1
  });
};
export default {
  name: "App",
  data() {
    return {
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",
      navList: [
        {
          name: "首页",
          href: "HelloWorld"
        },
        {
          name: "下单",
          href: "OrderList"
        }
      ]
    };
  },
  methods: {
    goto: function(index) {
      let name = this.navList[index].href;
      router.push(name);
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
</style>
