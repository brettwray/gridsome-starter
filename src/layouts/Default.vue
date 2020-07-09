<template>
	<div class="default-layout">
		<header>
			<p>header</p>
		</header>
		<main>
			<p>main</p>
		</main>
		<footer>
			<p>footer</p>
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

<style lang="scss">
.default-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;

	main {
		flex: 1;
	}
}
</style>
