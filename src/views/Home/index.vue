<script setup>
import HomeBanner from './components/HomeBanner.vue'
// import HomeNew from './components/HomeNew.vue'
// import HomeHot from './components/HomeHot.vue'
// import homeProduct from './components/HomeProduct.vue'
// import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
// import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
// import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFix from '@/views/Layout/components/LayoutFix.vue'

import { ref } from 'vue'
const cateList = ref([
  { title: '旅游景点', id: 1, name: 'touristAttractions' },
  { title: '旅游出行', id: 2, name: 'travel' },
  { title: '酒店住宿', id: 3, name: 'hotel' },
  { title: '餐饮娱乐', id: 4, name: 'diningEntertainment' },
  { title: '游客投诉', id: 5, name: 'complaint' },
  { title: '应急信息', id: 6, name: 'emergency' }
])
</script>

<template>
  <div class="pageContainner">
    <LayoutFix />
    <!-- 添加全屏背景视频 -->
    <div class="bg"></div>
    <video autoplay muted loop id="bg-video">
      <source src="@/assets/videos/mybg30s.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <nav class="app-topnav">
      <div class="container">
        <ul>
          <template v-if="true">
            <li>
              <a href="javascript:;"
                ><i class="iconfont icon-user"></i>周杰伦</a
              >
            </li>
            <li>
              <el-popconfirm
                title="确认退出吗?"
                confirm-button-text="确认"
                cancel-button-text="取消"
              >
                <template #reference>
                  <a href="javascript:;">退出登录</a>
                </template>
              </el-popconfirm>
            </li>
            <li><a href="javascript:;">我的订单</a></li>
            <li><a href="javascript:;">会员中心</a></li>
          </template>
          <template v-else>
            <li><a href="javascript:;">请先登录</a></li>
            <li><a href="javascript:;">帮助中心</a></li>
            <li><a href="javascript:;">关于我们</a></li>
          </template>
        </ul>
      </div>
    </nav>
    <header class="app-header">
      <div class="container">
        <h1 class="logo">
          <RouterLink to="/">旅游服务</RouterLink>
        </h1>
        <ul class="app-header-nav">
          <li class="home">
            <RouterLink to="/">首页</RouterLink>
          </li>
          <li class="home" v-for="item in cateList" :key="item.id">
            <RouterLink active-class="active" :to="`/main/${item.name}`">{{
              item.title
            }}</RouterLink>
          </li>
        </ul>

        <!-- 头部购物车 -->
      </div>
    </header>
    <div class="container">
      <HomeBanner />
      <div class="info">
        <img src="@/assets/images/reminder.jpg" alt="" />
      </div>
    </div>
    <footer class="app_footer">
      <!-- 联系我们 -->
      <div class="contact">
        <div class="container">
          <dl>
            <dt>了解四姑娘山</dt>
            <dd>
              <i
                class="iconfont icon-zhongyaojianghehubogongnengqushuizhidabiaoshuaiicon"
              ></i
              >双桥沟
            </dd>
            <dd><i class="iconfont icon-haiba"></i>长坪沟</dd>
            <dd><i class="iconfont icon-fengjingqu"></i>海子沟</dd>
          </dl>
          <dl>
            <dt>旅行·线路</dt>
            <dd><i class="iconfont icon-xianlu"></i> 线路查询</dd>
            <dd><i class="iconfont icon-yanhui"></i> 美食娱乐</dd>
            <dd><i class="iconfont icon-jiudianzhusu"></i> 住宿服务</dd>
            <dd><i class="iconfont icon-dingpiao"></i> 订票服务</dd>
          </dl>
          <dl>
            <dt>景区资讯</dt>
            <dd><i class="iconfont icon-yingjizhongxin"></i> 应急信息</dd>
            <dd><i class="iconfont icon-guanyuwomen"></i> 注意事项</dd>
          </dl>
        </div>
      </div>
      <!-- 其它 -->
      <div class="extra">
        <div class="container">
          <div class="slogan">
            <a href="javascript:;">
              <i class="iconfont icon-yuanjing"></i>
              <span>东方圣山</span>
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-pashan"></i>
              <span>户外天堂</span>
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-zan"></i>
              <span>净土阿坝</span>
            </a>
          </div>
          <!-- 版权信息 -->
          <div class="copyright">
            <p>
              <a href="javascript:;">关于我们</a>
              <a href="javascript:;">帮助中心</a>
              <a href="javascript:;">商务合作</a>
              <a href="javascript:;">搜索推荐</a>
              <a href="javascript:;">友情链接</a>
            </p>
            <p>CopyRight © huadi第7组</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped lang="scss">
