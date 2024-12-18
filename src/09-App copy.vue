<!-- @format -->

<template>
	<div>
		<!--  -->
		<h1>{{ title }}</h1>
		<h3>{{ channel }}</h3>
		<button @click="edit">编辑</button>
		<hr />
		<div>
			标题: <input type="text" v-model="myTitle" /> <br />
			频道: <input type="text" v-model="myChannel" /><br />
			<br />
			<button @click="cancel">取消</button>
			<button @click="save">确定</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'xx标题',
				channel: 'xx频道',
				myTitle: '',
				myChannel: '',
			};
		},
		methods: {
			edit() {
				this.myTitle = this.title;
				this.myChannel = this.channel;
			},
			save() {
				this.title = this.myTitle;
				this.channel = this.myChannel;
				this.myTitle = '';
				this.myChannel = '';
			},
			cancel() {
				this.myTitle = '';
				this.myChannel = '';
			},
		},
	};
</script>

<style>
	/*  */
</style>
