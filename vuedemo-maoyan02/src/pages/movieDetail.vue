<template>
  <div v-if="movieDetail">
    <div class="movie-header">
      <div class="bg-second"></div>
      <div class="bg-last"></div>
      <div class="movie-img">
        <img :src="movieDetail.img.replace('w.h','128.180')" alt>
      </div>
      <ul class="movie-info">
        <li class="name">{{movieDetail.nm}}</li>
        <li class="enm">{{movieDetail.enm}}</li>
        <li v-if="movieDetail.globalReleased && movieDetail.sc!==0" class="score">
          观众评
          <span>{{movieDetail.sc}}</span>
        </li>
        <li
          style="font-size: 14px;color: #888"
          v-if="movieDetail.globalReleased && movieDetail.sc==0"
        >暂无评分</li>
        <li v-if="!movieDetail.globalReleased" class="score">
          <span>{{movieDetail.wish}}</span> 想看
        </li>
        <li>{{movieDetail.cat}}</li>
        <li>{{movieDetail.src}}</li>
        <li>{{movieDetail.pubDesc}}</li>
      </ul>
    </div>

    <button class="buy-btn">特惠购票</button>
    <!-- 查看全部介绍开关 -->
    <div class="movie-intro">
      <p :class="btnType?'overflow':''">{{movieDetail.dra}}</p>
      <img @click="btnType=!btnType" class="btn" :src="btnType?downBtnSrc:upBtnSrc" alt>
    </div>
  </div>
</template>

<script>
import axios from "axios";
/**
 * img里面的src非常特殊 不能使用表达式动态绑定
 * 如果非要使用动态表达式绑定，一定是先把图片导入进来，然后再使用
 */
import downBtnSrc from "../assets/img/down.png";
import upBtnSrc from "../assets/img/up.png";

export default {
  data() {
    return {
      movieDetail: null,
      btnType: true,
      downBtnSrc,
      upBtnSrc
    };
  },
  created() {
    this.getMovieDetail(this.$route.query.id)
  },
  methods: {
    getMovieDetail(movieId) {
      this.$api.getDetailMovie({ movieId }).then(res => {
        this.movieDetail = res.detailMovie
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
@import "../assets/css/movie-list.css";

.movie-header {
  @include flex-box(columns) {
    justify-content: left;
    align-items: center;
  }
  height: 165px;
  width: 100%;
  padding: 15px;
  background-color: rgba(231, 223, 223, 0.4);
  >.bg-second{
    position: absolute;
    width: 100%;
    height: 165px;
    background-color: rgba(85,85,85,.7);
    margin-left: -15px;
    z-index: -1;
  }
  > .bg-last {
    position: absolute;
    width: 100%;
    height: 165px;
    background:radial-gradient(60% 55%,rgb(184, 194, 189),rgb(16, 80, 85));
    margin-left: -15px;
    z-index: -2;
  }
  > .movie-info {
    height: 135px;
    font-size: 12.5px;
    color: #e6e0e0;
    > .name {
      font-size: 16px;
      color: #fbfbfb;
      font-weight: normal;
    }
    >.enm{
      font-size: 11px;
      color: #ebebeb;
      margin-bottom: 6px;
    }
  }
  > .movie-img {
    position: relative;
    img {
      width: 96.5px;
      height: 135px;
    }
    &:after {
      content: "▶";
      color: #fff;
      font-size: 14px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1px solid #fff;
      position: absolute;
      right: 12px;
      bottom: 8px;
      line-height: 22px;
      text-align: center;
      background-color: #333;
      opacity: 0.8;
    }
  }
}

.buy-btn {
  width: calc(100% - 30px);
  margin: 10px 15px;
  padding: 9px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  border: none;
  background-color: #e54847;
}
.movie-intro {
  text-align: center;
  width: 100%;
  padding: 3px 16px;
  > p {
    font-size: 14px;
    color: #666;
    overflow: hidden;
  }
  > .btn {
    width: 16px;
  }
}
.overflow {
  max-height: 60px;
}
</style>