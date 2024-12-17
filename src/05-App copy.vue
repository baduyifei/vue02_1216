<!-- @format -->

<template>
	<div>
		<button @click="fn">{{ msg }}</button>
		<div class="box1" v-show="controller"></div>
		<div class="box2" v-if="controller"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				controller: true,
				msg: '折叠',
			};
		},
		methods: {
			fn() {
				if (this.controller) {
					this.controller = false;
					this.msg = '展开';
				} else {
					this.controller = true;
					this.msg = '折叠';
				}
			},
		},
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
