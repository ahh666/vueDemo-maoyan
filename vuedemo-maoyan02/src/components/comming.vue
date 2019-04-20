<template>
  <div>
    <div class="hopeful">
      <p>近期最受期待</p>
      <div class="img-list" ref="imglist">
        <div class="hopeful-list" v-for="(item,index) in hopefulList" :key="index">
          <div class="hope-img">
            <img :src="item.img.replace('w.h','128.180')" alt>
            <p class="wish">{{item.wish}}想看</p>
          </div>
          <div class="hopeful-info">
            <p class="name">{{item.nm}}</p>
            <p class="showTime">{{item.comingTitle}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="comming">
      <!-- :mitem="h_item" ==> 通过属性绑定向子组件动态传值 -->
      <movie-list v-for="(c_item,index) in comingList" :key="index" :mitem="c_item"></movie-list>
    </div>
  </div>
</template>

<script>
import movieList from "./movieList";
import axios from "axios";

export default {
  name: "coming",
  components: {
    movieList
  },
  data() {
    return {
      comingList: [],
      hopefulList: [],
      imglistMarginLeft: 0,
      sumMarginLeft: 0
    };
  },
  created() {
    function getComingList() {
      return axios.get(
        "http://www.softeem.xin/maoyanApi/ajax/comingList?ci=57&token=&limit=10"
      );
    }

    function getHopefulList() {
      return axios.get(
        "http://www.softeem.xin/maoyanApi/ajax/mostExpected?ci=57&limit=10&offset=0&token="
      );
    }
    axios.all([getComingList(), getHopefulList()]).then(
      axios.spread((comRes, hopeRes) => {
        this.comingList = comRes.data.coming;
        this.hopefulList = hopeRes.data.coming;
      })
    );
  }
};
</script>

<style scoped>
@import "../assets/css/movie-list.css";

.hopeful {
  padding: 10px 0px 0px 15px;
  margin: 0px 20px 10px 0px;
  border-bottom: 8px solid #eee;
}

.hopeful > p {
  font-size: 14px;
  margin-bottom: 10px;
}

.img-list {
  height: 166px;
  overflow: hidden;
  display: flex;
  flex-direction: row;

  /* 手指左右滑动 */
  display: -webkit-box;
  overflow-x: auto;
  /*适应苹果*/
  -webkit-overflow-scrolling: touch;
}
/*隐藏掉滚动条*/
.img-list::-webkit-scrollbar {
  display: none;
}

.hopeful-list {
  width: 86px;
  height: 166px;
  margin-right: 12px;
}

.hope-img img {
  width: 85px;
  height: 115px;
}

.hope-img {
  position: relative;
}

.hope-img:before {
  content: "♡";
  color: #ccc;
  font-size: 14px;
  text-align: center;
  line-height: 28px;
  width: 28px;
  height: 28px;
  background-color: rgba(61, 63, 71, 0.6);
  border-bottom-right-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
}

.hope-img > .wish {
  position: relative;
  font-weight: bold;
  font-size: 12px;
  color: #faaf00;
  margin: -40px 0px 6px 0px;
  padding: 20px 0px 0px 3px;
  background: linear-gradient(rgba(77, 77, 77, 0), #000);
}

.hopeful-info .name {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.hopeful-info .showTime {
  font-size: 12px;
  color: #888;
}
</style>
