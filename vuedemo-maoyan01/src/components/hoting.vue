<template>
  <div class="hoting">
    <h3>正在热映的电影</h3>
    <button @click='$router.push({name:"movieDetail"})'>点击进入电影详情页</button>
  </div>
</template>


<script>
// 导出组件
export default {
	name: 'hoting'
}

</script>

<style scoped>
</style>
