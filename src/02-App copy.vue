<!-- @format -->

<template>
	<div>
		<!--  -->
		<p>商品数量: {{ num }}</p>
		<button v-on:click="add(10)">+N</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num: 10,
			};
		},
		methods: {
			add(count) {
				this.num = this.num + count;
				//  this.num += 5;
			},
		},
	};
</script>

<style></style>
