<template>
	<section class="[ home ] [ mt-5 ]">
		<h1 class="fs-1">Trade of your Portfolio</h1>

		<div>
			<p>You may Save & Load Your Data</p>
			<p>Click the button on the navbar 'End Day' to begin a new day!</p>
		</div>

		<hr />

		<p class="fs-2">
			<strong>Your Funds: ${{ currentFunds }}</strong>
		</p>
	</section>
</template>

<script>
export default {
	name: 'HomeView',
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
