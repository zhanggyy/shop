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
        <div>我是搜索栏</div>
      </el-header>

      <el-main>
<!--        第一个模块-->
        <div class="wrap">
        <div class="left">
<!--          这是轮播图左侧商品列表-->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item><a href="#">家用电器</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">手机</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">运营商</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">数码</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">电视</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">电脑</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">办公</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">家居</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">家具</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">家装</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">厨具</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">男装</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">女装</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">童装</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">内衣</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">美妆</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">个护清洁</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">宠物</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">女鞋</el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">箱包</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">钟表</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">珠宝</a></el-breadcrumb-item>
        </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">男鞋</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">运动</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">户外</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">房产</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">汽车</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">汽车用品</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">自行车</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">母婴</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">玩具乐器</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">食品</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">酒类</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">生鲜</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">特产</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">艺术</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">礼品</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">鲜花</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">农资绿植</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">医药保健</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">计生情趣</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">图书</el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">文娱</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">教育</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="#">电子书</a></el-breadcrumb-item>
        </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">机票</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">酒店</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">旅游</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">生活</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">理财</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">众筹</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">白条</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">保险</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">安装</el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">维修</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">清洗</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">二手</a></el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item><a href="#">工业品</a></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
<!--          轮播图-->
          <div class="main">
            <el-carousel height="470px">
            <el-carousel-item v-for="item in imagesBox" :key="item.id" >
              <img :src="item.idView" class="image" fit="fill">
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
        <div>22222</div>

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
export default {
  name: 'index',
  data() {
    return {
      navMenu: '1',
      imagesBox: [
        {id: 0, idView: require('../assets/lbt1.jpg')},
        {id: 1, idView: require('../assets/lbt2.jpg')},
        {id: 2, idView: require('../assets/lbt3.jpg')},
        {id: 3, idView: require('../assets/lbt4.jpg')},
        {id: 4, idView: require('../assets/lbt5.jpg')},
      ],
      fiveNews: [],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(111111, key, keyPath);
    },
  },
};
</script>

<style scoped>
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
  height: 100%;
  width:25%;
  background-color: #ffd04b;
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
.carousel {
  height: 100%;
}
</style>
