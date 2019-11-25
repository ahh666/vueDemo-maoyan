<template>
  <div class="nav">
    <ul class="icon">
      <li @click="changeTab('film')">
        <icon :name="'&#xe6af;'" :iconStyle="activeTab === 'film'? iconStyleActive : iconStyle"></icon>
        <span class="text">电影</span>
      </li>
      <li @click="changeTab('cinema')">
        <icon :name="'&#xe61d;'" :iconStyle="activeTab === 'cinema'? iconStyleActive : iconStyle"></icon>
        <span class="text">影院</span>
      </li>
      <li @click="changeTab('mine')">
        <icon :name="'&#xe615;'" :iconStyle="activeTab === 'mine'? iconStyleActive : iconStyle"></icon>
        <span class="text">我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pageFooter',
  data() {
    return {
      activeTab: 'film',
      iconStyle: {fontSize: '20px', color: '#696969'},
      iconStyleActive: {fontSize: '20px', color: '#f03d37'}
    }
  },
  methods: {
    changeTab(type) {
      this.activeTab = type
      this.$emit('chooseMenu', type)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
ul{
  @include flex-box(row, space-between);
  li{
    @include flex-box(column, space-between);
    > .text {
      color: #696969;
      font-size: 10px;
    }
  }
}
</style>