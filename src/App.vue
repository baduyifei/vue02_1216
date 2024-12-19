<!-- @format -->

<template>
	<div>
		<button @click="add">点击新增一个成员</button>
		<ul>
			<li v-for="(item, i) in list" :key="i">
				姓名: {{ item.uname }} <br />
				年龄: {{ item.age }} <br />
				<hr />
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{id: 1, uname: '张三', age: 18},
					{id: 2, uname: '李四', age: 66},
					{id: 3, uname: '王五', age: 88},
				],
			};
		},
		methods: {
			add() {
				const one = {id: Math.random(), uname: '444', age: 18};
				this.list.splice(1, 0, one);
			},
		},
	};
</script>

<style>
	li {
		background-color: pink;
		font-size: 30px;
	}
</style>
