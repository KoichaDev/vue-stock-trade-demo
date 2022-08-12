<template>
	<section>
		<h1>Buy Stocks!</h1>

		<form @submit.prevent="submit" class="container">
			<div class="row">
				<form-group-input
					:id="'bmw'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.bmw"
					v-model="enteredBMWValue"
				></form-group-input>

				<form-group-input
					:id="'google'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.google"
					v-model="enteredGoogleValue"
				></form-group-input>
			</div>

			<div class="row">
				<form-group-input
					:id="'apple'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.apple"
					v-model="enteredAppleValue"
				></form-group-input>

				<form-group-input
					:id="'twitter'"
					:type="'number'"
					:class="'[ col-6 p-1 ]'"
					:label="stockPrice.twitter"
					v-model="enteredTwitterValue"
				></form-group-input>
			</div>
		</form>
	</section>
</template>

<script>
import { STOCK_DATA } from './data/stock-data';

import FormGroupInput from '@/common/forms/FormGroupInput.vue';

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
		FormGroupInput,
	},
	methods: {
		submit() {},
	},
};
</script>

<style scoped></style>
