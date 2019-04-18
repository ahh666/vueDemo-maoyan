<template>
   <div class="comming">
       <h3>即将上映的电影</h3>
       <button @click="$router.push({name:'movieDetail'})">点击进入电影详情页</button>
       </div>
</template>
   
<script>
export default {
   name:'comming'
}
</script>

<style scoped>
   
</style>
