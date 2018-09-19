<template>
  <div class="container">    
    <h1>This is SecretPage1</h1>  
    <p>{{moduleA_item1}}</p> 
    <p>{{$t("greeting")}} {{$t("name")}}</p> 
    <ButtonSlider :msg="buttonMsg" @btnClick="onButtonSliderClick" />
  </div>
</template>

<script>
import ButtonSlider from '@/components/ButtonSlider';

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
  name: 'SecretPage1',
  components: {   
    ButtonSlider,
  },
  data() {
    return {
      buttonMsg: 'Button'
    }
  },
  created(){
    console.log(1)
    console.log('Доступ к текущему переводу из скрипта this.$t("greeting") ' + this.$t("greeting"))
					
    console.log('\n------- Getters arguments ----- ')
    console.log('getters moduleA_item1 ' + this.moduleA_item1)		
    console.log('getters moduleA_item2 ' + this.moduleA_item2)		
    console.log('getters moduleB_item3 ' + this.moduleB_item3)		
    console.log('getters moduleB_item4 ' + this.moduleB_item4)

    console.log('getters moduleB_moduleBGetter ' + JSON.stringify(this.moduleB_moduleBGetter))

    this.moduleBAction('My payload')
    this.rootAction('New payload')
  },
  computed: {
    ...mapGetters('moduleA', {
      moduleA_item1: 'item1',
      moduleA_item2: 'item2'
    }),
    ...mapGetters('moduleB', {
      moduleB_item3: 'item3',
      moduleB_item4: 'item4',
      moduleB_moduleBGetter: 'moduleBGetter'
    }),
    translatedItem() {
      return this.$t("greeting")
    },
  },
  methods: {            
    ...mapActions('moduleB', {
      moduleBAction: 'moduleBAction'
    }),
    ...mapActions({
      rootAction: 'rootActionY'
    }),
    onButtonSliderClick() {      
      this.buttonMsg = 'You clicked!'
    }             
  }
}
</script>