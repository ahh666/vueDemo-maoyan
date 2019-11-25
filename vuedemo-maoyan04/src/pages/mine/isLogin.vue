<template>
  <div class="box">
    <div class="head">
      <img :src="userHeadImg">
      <p>{{userNick}}</p>
      <p>当前状态：{{isLogin === 1 ? '已登录' : '未登录'}}</p>
    </div>
    <button @click="loginOut">退 出</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'isLogin',
  computed: {
    ...mapState(['isLogin', 'userNick', 'userHeadImg', 'likeList'])
  },
  methods: {
    ...mapMutations(['loginOut'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.box {
  padding: 0 6%;
  .head {
    @include flex-box(column);
    > img {
      width: 110px;
      border-radius: 50%;
    }
    > p {
      font-weight: 600;
      font-size: 1.1em;
      margin-top: 16px;
    }
  }
  button {
    color: #fff;
    width: 88%;
    border: none;
    outline: none;
    margin-top: 12px;
    padding: 10px 0;
    margin-top: 22px;
    border-radius: 5px;
    background-color: #f03d37;
    position: fixed;
    bottom: 100px;
  }
}
</style>