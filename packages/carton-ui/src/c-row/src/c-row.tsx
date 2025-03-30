import { defineComponent, provide, ref } from 'vue'
import { useCreate } from '../../_hooks/create'
import { cRowProps } from './props'
import { Row } from 'tdesign-vue-next'
import { useResizeObserver } from '../../_hooks/use-resize-observer'

const { name, bemClass } = useCreate('c-row')

export default defineComponent({
  name,

  props: cRowProps,

  emits: ['click'],

  setup(props, { slots }) {
    const rowRef = ref()
    const width = ref(0)
    useResizeObserver(
      rowRef,
      ({ contentRect }) => {
        width.value = contentRect.width
      },
      { throttleDelay: 100 }
    )
    provide('c-row-container-width', {
      width,
    })
    console.log(props)

    return () => (
      <Row ref={rowRef} class={bemClass.value}>
        {slots.default?.()}
      </Row>
    )
  },
})
