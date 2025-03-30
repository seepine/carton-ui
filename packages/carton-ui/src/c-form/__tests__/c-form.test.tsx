import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { CForm } from '../index'

describe('CForm', () => {
  test('render', async () => {
    const wrapper = mount(CForm)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
