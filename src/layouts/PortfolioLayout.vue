<template>
	<Fragment>
		<view-home></view-home>
	</Fragment>
</template>

<script>
import ViewHomeVue from '@/views/home/ViewHome.vue';

export default {
	name: 'home-layout',
	components: {
		'view-home': ViewHomeVue,
	},
};
</script>

<style scoped></style>
