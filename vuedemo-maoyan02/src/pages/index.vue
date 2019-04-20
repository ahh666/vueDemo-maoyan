<template>
  <div>
    <div class="top">
      <div class="pageTitle">猫眼电影</div>
      <ul class="topNav">
        <li :class="[showHot==1?'active':'']" @click="showHot=1">正在热映</li>
        <li :class="[showHot==0?'active':'']" @click="showHot=0">即将上映</li>
      </ul>
    </div>
    <div class="main">
      <hoting v-show="showHot==1"></hoting>
      <comming v-show="showHot==0"></comming>
    </div>

  </div>
</template>

<script>
import hoting from '@/components/hoting'
import comming from '@/components/comming'

export default {
  name: "index",
  components: {
    hoting,comming
  },
  data() {
    return {
      showHot:1
    }
  }
};
</script>

<style scoped>
.top{
  width: 100%;
  position: fixed;
  z-index: 9;
}
.pageTitle{
  height: 51px;
  width: 100%;
  background-color: rgb(229, 72, 71);
  text-align: center;
  line-height: 51px;
  color: #fff;
  font-size: 1.1em;
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
</style>
