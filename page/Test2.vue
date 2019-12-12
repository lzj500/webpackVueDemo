<template>
	<div>
		this is test2
		<div class="a" v-on:click="aaa()">aaa</div>
		<div>
			<router-link to="/test">
				to test
			</router-link>
		</div>
		<div class="">
			<router-link to="/">
				to home
			</router-link>
			
			
		</div>
	</div>
	
</template>

<script>
	export default {
	    name: "test2",
		methods:{
			aaa(){
				console.log("clicked test2 aaa");
			}
		}
	}
</script>

<style>
</style>
