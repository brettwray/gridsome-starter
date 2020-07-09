<template>
	<b-navbar>
		<template slot="brand">
			<b-navbar-item tag="router-link" :to="{ path: '/' }">
				<g-image
					src="~/assets/images/logo-circle-light.svg"
					width="48px"
				/>
			</b-navbar-item>
		</template>
		<template slot="end">
			<b-navbar-dropdown label="Gridsome Resources" hoverable>
				<b-navbar-item href="https://gridsome.org/">
					Gridsome Site
				</b-navbar-item>
				<b-navbar-item href="https://github.com/gridsome/gridsome">
					Gridsome Github
				</b-navbar-item>
				<b-navbar-item href="https://gridsome.org/plugins/">
					Gridsome Plugins
				</b-navbar-item>
			</b-navbar-dropdown>
			<b-navbar-dropdown label="Packages Used" hoverable>
				<b-navbar-item href="https://www.netlifycms.org/">
					Netlify CMS
				</b-navbar-item>
				<b-navbar-item href="https://buefy.org/">
					Buefy
				</b-navbar-item>
				<b-navbar-item
					href="https://gridsome.org/plugins/gridsome-plugin-netlify-cms"
				>
					Gridsome Plugin Netlify CMS
				</b-navbar-item>
				<b-navbar-item
					href="https://gridsome.org/plugins/@gridsome/transformer-remark"
				>
					Gridsome Transformer Remark
				</b-navbar-item>
				<b-navbar-item
					href="https://gridsome.org/plugins/@gridsome/source-filesystem"
				>
					Gridsome Source Filesystem
				</b-navbar-item>
				<b-navbar-item
					href="https://gridsome.org/plugins/@gridsome/plugin-sitemap"
				>
					Gridsome Sitemap
				</b-navbar-item>
				<b-navbar-item
					href="https://gridsome.org/plugins/@gridsome/plugin-critical"
				>
					Gridsome Critical CSS
				</b-navbar-item>
				<b-navbar-item
					href="https://github.com/MatteoGabriele/vue-gtag"
				>
					Vue G-Tag
				</b-navbar-item>
				<b-navbar-item href="https://vuex.vuejs.org/">
					VueX
				</b-navbar-item>
				<b-navbar-item href="https://dev.materialdesignicons.com/">
					MDI Icons
				</b-navbar-item>
				<b-navbar-item href="#">
					There's probably more...
				</b-navbar-item>
			</b-navbar-dropdown>
			<b-navbar-item tag="div">
				<p>@ Me Bro..</p>
			</b-navbar-item>
			<b-navbar-item tag="div">
				<div class="buttons">
					<a href="https://github.com/brettwray/">
						<b-icon icon="github" size="is-large" />
					</a>
				</div>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>
