import Buefy from 'buefy';
import VueGtag from 'vue-gtag';
import DefaultLayout from '~/layouts/Default.vue';
import store from './store';
import './assets/scss/bulma-overrides.scss';
import '@mdi/font/css/materialdesignicons.css';
require('typeface-rubik');

export default function(Vue, { appOptions, router, head, isClient }) {
	appOptions.store = store;

	Vue.use(
		VueGtag,
		{
			config: {
				id: '', // ADD GOOGLE ANALYTICS ID HERE
			},
			pageTrackerTemplate(to) {
				return {
					page_title: to.path,
					page_path: to.path,
				};
			},
		},
		router
	);

	Vue.use(Buefy);

	Vue.component('Layout', DefaultLayout);
}
