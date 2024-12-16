<!-- @format -->

<template>
	<div>
		<h1>HELLO , WORLD !</h1>
		<h1>{{ msg }}</h1>
		<button @click="fn">点击翻转</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '你好张三',
			};
		},
		methods: {
			fn() {
				const arr = this.msg.split('');
				const newArr = arr.reverse();
				const msg2 = newArr.join('');
				this.msg = msg2;
			},
		},
	};
</script>

<style>
	/* CSS */
</style>
