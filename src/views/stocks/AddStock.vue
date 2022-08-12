<template>
	<section>
		<h1>Buy Stocks!</h1>

		<form @submit.prevent="submit" class="container">
			<div class="row">
				<form-group-number-input
					:id="'bmw'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.bmw"
					v-model="enteredBMWValue"
				></form-group-number-input>

				<form-group-number-input
					:id="'google'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.google"
					v-model="enteredGoogleValue"
				></form-group-number-input>
			</div>

			<div class="row">
				<form-group-number-input
					:id="'apple'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.apple"
					v-model="enteredAppleValue"
				></form-group-number-input>

				<form-group-number-input
					:id="'twitter'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.twitter"
					v-model="enteredTwitterValue"
				></form-group-number-input>
			</div>
		</form>
	</section>
</template>

<script>
import { STOCK_DATA } from './data/stock-data';

import FormGroupNumberInput from '@/common/forms/FormGroupNumberInput.vue';

export default {
	data() {
		return {
			...STOCK_DATA,
			enteredBMWValue: 0,
			enteredGoogleValue: 0,
			enteredAppleValue: 0,
			enteredTwitterValue: 0,
		};
	},
	components: {
		FormGroupNumberInput,
	},
	methods: {
		submit() {},
	},
};
</script>

<style scoped></style>
