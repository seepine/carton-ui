import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { CRow } from '../index'

describe('CRow', () => {
  test('render', async () => {
    const wrapper = mount(CRow)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
