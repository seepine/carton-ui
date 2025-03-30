import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { CCol } from '../index'

describe('CCol', () => {
  test('render', async () => {
    const wrapper = mount(CCol)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
