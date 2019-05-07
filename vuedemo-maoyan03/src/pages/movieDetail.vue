<template>
  <div>
    <loading v-if="!isReady"></loading>
    <div v-if="isReady">
      <page-title :showBack='true'>{{movieDetail.nm}}</page-title>
      <div class="movie-header">
        <!-- 设置背景模糊 -->
        <div class="bg-last">
          <img :src="movieDetail.img.replace('w.h','128.180')">
        </div>
        <div class="bg-fliter"></div>
        <!-- 左侧海报 -->
        <div class="movie-img">
          <img @click="showPlayVD=true" :src="movieDetail.img.replace('w.h','128.180')">
        </div>
        <ul class="movie-info">
          <li class="name">{{movieDetail.nm}}</li>
          <li class="enm">{{movieDetail.enm}}</li>
          <li v-if="movieDetail.globalReleased && movieDetail.sc!==0" class="score">
            观众评
            <span>{{movieDetail.sc}}</span>
          </li>
          <li style="font-size: 14px;color: #888" v-if="movieDetail.globalReleased && movieDetail.sc==0">暂无评分</li>
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

      <!-- 播放电影宣传片 -->
      <div class="play-vd" v-if="showPlayVD" @click="showPlayVD=false">
        <video controls autoplay :src="movieDetail.vd" width="100%"> </video>
      </div>
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
      isReady: false,
      movieDetail: null,
      btnType: true,
      downBtnSrc,
      upBtnSrc,
      showPlayVD: false,
    };
  },
  created() {
    let id = this.$route.query.id;
    axios
      .get("http://www.softeem.xin/maoyanApi/ajax/detailmovie?movieId=" + id)
      .then(res => {
        this.movieDetail = res.data.detailMovie;
        this.isReady = true;
      });
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

  >.bg-last {
    position: absolute;
    width: 100%;
    height: 165px;
    z-index: -2;
    overflow: hidden;

    >img {
      width: 100%;
      height: 100%;
      filter: blur(27px);
    }
  }

  >.bg-fliter {
    height: 165px;
    width: 100%;
    background-color: #40454d;
    opacity: 0.55;
    position: absolute;
    z-index: -1;
  }

  >.movie-info {
    height: 135px;
    font-size: 12.5px;
    color: #e6e0e0;

    >.name {
      font-size: 16px;
      color: #fbfbfb;
      font-weight: normal;
    }

    >.enm {
      font-size: 11px;
      color: #ebebeb;
      margin-bottom: 6px;
    }
  }

  >.movie-img {
    margin-left: 15px;
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

  >p {
    font-size: 14px;
    color: #666;
    overflow: hidden;
  }

  >.btn {
    width: 16px;
  }
}

.overflow {
  max-height: 60px;
}

.play-vd {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .7);

  >video {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}

</style>
