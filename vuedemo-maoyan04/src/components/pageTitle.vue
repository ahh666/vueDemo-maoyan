<template>
  <div class="pageTitle">
    <div class="goback" v-if='showBack' @click="$router.back()">
      <img src="@/assets/img/back.png">
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
	name: 'pageTitle',
	props: ['showBack'],
	data() {
		return {

		}
	}
}

</script>

<style lang="scss" scoped>
.pageTitle {
	height: 51px;
	width: 100%;
	background-color: rgb(229, 72, 71);
	text-align: center;
	line-height: 51px;
	color: #fff;
	font-size: 1.1em;

	>.goback {
		position: absolute;
		left: 12px;
		top: 8px;

		>img {
			width: 35px;
		}
	}
}

</style>
