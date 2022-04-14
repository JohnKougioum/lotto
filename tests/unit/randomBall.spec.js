import RandomBall from '@/components/RandomBall'
import {mount} from '@vue/test-utils'


describe('RandomBall.vue', ()=>{
    test('check random ball props' ,()=>{
        const wrapper = mount(RandomBall,{
            propsData:{
                rnumber: 1,
                picked: false,
                tempBallArray: []
            }
        })
        expect(wrapper.text()).toContain(1)
    
    })

    test('check random ball hightlight class', ()=>{
        const wrapper = mount(RandomBall,{
            propsData:{
                rnumber: 1,
                picked: false,
                tempBallArray: []
            }
        })

        expect(wrapper.find('.highlight').exists()).toBeFalsy()
    })
})