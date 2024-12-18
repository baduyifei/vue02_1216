<!-- @format -->

<template>
	<div>
		<button @click="key = !key">{{ key ? '折叠' : '展开' }}</button>
		<div class="box1" v-show="key"></div>
		<div class="box2" v-if="key"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				key: true,
			};
		},
		methods: {},
	};
</script>

<style>
	.box1 {
		width: 300px;
		height: 300px;
		background-color: pink;
		margin-bottom: 5px;
	}
	.box2 {
		width: 300px;
		height: 300px;
		background-color: blue;
	}
</style>
