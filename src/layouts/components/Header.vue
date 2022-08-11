<template>
	<nav class="navbar">
		<router-link class="text-decoration-none" to="/">Home</router-link>
		<router-link class="text-decoration-none" to="/Portfolio">Portfolio</router-link>
		<router-link class="text-decoration-none" to="/stocks">Stocks</router-link>

		<button class="[ btn btn-danger btn-sm ] [ ms-auto ]" type="button">End Day</button>
		<p>
			<strong> Funds: </strong>
		</p>
	</nav>
</template>

<script>
export default {
	name: 'navbar-component',
};
</script>

<style lang="scss" scoped>
.navbar {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 2em;
	padding: 2.5em;
	background-color: #f5f5f5;

	.navbar__button {
		margin-left: auto;
	}
}
</style>
