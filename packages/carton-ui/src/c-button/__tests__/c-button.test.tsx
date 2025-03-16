import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { CButton } from '../index'

describe('CButton', () => {
  test('render', async () => {
    const wrapper = mount(CButton)
    await nextTick()
    expect(wrapper.html()).include('c-button--id__')
  })
})
