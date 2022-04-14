import Login from '../../src/views/Login.vue'
import {shallowMount,createLocalVue,} from '@vue/test-utils'
import Vue from 'vue';
import Vuex from 'vuex'



const localVue = createLocalVue()

localVue.use(Vuex)


describe('Login.vue', ()=>{
    it('active button click to login',()=>{
        const wrapper = shallowMount(Login,{
            data(){
                return{
                    email: 'asd@asd.gr',
                    password: '123123'
                }
            }
        })


        wrapper.find('button').trigger('click')


        
        expect(wrapper.find('input').element.value).toContain('asd@asd.gr')
    })
})