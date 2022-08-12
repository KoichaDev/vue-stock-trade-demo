<template>
	<Fragment>
		<view-stocks></view-stocks>
	</Fragment>
</template>

<script>
import ViewStocks from '@/views/stocks/AddStock.vue';

export default {
	name: 'stocks-layout',
	components: {
		'view-stocks': ViewStocks,
	},
};
</script>

<style lang="scss" scoped></style>
