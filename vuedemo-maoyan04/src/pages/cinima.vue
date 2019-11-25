<template>
  <div class="box">
    <div v-if="isLogin">
      登陆成功！假装这里有很多影院信息
    </div>
    <div v-else>
      这里登陆后才能查看哦~
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  computed: {
    ...mapState(['isLogin'])
  },
}
</script>

<style>

</style>