<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	import main from "./page/main.vue";
	export default {
		name:'app',
		components: {
			main
		}
	}
</script>

<style scoped>

</style>
