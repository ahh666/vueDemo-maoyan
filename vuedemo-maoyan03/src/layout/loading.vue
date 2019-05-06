<template>
  <div>
    <div class="loading-bg">
      <img class="loading" src="http://img02.sogoucdn.com/app/a/200678/15053088147918.gif">
      <p>你的网络有点慢呢</p>
    </div>
  </div>
</template>
   
<script>
export default {
  name: "loading"
};
</script>

<style lang='scss' scoped>
.loading-bg {
  text-align: center;
  position: fixed;
  padding: 20px;
  background-color: rgba(32, 32, 32, 0.493);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  z-index: 9;
  > .loading {
    width: 60px;
    height: 60px;
  }
  > p {
    color: #fff;
  }
}
</style>
