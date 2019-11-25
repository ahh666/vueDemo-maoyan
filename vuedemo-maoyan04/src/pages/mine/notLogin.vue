<template>
  <div class="box">
    <p>请先登录！！</p>
    <button class="login" @click="$router.push('/login')">去登录</button>
  </div>
</template>

<script>
export default {
  name: 'notLogin'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.box {
  @include flex-box(column, space-around);
}
.login {
  margin-top: 16px;
  padding: 5px 30px;
  border: 1px solid #4fa6f7;
  border-radius: 3px;
  background: #fff;
}
</style>