import Ball from '@/components/Ball.vue'
import {mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import index from '@/store/index'
import Vue from 'vue'

const localVue = createLocalVue()

localVue.use(Vuex)

// const store = new Vuex.Store(index)

describe("Ball.vue", ()=>{
    
   let getters = {
    getPickedNumbers: ()=> [{
        number: 2,
        deletable: true,
        ballColorChange:true
    },
    {
        number: 5,
        deletable: true,
        ballColorChange:true
    }]
   }
   
   const store = new Vuex.Store({
       getters
   })

   it('ball prop pass thought', ()=>{
    const wrapper = mount(Ball,{
        store,
        props:{
            numberedBall: [{
                number: 1,
                deletable: false,
                ballColorChange: false,
            }]
        }

    });

    expect(wrapper.text()).toContain(1);

   })
    
})