.pageContainner {
  position: relative;
  background: #000;

  #bg-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;

    z-index: 0;
    background-size: cover;
  }
  .app-topnav {
    background: transparent;
    ul {
      display: flex;
      height: 53px;
      justify-content: flex-end;
      align-items: center;
      li {
        a {
          padding: 0 15px;
          color: #ffffff;
          line-height: 1;
          display: inline-block;

          i {
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: $xtxColor;
          }
        }

        ~ li {
          a {
            border-left: 2px solid #ffffff;
          }
        }
      }
    }
  }
  .app-header {
    background: transparent;
    .container {
      display: flex;
      align-items: center;
    }

    .logo {
      width: 200px;

      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        background: url('@/assets/images/logo1.png') no-repeat center 18px /
          contain;
      }
    }

    .app-header-nav {
      width: 820px;
      display: flex;
      padding-left: 40px;
      position: relative;
      z-index: 998;

      li {
        margin-right: 40px;
        width: 76px;
        text-align: center;

        a {
          font-size: 16px;
          line-height: 32px;
          height: 32px;
          display: inline-block;
          color: #ffffff;

          &:hover {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
          }
        }

        .active {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
    }

    .search {
      width: 170px;
      height: 32px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      line-height: 32px;

      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }

      input {
        width: 140px;
        padding-left: 5px;
        color: #666;
      }
    }

    .cart {
      width: 50px;

      .curr {
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: relative;
        display: block;

        .icon-cart {
          font-size: 22px;
        }

        em {
          font-style: normal;
          position: absolute;
          right: 0;
          top: 0;
          padding: 1px 6px;
          line-height: 1;
          background: $helpColor;
          color: #fff;
          font-size: 12px;
          border-radius: 10px;
          font-family: Arial;
        }
      }
    }
  }
  .info {
    width: 100%;
    height: auto;
    img {
      width: auto\9;
      height: auto;
      max-width: 100%;
      display: inline-block;
      vertical-align: middle;
      margin-top: 200px;
      border: 0;
    }
  }
  .app_footer {
    overflow: hidden;
    background-color: transparent;
    padding-top: 20px;

    .contact {
      background: #000000;

      .container {
        padding: 60px 0 40px 25px;
        display: flex;
      }

      dl {
        height: 190px;
        text-align: center;
        padding: 0 72px;
        border-right: 1px solid #000000;
        color: #ffffff;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          border-right: none;
          padding-right: 0;
        }
      }

      dt {
        line-height: 1;
        font-size: 18px;
      }

      dd {
        margin: 36px 12px 0 0;
        float: left;
        width: 92px;
        height: 92px;
        padding-top: 10px;
        border: 1px solid #ffffff;

        .iconfont {
          font-size: 36px;
          display: block;
          color: #ffffff;
        }

        &:hover {
          .iconfont {
            color: $xtxColor;
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }

      .qrcode {
        width: 92px;
        height: 92px;
        padding: 7px;
        border: 1px solid #ffffff;
      }

      .download {
        padding-top: 5px;
        font-size: 14px;
        width: auto;
        height: auto;
        border: none;

        span {
          display: block;
        }

        a {
          display: block;
          line-height: 1;
          padding: 10px 25px;
          margin-top: 5px;
          color: #fff;
          border-radius: 2px;
          background-color: $xtxColor;
        }
      }

      .hotline {
        padding-top: 20px;
        font-size: 22px;
        color: #ffffff;
        width: auto;
        height: auto;
        border: none;

        small {
          display: block;
          font-size: 15px;
          color: #ffffff;
        }
      }
    }

    .extra {
      background-color: #6d6d6d;
    }

    .slogan {
      height: 178px;
      line-height: 58px;
      padding: 60px 100px;
      border-bottom: 1px solid #000000;
      display: flex;
      justify-content: space-between;

      a {
        height: 58px;
        line-height: 58px;
        color: #fff;
        font-size: 28px;

        i {
          font-size: 50px;
          vertical-align: middle;
          margin-right: 10px;
          font-weight: 100;
        }

        span {
          vertical-align: middle;
          text-shadow: 0 0 1px #ffffff;
        }
      }
    }

    .copyright {
      height: 170px;
      padding-top: 40px;
      text-align: center;
      color: #ffffff;
      font-size: 15px;

      p {
        line-height: 1;
        margin-bottom: 20px;
      }

      a {
        color: #ffffff;
        line-height: 1;
        padding: 0 10px;
        border-right: 1px solid #999;

        &:last-child {
          border-right: none;
        }
      }
    }
  }
}
</style>
