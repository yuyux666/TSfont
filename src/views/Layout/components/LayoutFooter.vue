<template>
  <footer class="app_footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>了解四姑娘山</dt>
          <dd @click="$router.push('/main/touristAttractions/tourShuangqiao')">
            <i
              class="iconfont icon-zhongyaojianghehubogongnengqushuizhidabiaoshuaiicon"
            ></i
            >双桥沟
          </dd>
          <dd @click="$router.push('/main/touristAttractions/tourChangping')">
            <i class="iconfont icon-haiba"></i>长坪沟
          </dd>
          <dd @click="$router.push('/main/touristAttractions/tourHaizi')">
            <i class="iconfont icon-fengjingqu"></i>海子沟
          </dd>
        </dl>
        <dl>
          <dt>旅行·线路</dt>
          <dd @click="$router.push('/main/travel/travelRoute')">
            <i class="iconfont icon-xianlu"></i> 线路推荐
          </dd>
          <dd @click="$router.push('/main/diningEntertainment/dining')">
            <i class="iconfont icon-yanhui"></i> 美食娱乐
          </dd>
          <dd @click="$router.push('/main/hotel/hotelEnquiry')">
            <i class="iconfont icon-jiudianzhusu"></i> 住宿服务
          </dd>
          <dd @click="$router.push('/main/hotel/hotelReserve')">
            <i class="iconfont icon-dingpiao"></i> 订票服务
          </dd>
        </dl>
        <dl>
          <dt>景区资讯</dt>
          <dd @click="$router.push('/main/emergency/emergencyInfo')">
            <i class="iconfont icon-yingjizhongxin"></i> 应急信息
          </dd>
          <dd @click="$router.push('/main/emergency/emergencyAttention')">
            <i class="iconfont icon-guanyuwomen"></i> 注意事项
          </dd>
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
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight © huadi第7组</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app_footer {
  overflow: hidden;

  padding-top: 20px;

  .contact {
    background: transparent;

    .container {
      padding: 60px 0 40px 25px;
      display: flex;
    }

    dl {
      height: 190px;
      text-align: center;
      padding: 0 72px;
      border-right: 1px solid #f2f2f2;
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
      border: 1px solid #ededed;

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
      border: 1px solid #ededed;
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
      color: #666;
      width: auto;
      height: auto;
      border: none;

      small {
        display: block;
        font-size: 15px;
        color: #999;
      }
    }
  }

  .extra {
    background-color: #333;
  }

  .slogan {
    height: 178px;
    line-height: 58px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;

    a {
      height: 58px;
      line-height: 58px;
      color: #fff;
      font-size: 28px;
      text-align: center;

      i {
        font-size: 50px;
        vertical-align: middle;
        margin-right: 10px;
        font-weight: 100;
      }

      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
  }

  .copyright {
    height: 170px;
    padding-top: 40px;
    text-align: center;
    color: #999;
    font-size: 15px;

    p {
      line-height: 1;
      margin-bottom: 20px;
    }

    a {
      color: #999;
      line-height: 1;
      padding: 0 10px;
      border-right: 1px solid #999;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
