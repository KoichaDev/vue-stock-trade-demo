<template>
	<main id="app">
		<navigation-bar></navigation-bar>
		<router-view></router-view>
	</main>
</template>

<script>
import NavigationBar from './base/NavigationBar.vue';

export default {
	components: {
		NavigationBar,
	},
};
</script>

<style></style>
