<template>
	<header>
		<nav class="navbar">
			<router-link class="text-decoration-none" to="/"
				>💰<strong> Stock trading </strong></router-link
			>
			<router-link class="text-decoration-none" to="/portfolio">Portfolio</router-link>
			<router-link class="text-decoration-none" to="/stocks">Stocks</router-link>

			<button type="button" class="[ btn btn-danger btn-sm ] [ ms-auto ]" @click="endDay">
				End Day
			</button>
			<p>
				<strong class="text-secondary"> Funds: ${{ funds }} </strong>
			</p>
		</nav>
	</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import * as fundTypes from '@/stores/modules/funds/funds.types';
import * as stockTypes from '@/stores/modules/stocks/stocksTypes';

export default {
	name: 'navbar-component',
	computed: {
		...mapGetters({
			funds: fundTypes.CURRENT_FUND,
		}),
	},
	methods: {
		...mapActions({
			endDay: stockTypes.END_DAY_STOCKS_PRICES,
		}),
	},
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
