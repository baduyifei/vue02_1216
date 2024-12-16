<!-- @format -->

<template>
	<!--  -->
	<div id="app">
		<div>
			你好,{{ info }}
			<p>v-bind:是行内属性绑定</p>
			<p>v-on:是事件绑定</p>
			<button v-on:click="fn">点击按钮</button>
		</div>
	</div>
</template>

<script>
	export default {
		//
		data() {
			return {
				info: '我是展示的数据',
			};
		},
		methods: {
			fn() {
				console.log('页面逻辑');
				this.info = 'aaaa';
			},
		},
	};
</script>

<style>
	/* 1 */
</style>
