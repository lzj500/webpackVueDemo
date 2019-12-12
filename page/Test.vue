<template>
    <div>
        <H1>This Test .tes1..</H1>
		<div class="a" v-on:click="aaa()">
			aaa
			<div class="b">bbb</div>
		
		</div>
		<div class="">
			<router-link to="/test2">
				to test2
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
        name: "test",
		methods:{
			aaa(){
				console.log("clicked aaa");
			}
		}
    }
</script>

<style scoped lang="less" >
@import '../static/css/main.less';
</style>