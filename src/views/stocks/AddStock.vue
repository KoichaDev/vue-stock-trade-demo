<template>
	<section>
		<h1>Buy Stocks!</h1>
		<form @submit.prevent="">
			<label for="bmw"
				>BMW
				<span>(Price: {{ stockPrice.bmw }})</span>
			</label>
			<input type="number" id="bmw" placeholder="quantity" />

			<label for="google">
				<span>(Price {{ stockPrice.google }})</span>
			</label>
			<input type="number" id="google" placeholder="quantity" />

			<label for="apple">
				<span>(Price {{ stockPrice.apple }})</span>
			</label>
			<input type="number" id="apple" placeholder="quantity" />

			<label for="twitter">
				<span>(Price {{ stockPrice.twitter }})</span>
			</label>
			<input type="number" id="twitter" placeholder="quantity" />
		</form>
	</section>
</template>

<script>
import { STOCK_DATA } from './data/stock-data';

export default {
	data() {
		return {
			...STOCK_DATA,
		};
	},
};
</script>

<style scoped></style>
