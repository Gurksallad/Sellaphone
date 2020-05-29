import { mount } from '@vue/test-utils'
import Contract from '@/components/Contract.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'contract'
    const wrapper = mount(Contract, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
