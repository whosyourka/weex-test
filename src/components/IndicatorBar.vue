<template>
  <div class="indicatorbar">
    <slider class="slider" interval="3000" auto-play="true">
      <div :key="i" class="frame" v-for="(img,i) in imageList">
        <image class="image" resize="cover" :src="img.src" />
      </div>
      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      imageList: [
        {
          src:
            "https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"
        },
        {
          src:
            "https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"
        },
        {
          src:
            "https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
.indicatorbar {
  top: 0px;
  left: 0px;
  right: 0px;
}
.image {
  width: 750px;
  height: 320px;
}
.slider {
  width: 750px;
  height: 320px;
}
.frame {
  width: 750px;
  height: 320px;
  position: relative;
}
.indicator {
  width: 750px;
  height: 320px;
  size: 25px;
  top: 110px;
  position: absolute;
}
</style>
