<template>
	<div class="layout">
		<header class="header">
			<strong>
				<g-link to="/">{{ $static.metadata.siteName }}</g-link>
			</strong>
			<nav class="nav">
				<g-link class="nav__link has-text-danger is-size-1" to="/"
					>Home</g-link
				>
				<g-link class="nav__link" to="/about/">About</g-link>
				<b-icon icon="facebook" />
			</nav>
		</header>
		<slot />
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss"></style>
