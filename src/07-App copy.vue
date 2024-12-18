<!-- @format -->

<template>
	<div>
		<!-- 姓名: <input type="text"  :value="uname" /> <br /> -->
		姓名: <input type="text" v-model="uname" /> <br />
		<!-- 密码: <input type="password"  :value="pwd" /><br /> -->
		密码: <input type="password" v-model="pwd" /><br />
		性别: 男<input type="radio" v-model="gender" /> 女 <input type="radio" /> <br />
		爱好: 打球<input type="checkbox" v-model="hobby" /> <br />
		<textarea v-model="uname"></textarea>
		<select v-model="num">
			<option value="1">北京</option>
			<option value="2">上海</option>
			<option value="3">深圳</option>
		</select>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				uname: '张三',
				pwd: '123456',
				gender: true,
				hobby: true,
				num: '2',
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
	/*  */
</style>
