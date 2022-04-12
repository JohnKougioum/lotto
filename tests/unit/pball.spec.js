import Ball from '@/components/Ball.vue'
import {mount } from '@vue/test-utils'

describe("Ball.vue", ()=>{
    it("renders props.ball when passed", ()=>{
        const wrapper = mount(Ball,{
            props:{
                numberedBall: [{
                    number: 1,
                    deletable: false,
                    ballColorChange: false,
                }]
            }
        })
        expect(wrapper.text()).toContain(1)
    })
})