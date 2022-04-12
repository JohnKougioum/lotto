import RandomBall from '@/components/RandomBall'
import {mount} from '@vue/test-utils'

test('mount history component' ,()=>{
    const wrapper = mount(RandomBall,{
        propsData:{
            rnumber: 1,
            picked: false,
            tempBallArray: []
        }
    })
    expect(wrapper.text()).toContain(1)

})