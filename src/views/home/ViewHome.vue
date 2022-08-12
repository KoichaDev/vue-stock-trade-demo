<template>
	<section class="[ home ] [ mt-5 ]">
		<h1 class="fs-1">Trade of your Portfolio</h1>

		<div>
			<p>You may Save & Load Your Data</p>
			<p>Click the button on the navbar 'End Day' to begin a new day!</p>
		</div>

		<hr />

		<p class="fs-2">
			<strong>Your Funds: ${{ funds }}</strong>
		</p>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '@/stores/modules/funds/funds.types';

export default {
	name: 'portfolio-view',
	computed: {
		...mapGetters({
			funds: types.CURRENT_FUND,
		}),
	},
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
