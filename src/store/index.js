import Vue from 'vue';
import Vuex from 'vuex';
// Import modules below.
import data from './modules/data';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		data,
	},
});
