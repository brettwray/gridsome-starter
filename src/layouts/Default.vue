<template>
	<div class="default-layout">
		<header class="default-layout__nav">
			<headerComponent />
		</header>
		<main class="default-layout__main has-background-white-ter">
			<section class="section is-large">
				<div class="container">
					<article class="message">
						<div class="message-header">
							<p class="title has-text-white">👋 Welcome.</p>
						</div>
						<div class="message-body has-background-white">
							<p>
								This is just a starter repo that I created
								because I like to use
								<a
									class="has-text-primary"
									href="https://gridsome.org/"
									>Gridsome</a
								>
								on small projects and I was tired of having to
								set it up everytime. The
								<a
									href="https://github.com/brettwray/gridsome-starter"
									class="has-text-primary"
									>readme</a
								>
								pretty much outlines everything that you should
								need to know, there's some configuration options
								that will need to be changed, and you may also
								want to change some of the packages used. But
								for the most part it's a pretty sweet set up.
							</p>
						</div>
					</article>
				</div>
			</section>
		</main>
		<footer class="default-layout__footer has-background-dark">
			<div class="container is-fluid">
				<p class="has-text-centered has-text-white">
					It would be weird if this wasn't here 🤷🏻‍♂️.
				</p>
			</div>
		</footer>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import headerComponent from '~/components/partials/header';
export default {
	components: {
		headerComponent,
	},
};
</script>

<style lang="scss">
.default-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;

	&__main {
		flex: 1;
	}

	&__footer {
		padding: 10px 0;
	}
}
</style>
