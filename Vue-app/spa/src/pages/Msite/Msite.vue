<template>
  <div   class="msite">
    <!-- 头部 -->
    <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
      <template v-slot:left>
        <router-link to="/search" class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </template>

      <template v-slot:right>
        <router-link to="login" class="header_login">
          <span class="header_login_text">登录|注册</span>
        </router-link>
      </template>
    </HeaderTop>
    <!-- <div>Msite vue template</div> -->
    <!--首页轮播图导航-->
    <div class="miste-content-wrapper">
      <div class="miste-content">
            <nav class="msite_nav">
            <div class="swiper-container">
                <!-- <div class="swiper-wrapper"> -->
                <!-- 外层包裹标签 -->
                <swiper ref="mySwiper" :options="swiperOptions" class="swiper-wrapper">
                <!-- 第一排 -->
                <swiper-slide class="swiper-slide">
                    <!-- <div class="swiper-slide"> -->
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/1.jpg" />
                    </div>
                    <span>甜品饮品</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/2.jpg" />
                    </div>
                    <span>商超便利</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/3.jpg" />
                    </div>
                    <span>美食</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/4.jpg" />
                    </div>
                    <span>简餐</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/5.jpg" />
                    </div>
                    <span>新店特惠</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/6.jpg" />
                    </div>
                    <span>准时达</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/7.jpg" />
                    </div>
                    <span>预订早餐</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/8.jpg" />
                    </div>
                    <span>土豪推荐</span>
                    </a>
                </swiper-slide>
                <!-- </div> -->
                <!-- 第二排 -->
                <swiper-slide class="swiper-slide">
                    <!-- <div class="swiper-slide"> -->
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/1.jpg" />
                    </div>
                    <span>甜品饮品</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/2.jpg" />
                    </div>
                    <span>商超便利</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/3.jpg" />
                    </div>
                    <span>美食</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/4.jpg" />
                    </div>
                    <span>简餐</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/5.jpg" />
                    </div>
                    <span>新店特惠</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/6.jpg" />
                    </div>
                    <span>准时达</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/7.jpg" />
                    </div>
                    <span>预订早餐</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                        <img src="./images/nav/8.jpg" />
                    </div>
                    <span>土豪推荐</span>
                    </a>
                </swiper-slide>
                </swiper>
                <!-- </div> -->
                <!-- Add Pagination -->
                <!-- <div class="swiper-pagination"></div> -->
                <div class="swiper-pagination" ></div>
            </div>
            </nav>
            <div class="msite_shop_list">
                <div class="shop_header">
                    <i class="iconfont icon-xuanxiang"></i>
                    <span class="shop_header_title">附近商家</span>
                </div>
                <div class="shop_container">
                    <ul class="shop_list">
                    <li class="shop_li border-1px">
                        <a>
                        <div class="shop_left">
                            <img class="shop_img" src="./images/shop/1.jpg" />
                        </div>
                        <div class="shop_right">
                            <section class="shop_detail_header">
                            <h4 class="shop_title">锄禾日当午，汗滴禾下土</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports">保</li>
                                <li class="supports">准</li>
                                <li class="supports">票</li>
                            </ul>
                            </section>
                            <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <div class="star star-24">
                                <span class="star-item on"></span>
                                <span class="star-item on"></span>
                                <span class="star-item on"></span>
                                <span class="star-item half"></span>
                                <span class="star-item off"></span>
                                </div>
                                <div class="rating_section">3.6</div>
                                <div class="order_section">月售106 单</div>
                            </section>
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_left"
                                >硅谷专送
                                </span>
                                <span class="delivery_style delivery_right"
                                >准时达
                                </span>
                            </section>
                            </section>
                            <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥20 起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥5</span>
                            </p>
                            </section>
                        </div>
                        </a>
                    </li>
                    
                    
                    
                    </ul>
                </div>
            </div>
      </div>
    </div>  




  </div>
</template>
<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";


Vue.use(VueAwesomeSwiper /* { default options with global component } */);

import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
     data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
  components: {
    HeaderTop,
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .miste-content-wrapper
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
      .msite_nav
        bottom-border-1px(#e4e4e4)
        margin-top 15px
        height 200px
        background #fff
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              display flex
              justify-content center
              align-items flex-start
              flex-wrap wrap
              .link_to_food
                width 25%
                .food_container
                  display block
                  width 100%
                  text-align center
                  padding-bottom 10px
                  font-size 0
                  img
                    display inline-block
                    width 50px
                    height 50px
                span
                  display block
                  width 100%
                  text-align center
                  font-size 13px
                  color #666
          .swiper-pagination
            >span.swiper-pagination-bullet-active
              background #02a774
      .msite_shop_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop_header
          padding 10px 10px 0
          .shop_icon
            margin-left 5px
            color #999
          .shop_header_title
            color #999
            font-size 14px
            line-height 20px
        .shop_list
          .shop_li
            bottom-border-1px(#f1f1f1)
            width 100%
            >a
              clearFix()
              display block
              box-sizing border-box
              padding 15px 8px
              width 100%
              .shop_left
                float left
                box-sizing border-box
                width 23%
                height 75px
                padding-right 10px
                .shop_img
                  display block
                  width 100%
                  height 100%
              .shop_right
                float right
                width 77%
                .shop_detail_header
                  clearFix()
                  width 100%
                  .shop_title
                    float left
                    width 200px
                    color #333
                    font-size 16px
                    line-height 16px
                    font-weight 700
                    &::before
                      content '品牌'
                      display inline-block
                      font-size 11px
                      line-height 11px
                      color #333
                      background-color #ffd930
                      padding 2px 2px
                      border-radius 2px
                      margin-right 5px
                  .shop_detail_ul
                    float right
                    margin-top 3px
                    .supports
                      float left
                      font-size 10px
                      color #999
                      border 1px solid #f1f1f1
                      padding 0 2px
                      border-radius 2px
                .shop_rating_order
                  clearFix()
                  width 100%
                  margin-top 18px
                  margin-bottom 8px
                  .shop_rating_order_left
                    float left
                    color #ff9a0d
                    .rating_section
                      float left
                      font-size 10px
                      color #ff6000
                      margin-left 4px
                    .order_section
                      float left
                      font-size 10px
                      color #666
                      transform scale(.8)
                  .shop_rating_order_right
                    float right
                    font-size 0
                    .delivery_style
                      transform-origin 35px 0
                      transform scale(.7)
                      display inline-block
                      font-size 12px
                      padding 1px
                      border-radius 2px
                    .delivery_left
                      color #fff
                      margin-right -10px
                      background-color #02a774
                      border 1px solid #02a774
                    .delivery_right
                      color #02a774
                      border 1px solid #02a774
                .shop_distance
                  clearFix()
                  width 100%
                  font-size 12px
                  .shop_delivery_msg
                    float left
                    transform-origin 0
                    transform scale(.9)
                    color #666
                  .segmentation
                    color #ccc     

</style>