<template>
	<section>
		<h1>Buy Stocks!</h1>

		<form ref="form" @submit.prevent="submit" class="container">
			<div class="row">
				<form-group-input
					:id="'bmw'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.bmw"
					v-model="enteredValues.bmw"
				>
					<button type="submit" class="btn btn-primary">Buy</button>
				</form-group-input>

				<form-group-input
					:id="'google'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.google"
					v-model="enteredValues.google"
				>
					<button type="submit" class="btn btn-primary">Buy</button>
				</form-group-input>
			</div>

			<div class="row">
				<form-group-input
					:id="'apple'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.apple"
					v-model="enteredValues.apple"
				>
					<button type="submit" class="btn btn-primary">Buy</button>
				</form-group-input>

				<form-group-input
					:id="'twitter'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.twitter"
					v-model="enteredValues.twitter"
				>
					<button type="submit" class="btn btn-primary">Buy</button>
				</form-group-input>
			</div>
		</form>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { STOCK_DATA } from './data/stock-data';
import * as types from '@/stores/modules/funds/funds.types';
import FormGroupInput from '@/common/forms/FormGroupInput.vue';
import { calculateTotalStockPrices } from './helpers/stocksUtils';

export default {
	data() {
		return {
			...STOCK_DATA,
			enteredValues: {
				bmw: 0,
				google: 0,
				apple: 0,
				twitter: 0,
			},
		};
	},
	components: {
		FormGroupInput,
	},
	computed: {
		...mapGetters({
			funds: types.CURRENT_FUND,
		}),
	},
	methods: {
		...mapActions({
			buyStock: types.BUY_STOCK,
		}),
		submit() {
			const totalValue = calculateTotalStockPrices(this.enteredValues);
			const currentFunds = this.funds;

			if (currentFunds < totalValue) {
				return alert('You do not have enough funds');
			}

			this.buyStock(totalValue);

			// Reset the form
			this.$refs.form.reset();
		},
	},
};
</script>

<style scoped></style>
