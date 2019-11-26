<template>
  <div>
    <div class="top">
      <page-title >猫眼电影</page-title>
      <ul v-if="showMainType==='film'" class="topNav">
        <li :class="[showHot==1?'active':'']" @click="showHot=1">正在热映</li>
        <li :class="[showHot==0?'active':'']" @click="showHot=0">即将上映</li>
      </ul>
    </div>
    <div class="main">
      <div v-if="showMainType==='film'">
        <hoting v-show="showHot==1"></hoting>
        <comming v-show="showHot==0"></comming>
      </div>
      <div v-else-if="showMainType==='mine'">
        <mine></mine>
      </div>
      <div v-else>
        <cinima></cinima>
      </div>
    </div>
    <div class="footer-nav">
      <page-footer
        @chooseMenu="chooseMenu"
      ></page-footer>
    </div>
  </div>
</template>

<script>
import hoting from '@/components/hoting'
import comming from '@/components/comming'
import cinima from '@/pages/cinima'
import mine from '@/pages/mine'

export default {
  components: {
    hoting, comming, cinima, mine
  },
  data() {
    return {
      showHot: 1,
      showMainType: 'film'
    }
  },
  methods: {
    chooseMenu(val) {
      this.showMainType = val
    }
  }
}
</script>

<style scoped>
.top{
  width: 100%;
  position: fixed;
  z-index: 9;
}
.topNav{
  height: 44px;
  line-height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.topNav li{
  height: 100%;
  cursor: pointer;
}
.active{
  color: rgb(229, 72, 71);
  border-bottom: 2px solid rgb(229, 72, 71);
}
.main{
  padding-top: 100px;
}
.footer-nav {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  padding: 8px 40px;
  background-color: #fff;
  border-top: 1px solid #dbdbdb;
}
</style>
