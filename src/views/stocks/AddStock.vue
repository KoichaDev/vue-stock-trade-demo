<template>
	<section>
		<h1>Buy Stocks!</h1>

		<pre>
			{{ stockCollection }}
		</pre
		>
		<form ref="form" @submit.prevent="submit" class="container">
			<div class="row">
				<form-group-input
					:id="'bmw'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrices.bmw"
					v-model="enteredValues.bmw"
				>
					<button type="submit" class="btn btn-primary">Buy</button>
				</form-group-input>

				<form-group-input
					:id="'google'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrices.google"
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
					:label="stockPrices.apple"
					v-model="enteredValues.apple"
				>
					<button type="submit" class="btn btn-primary">Buy</button>
				</form-group-input>

				<form-group-input
					:id="'twitter'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrices.twitter"
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
import * as types from '@/stores/modules/funds/funds.types';
import * as stockTypes from '@/stores/modules/stocks/stocksTypes';
import FormGroupInput from '@/common/forms/FormGroupInput.vue';
import { sumTotalStockPrices, calculatePurchasedStocks } from './helpers/stocksUtils';
import { convertObjectToArray, filterOutEnteredValueZeroObject } from './helpers/objectUtils';

export default {
	data() {
		return {
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
			stockPrices: stockTypes.STOCKS_PRICES,
			stockCollection: types.STOCK_COLLECTION,
		}),
	},
	methods: {
		...mapActions({
			payStock: types.BUY_STOCK,
			addStockCollection: types.ADD_STOCK_COLLECTION,
		}),
		submit() {
			// prettier-ignore
			const enteredValuesNotContainsZeroValue = Object.values(this.enteredValues).some((value) => value !== 0);
			const purchasedStocksObj = calculatePurchasedStocks(this.stockPrices, this.enteredValues);
			const sumTotalValue = sumTotalStockPrices(purchasedStocksObj);
			const currentFunds = this.funds;

			if (currentFunds < sumTotalValue) {
				return alert('You do not have enough funds');
			}

			this.payStock(sumTotalValue);

			if (enteredValuesNotContainsZeroValue === true) {
				const filteredValues = filterOutEnteredValueZeroObject(this.enteredValues);

				this.addStockCollection(convertObjectToArray(filteredValues));
			}

			// Reset the form
			this.$refs.form.reset();
		},
	},
};
</script>

<style scoped></style>
