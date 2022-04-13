import TheModal from '@/components/TheModal'
import {mount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()


localVue.use(Vuex)

describe('TheModal.vue' ,()=>{

    let getters = {
        getPickedNumbers: ()=> [{
            timestamp: "2022-4-11 17:18:2",
            drawNumbers: [ 1, 13, 15, 27, 11 ],
            playerBet: [ 14, 3, 11, 28, 8 ],
            prizeWon: 0,
        }]
       }

       const store = new Vuex.Store({
        getters
    })

  it('first test',()=>{
    const wrapper = mount(TheModal,{store})
    expect(wrapper.text()).toContain('2022-4-11 17:18:2')
  })
    
})