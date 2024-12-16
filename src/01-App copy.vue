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
				uname: '张三',
			};
		},

		methods: {
			fn() {
				//
			},
		},
	};
</script>

<style>
	/* 1 */
</style>
