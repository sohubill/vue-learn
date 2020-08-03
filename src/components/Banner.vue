<template>
  <div class="banner-container">
    <ul
      class="images"
      :style="{
          width:banners.length*100+'%',
          marginLeft:-index*100+'%',
      }"
    >
      <li v-for="(item,i) in banners" :key="i">
        <a :href="item.link">
          <img :src="item.url" alt />
        </a>
      </li>
    </ul>
    <ul class="dots">
      <li
        v-for="(item,i) in banners"
        :key="i"
        :class="
        {
            active:index==i
        }
    "
        @click="index=i"
      ></li>
    </ul>
  </div>
</template>

<script>
//js
//思考 有哪些数据需要放到js管理
//有哪些图片，每张图片的超链接地址，当前显示的是第几张（图片信息数组）
export default {
  props: {
    banners: {
      type: Array, //属性类型是数组
      required: true //必须传递该属性
    }
  },
  data() {
    return {
      index: 1,
      timer: null
    };
  },
  methods: {
    //开始自动切换
    autoStart() {
      if (this.timer != null) {
        return;
      }
      console.log("开始切换");
      this.timer = setInterval(() => {
        console.log("切换");
        this.index = (this.index + 1) % this.banners.length;
      }, 2000);
    },
    //停止切换
    autoStop() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  created() {
    this.autoStart();
  },
  destroyed() {
    this.autoStop();
  }
};
</script>

<style>
/* css */
.banner-container {
  width: 1080px;
  height: 350px;
  position: relative;
  overflow: hidden;
}
.banner-container li {
  display: block;
  width: 1080px;
  height: 100%;
  float: left;
}
.images {
  width: 1080px;
  height: 100%;
  transition: 0.5s;
}
.banner-container img {
  width: 1080px;
  height: 100%;
}
.dots {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
}
.dots li {
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid;
  color: #000;
  background: #000;
}
.dots li.active {
  background: #ffffff;
}
</style>