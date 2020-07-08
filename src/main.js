// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Buefy from 'buefy';
import DefaultLayout from '~/layouts/Default.vue';
import './assets/scss/bulma-overrides.scss';
import '@mdi/font/css/materialdesignicons.css';

export default function(Vue, { router, head, isClient }) {
	Vue.use(Buefy);
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);
}
