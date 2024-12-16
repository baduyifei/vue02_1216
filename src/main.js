/** @format */

import Vue from 'vue';
import AppVue from './App.vue';

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(AppVue),
}).$mount('#myApp');
