<template>
  <scroller
    style="width:380wx;"
    @scrollend="scrollFirstEnd"
    @touchend="scrollFirstUp"
    @touchmove="scrollFirstMove"
  >
    <div v-for="(testmsg,testindex) in test" :key="testindex">
      <div :ref="'itemHead'">
        <image
          style="height:100wx;"
          src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg"
        />
      </div>
    </div>
    <div v-for="(testmsg,testindex) in test" :key="testindex">
      <div :ref="'itemContent'" :style="{'flex-direction': 'row','top':'0'}">
        <div>
          <div
            v-for="(msg,index) in list"
            :key="index"
            @click="gotip($event, 'item'+index,index)"
            :style="{'background-color':((index === currentIndex)?'#ffffff':'#eeeeee')}"
            class="leftItem"
          >
            <div
              v-if="(index === currentIndex)?true:false"
              style="width:10wx;height:40wx;background-color:blue;"
            ></div>

            <div style="flex-direction:column; align-items: center;height:40wx;">
              <div style="flex:1;justify-content: center">
                <text>{{msg.name}}</text>
              </div>
              <text style="height:1wx;width:100wx;background-color:#dddddd"></text>
            </div>
          </div>
        </div>

        <div style="flex:1;height:615wx;margin-left:10wx;">
          <list
            @scroll="scrooll"
            @scrollend="scrollEnd"
            @stoppropagation="true"
            shouldStopPropagationInterval="1000000"
            shouldStopPropagationInitResult="false"
          >
            <template v-for="(item, index) in list">
              <header :ref="'item'+index" :key="index">
                <div
                  style="flex-direction:row;background-color:white;
                  align-items: center;padding-top:10wx;padding-bottom:10wx"
                >
                  <text>{{item.name}}</text>
                  <text
                    style="background-color:#dddddd;
                  height:1wx;width:1000wx;margin-left:4wx;"
                  ></text>
                </div>
              </header>
              <cell :key="index">
                <div
                  style="flex-direction:row;margin:5wx;"
                  v-for="(cellItem, cellIndex) in item.list"
                  :key="cellIndex"
                >
                  <div
                    style="width:80wx;height:80wx;background-color:blue"
                    @appear="(e) => {onappear(e, index,cellindex,item.list);}"
                    @disappear="(e) => {disonappear(e, index, cellIndex , item.list);}"
                  >
                    <image />
                  </div>
                  <div style="flex:1;margin-left:10wx;;flex-direction:column">
                    <text style="font-size:13wx">{{cellItem.name}}</text>
                    <text style="font-size:10wx;color:#cccccc">HazeInut Latte</text>
                    <text style="margin-top:25wx">$ 27</text>
                  </div>
                  <div class="addMyItem" @click="addItem(cellItem.name)"></div>
                </div>
              </cell>
            </template>
          </list>
        </div>
      </div>
    </div>
  </scroller>
</template>


<script>
/* eslint-disable */
import Bus from "../eventBus.js";
const dom = weex.requireModule("dom") || {};
const navigator = weex.requireModule("navigator");
const modal = weex.requireModule("modal");
const toast = message => {
  modal.toast({
    message,
    duration: 1
  });
};

export default {
  name: "Menu",
  data() {
    return {
      test: [1],
      firstEnd: 0,

      isTouchIndex: 0,
      currentIndex: 0,
      list: [
        {
          name: "人气top",
          list: [
            {
              name: "摩卡"
            },
            {
              name: "香草拿铁"
            },
            {
              name: "焦糖拿铁"
            },
            {
              name: "桃桃芝士红宝石茶"
            },
            {
              name: "芭乐芝士红宝石茶"
            },
            {
              name: "西柚芝士茉莉茶"
            }
          ]
        },
        {
          name: "大师咖啡",
          list: [
            {
              name: "拿铁"
            },
            {
              name: "香草拿铁"
            },
            {
              name: "焦糖拿铁"
            },
            {
              name: "普通拿铁"
            },
            {
              name: "高级拿铁"
            },
            {
              name: "特高级拿铁"
            },
            {
              name: "无敌拿铁"
            }
          ]
        },
        {
          name: "小鹿茶",
          list: [
            {
              name: "桃桃山雾乌龙茶"
            },
            {
              name: "芭乐芝士红宝石茶"
            },
            {
              name: "西柚芝士茉莉茶"
            },
            {
              name: "梅梅芝士茉莉茶"
            },
            {
              name: "茫茫芝士茉莉茶"
            },
            {
              name: "西西芝士茉莉茶"
            }
          ]
        },
        {
          name: "瑞纳冰",
          list: [
            {
              name: "乐道瑞纳冰"
            },
            {
              name: "小雪瑞纳冰"
            },
            {
              name: "小白瑞纳冰"
            },
            {
              name: "抹茶瑞纳冰"
            },
            {
              name: "卡布奇瑞瑞纳冰"
            },
            {
              name: "好喝瑞纳冰"
            },
            {
              name: "喜欢瑞纳冰"
            }
          ]
        }
      ]
    };
  },
  methods: {
    scrollFirstEnd(e) {
      this.firstEnd = -e.contentOffset.y;
    },
    scrollFirstUp(e) {
      if (parseInt(this.firstEnd) > 200) {
        const ref = this.$refs["itemContent"];
        const el = ref ? ref[0] : null;
        dom.scrollToElement(el, {});
      }
    },
    scrollFirstMove(e) {
      // if (Array.isArray(e.changedTouches)) {
      //   e.changedTouches.forEach(item => {
      //     this.testlength = `pageX: ${item.pageX}, pageY: ${item.pageY}\n`;
      //   });
      // }
    },
    scrooll(e) {
      // if (this.isTouchIndex == 0) {
      //   const ref = this.$refs["itemHead"];
      //   const el = ref ? ref[0] : null;
      //   dom.scrollToElement(el, { offset: -e.contentOffset.y / 2 });
      // }
    },
    gotip(e, name, index) {
      this.isTouchIndex = 1;
      const ref = this.$refs[name];
      const el = ref ? ref[0] : null;
      dom.scrollToElement(el, {});
      this.currentIndex = index;
    },
    onappear(e, index, cellIndex, list) {
      if (
        e.direction == "down" &&
        index < this.currentIndex &&
        this.isTouchIndex == 0
      ) {
        this.currentIndex = index;
      }
    },
    disonappear(e, index, cellIndex, list) {
      if (
        e.direction == "up" &&
        cellIndex == list.length - 1 &&
        index == this.currentIndex &&
        this.isTouchIndex == 0
      ) {
        this.currentIndex++;
      }
    },
    scrollEnd(e) {
      this.isTouchIndex = 0;
    },
    addItem(name) {
      toast("您进入了" + name + "的详情页面");
      // navigator.push({
      //   url: "http://10.177.38.87:8081/dist/components/MenuItem.js",
      //   animated: "false"
      // });
      Bus.$emit("changeIndex", "MenuItem");
    }
  }
};
</script>
<style scoped>

.panel {
  height: 100px;
  margin-left: 75px;
  margin-top: 35px;
  margin-bottom: 35px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}
.leftItem {
  flex-direction: row;
  width: 100wx;
  height: 40wx;
  justify-content: center;
  align-items: center;
  background-color: rgba(162, 217, 192, 0.2);
}
.row {
  height: 100px;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #dddddd;
}
.addMyItem {
  background-color: black;
  font-size: 18wx;
  margin-right: 20wx;
  margin-top: 50wx;
  width: 25wx;
  height: 25wx;
}
.addMyItem:active {
  background-color: brown;
  font-size: 18wx;
  width: 25wx;
  height: 25wx;
}
</style>