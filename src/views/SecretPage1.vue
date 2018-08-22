<template>
  <div class="container">    
    <h1>This is SecretPage1</h1>  
    <p>{{moduleA_item1}}</p> 
  </div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		created(){
            console.log(1);
            		
			console.log('getters moduleA_item1 ' + this.moduleA_item1);			
			console.log('getters moduleA_item2 ' + this.moduleA_item2);			
			console.log('getters moduleB_item3 ' + this.moduleB_item3);			
            console.log('getters moduleB_item4 ' + this.moduleB_item4);	

            console.log('getters moduleB_itemX ' + JSON.stringify(this.moduleB_itemX));	

            this.moduleB_getItem('my payload');
            
            		
		},
		computed: {
			...mapGetters('moduleA', {
				moduleA_item1: 'item1',
				moduleA_item2: 'item2'
			}),
			...mapGetters('moduleB', {
				moduleB_item3: 'item3',
				moduleB_item4: 'item4',
				moduleB_itemX: 'itemX'
			})
		},
		methods: {            
			...mapActions('moduleB', {
				moduleB_getItem: 'getItem'
            })            
		}
	}
</script>