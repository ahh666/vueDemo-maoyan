<template>
  <div>
    <page-title :showBack='true'>登 录</page-title>
    <div class="content">
      <input type="text" placeholder="用户名" v-model="user"><br>
      <input type="password" placeholder="密码" v-model="password"><br>
      <button @click="login">登 录</button>
      <p class="register">没有账号？<span @click="$router.push('register')">点我注册</span></p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      user: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['testUserInfo']),
  },
  methods: {
    ...mapMutations(['loginIn']),
    login() {
      if(!this.user.trim()) return alert('用户名不能为空！');
      if(!this.password) return alert('请输入密码！');
      let testInfo = this.testUserInfo(this.user)
      if (!testInfo) return alert('用户名不存在！');
      if (this.user === testInfo.account && this.password === testInfo.password) {
        this.loginIn(testInfo)
        this.$router.push('/')
      } else {
        alert('密码错误！！')
        // 可选项：输入错误后清空用户名和密码
        // this.user = ''
        // this.password = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0 5%;
  input, button {
    width: 100%;
    border: none;
    outline: none;
    margin-top: 12px;
  }
  > input {
    padding: 12px 10px;
    border-bottom: 1px solid #bfbfbf;
  }
  > button {
    color: #fff;
    padding: 10px 0;
    margin-top: 22px;
    border-radius: 5px;
    background-color: #f03d37;
  }
  > .register {
    margin-top: 12px;
    font-size: 14px;
    color: #888;
    > span {
      color: #f03d37;
    }
  }
}
</style>