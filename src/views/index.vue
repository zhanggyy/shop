<template>
<div class="fit">
  <el-container>
      <el-header>
<!--        菜单栏-->
        <el-menu
            :default-active="navMenu"
            class="menu"
            mode="horizontal"
            @select="handleSelect"
           >
          <el-menu-item index="1">我的订单</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的京东</template>
            <el-menu-item index="2-1">我的京豆</el-menu-item>
            <el-menu-item index="2-2">我的白条</el-menu-item>
            <el-menu-item index="2-3">我的优惠卷</el-menu-item>
            <el-menu-item index="2-4">我的问卷</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">京东会员</el-menu-item>
          <el-menu-item index="4">企业采购</el-menu-item>
          <el-menu-item index="5">客户服务</el-menu-item>
          <el-menu-item index="6">网站导航</el-menu-item>
          <el-menu-item index="7">手机京东</el-menu-item>
        </el-menu>
<!--        搜索一行-->

      </el-header>

      <el-main>
        <div>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
<!--        第一个模块-->
        <div class="wrap">
<!--          轮播图左边列表-->
        <ul class="left">
          <li
              v-for="(item, index) in navBars"
              :key="index"
              class="cate-nav-item">
            {{item.text}}</li>
        </ul>
<!--          轮播图-->
          <div class="main">
            <el-carousel height="470px">
            <el-carousel-item v-for="item in imagesBox" :key="item.id">
              <el-image :src="item.idView" class="image" fit="fill" />
            </el-carousel-item>
          </el-carousel>
          </div>
<!--          轮播图右边列表-->
          <div class="right">
            <el-carousel direction="vertical">
              <el-carousel-item v-for="item in 4" :key="item">
                {{ item }}
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
<!--        第二个模块-->
        <div class="rec-banner">
          <h1 class="banner-title">精品推荐</h1>
          <ul class="rec-list">
            <li
                class="rec-card"
                v-for="(item,index) in goods"
                :key="index"
                @click="onClick(item)">
              <el-image :src="item.cover" class="rec-media" />
              <div class="rec-profile">
                <h4>{{item.text}}</h4>
                <p class="rec-params">
                  原价：<span class="rec-price">¥{{item.price}}</span>
                  促销价：<span class="rec-online-price">¥{{item.onlinePrice}}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>

<!--        第三个模块-->
        <div>333333</div>
      </el-main>

      <el-footer>
<!--        这是页尾-->
        <div></div>
      </el-footer>
  </el-container>
</div>
</template>

<script>
import config from '@/config/config';
export default {
  name: 'index',
  data() {
    return {
      navMenu: '1',
      imagesBox: [
        {id: 0, idView: require('../assets/banner/lbt1.jpg')},
        {id: 1, idView: require('../assets/banner/lbt2.jpg')},
        {id: 2, idView: require('../assets/banner/lbt3.jpg')},
        {id: 3, idView: require('../assets/banner/lbt4.jpg')},
        {id: 4, idView: require('../assets/banner/lbt5.jpg')},
      ],
      input: '', // 搜索
    };
  },
  computed: {
    navBars() {
      return config.navBars;
    },
    goods() {
      return config.goods;
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(111111, key, keyPath);
    },
    onClick(item) {
      this.$router.push({path: 'goods', query: {name: item.name}});
    },
  },
};
</script>

<style scoped>
li {
  list-style-type:none;
}
.fit {
  height: 100%;
  width: 100%;
}
/*第一模块的布局*/
.wrap {
  height: 470px;
  width: 100%;
  background-color: gray;
  text-align: center;
  display: flex;
}
.left {
  margin-block-start: 0;
  margin-block-end: 0;
  height: 100%;
  width:25%;
  background-color: #ffd04b;
}
.cate-nav-item {
  line-height: 29px;
  color: #fff;
  cursor: pointer;
}
.cate-nav-item:hover {
  color: #787878;
  background-color: rgba(255, 255, 255, .8);
}
.main {
  height: 100%;
  background-color: #ce8a99;
  flex:1
}
.right {
  height: 100%;
  width: 25%;
  background-color: #5aaaaa;;
}
.menu {
  background-color: gray;
  text-color: #fff;
  active-text-color: #ffd04b;
}
.image {
  height: 100%;
  width: 100%;
}
/*第二模块*/
.rec-banner {
  margin: 30px auto;
  padding-top: 30px;
  padding-bottom: 50px;
  width: 1120px;
  background-color: #fff;
}
.banner-title {
  padding: 8px 15px;
}
.rec-list {
  list-style: none;
}
.rec-card {
  display: inline-block;
  width: 25%;
  text-align: center;
  vertical-align: top;
  cursor: pointer;
}
.rec-media {
  width: 240px;
}
.rec-profile {
  width: 200px;
  display: inline-block;
  color: #444;
}
.rec-price {
  text-decoration: line-through;
}
.rec-online-price {
  color: #ff0036;
  font-size: 16px;
}
.rec-params {
  font-size: 12px;
  color: #888;
}
</style>
