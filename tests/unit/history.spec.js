import HistoryResult from '@/components/HistoryResult'
import {mount,createLocalVue,} from '@vue/test-utils'
import Vuetify from 'vuetify';
import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuetify).use(Vuex)

describe('HistoryResult.vue' ,()=>{
    const localVue = createLocalVue()
    let vuetify
    let actions

    beforeEach(() => {
      vuetify = new Vuetify(),
      actions = {
        deleteBetFromHistory: jest.fn()
      }
    })
    
    const tempStore = new Vuex.Store({
      actions
    })

  it('first test',()=>{
    const wrapper = mount(HistoryResult,{
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
    expect(wrapper.text()).toContain(1)
  })
    

  it('delete action test', ()=>{
    const wrapper = mount(HistoryResult,{
      localVue,
      vuetify,
      tempStore,
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
    
    expect(tempStore.actions.deleteBetFromHistory).toHaveBeenCalledTimes(1)
  })
})