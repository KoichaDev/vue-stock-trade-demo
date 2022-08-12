<template>
	<header>
		<nav class="navbar">
			<p>💰<strong> Stock trading </strong></p>
			<router-link class="text-decoration-none" to="/">Portfolio</router-link>
			<router-link class="text-decoration-none" to="/stocks">Stocks</router-link>

			<button class="[ btn btn-danger btn-sm ] [ ms-auto ]" type="button">End Day</button>
			<p>
				<strong> Funds: </strong>
			</p>
		</nav>
	</header>
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
