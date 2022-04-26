import HistoryResult from '@/components/HistoryResult'
import {shallowMount,createLocalVue,} from '@vue/test-utils'
import Vuetify from 'vuetify';
import Vue from 'vue';
import Vuex from 'vuex'
// import storeModule from '../../src/store/index'


const localVue = createLocalVue()

localVue.use(Vuex)

Vue.use(Vuetify).use(Vuex)

describe('HistoryResult.vue' ,()=>{

    let vuetify
    let actions
    let tempStore

    beforeEach(() => {
      vuetify = new Vuetify(),
      actions = {
        state:{},
        deleteBetFromHistory: jest.fn()
      }
    })
    
    tempStore = new Vuex.Store({
      state:{},
      actions
    })

  it('first test',()=>{
    const wrapper = shallowMount(HistoryResult,{
        localVue,
        vuetify,
        propsData:{
            historyData: {
                key: '-N-NyABhXQTChGXZhB7U',
                data: {
                    drawNumbers: [ 1, 13, 15, 27, 11 ],
                    playerBet: [ 14, 3, 11, 28, 8 ],
                    prizeWon: 0,
                    timestamp: "2022-4-11 17:18:2" 
                }
            }
        }
    })
    expect(wrapper.text()).toContain(2022)
  })
    

  it('delete action test', ()=>{
    const wrapper = shallowMount(HistoryResult,{
      localVue,
      tempStore,
      vuetify,
      propsData:{
        historyData: {
            key: '-N-NyABhXQTChGXZhB7U',
            data: {
                drawNumbers: [ 1, 13, 15, 27, 11 ],
                playerBet: [ 14, 3, 11, 28, 8 ],
                prizeWon: 0,
                timestamp: "2022-4-11 17:18:2" 
            }
        }
      }
    })
    wrapper.find('img').trigger('click')
    
    expect(wrapper.vm.deleteAction()).toHaveBeenCalled()

  })
})