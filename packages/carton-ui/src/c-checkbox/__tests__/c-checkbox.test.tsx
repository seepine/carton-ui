import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { CCheckbox } from '../index'

describe('CCheckbox', () => {
  test('render', async () => {
    const wrapper = mount(CCheckbox)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
