<template>
	<Fragment>
		<layout-header></layout-header>
		<view-home></view-home>
	</Fragment>
</template>

<script>
import Header from '@/layouts/components/Header.vue';
import ViewHomeVue from '@/views/home/ViewHome.vue';

export default {
	name: 'home-layout',
	components: {
		'layout-header': Header,
		'view-home': ViewHomeVue,
	},
};
</script>

<style scoped></style>
