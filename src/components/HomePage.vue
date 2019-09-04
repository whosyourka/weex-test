<template>
  <scroller class="scroller">
    <!--刷新-->
    <refresh
      class="refresh"
      @refresh="onrefresh"
      @pullingdown="onpullingdown"
      :display="refreshing ? 'show' : 'hide'"
    >
      <text class="indicator-text">Refreshing...</text>
      <loading-indicator class="indicator"></loading-indicator>
    </refresh>
    <!--头部-->
    <IndicatorBar />
    <Middleware />
  </scroller>
  <!-- </div> -->
  <!-- <OrderPage v-if="showorderpage"/> -->
  <!--底部tablebar-->
</template>

<script>
/* eslint-disable */
import TableBar from "./TableBar";
import IndicatorBar from "./IndicatorBar";
import Middleware from "./Middleware";
import OrderPage from "./OrderPage";

const modal = weex.requireModule("modal");

export default {
  name: "HotmPage",
  components: {
    TableBar,
    IndicatorBar,
    Middleware,
    OrderPage
  },
  data() {
    return {
      refreshing: false,
      showorderpage: false,
      indexitem: 1,
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png"
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
    },
    childByValue: function(childValue) {
      this.indexitem++;
      console.log("childByValue: " + this.indexitem);
      if (this.indexitem % 2 == 0) {
        this.showorderpage = true;
      } else {
        this.showorderpage = false;
      }
    }
  }
};
</script>

<style scoped>
.topwrapper {
  position: fixed;
  top: 350px;
  bottom: 120px;
  left: 0px;
  right: 0px;
  color: #ff0000;
  flex-direction: column;
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
  color: #ff0000;
}
</style>
