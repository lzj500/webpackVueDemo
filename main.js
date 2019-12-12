import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './App.vue';
import main from './page/main.vue';
import test from './page/Test.vue';
import test2 from './page/Test2.vue';

const routers=[
	{path:'/',component:main},
	{path:'/test',component:test},
	{path:'/test2',component:test2}
];
const router=new VueRouter({
	routes:routers
});

new Vue({
    el: '#app',
	router:router, 
    render: h => h(App)
})