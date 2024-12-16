<!-- @format -->

<template>
	<div>
		<!-- <h1>获取事件对象</h1>
		<a @click="fn" href="baidu.com">阻止跳转</a>
		<a @click="fnn" href="baidu.com">阻止跳转222</a> -->
		<div class="father" @click="fatherClick">
			father
			<div class="son" @click.stop="sonClick">son</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				uname: '张三',
			};
		},
		methods: {
			// fn(e) {
			// 	e.preventDefault();
			// },
			// fnn(e) {
			// 	e.preventDefault();
			// },
			sonClick(e) {
				e.currentTarget.style.backgroundColor = 'red';
				console.log('son被点击了');
			},
			fatherClick(e) {
				e.currentTarget.style.backgroundColor = 'red';
				console.log('father被点击了');
			},
		},
	};
</script>

<style>
	.father {
		width: 300px;
		height: 300px;
		background-color: pink;
	}
	.son {
		width: 100px;
		height: 100px;
		background-color: blue;
	}
</style>
