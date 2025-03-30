import { computed, defineComponent, inject, ref, type Ref } from 'vue'
import { useCreate } from '../../_hooks/create'
import { cColProps } from './props'
import { Col } from 'tdesign-vue-next'
import type { ResponsiveValue } from '../../types'
import { isObject } from '../../utils'

const { name, bemClass } = useCreate('c-col')

export default defineComponent({
  name,
  inheritAttrs: true,
  props: cColProps,
  setup(props, { slots }) {
    const { width } = inject<{
      width: Ref<number>
    }>('c-row-container-width', {
      width: ref(0),
    })
    const analyzeResponsiveValue = (
      w: number,
      val?: number | ResponsiveValue
    ) => {
      if (!isObject(val)) {
        return val
      }
      if (w >= 1880 && val.xxl !== undefined) {
        return val.xxl
      }
      if (w >= 1400 && val.xl !== undefined) {
        return val.xl
      }
      if (w >= 1200 && val.lg !== undefined) {
        return val.lg
      }
      if (w >= 992 && val.md !== undefined) {
        return val.md
      }
      if (w >= 768 && val.sm !== undefined) {
        return val.sm
      }
      return val.xs
    }
    const colProps = computed(() => {
      const w = width.value
      return {
        flex: analyzeResponsiveValue(w, props.flex),
        span: analyzeResponsiveValue(w, props.span),
        offset: analyzeResponsiveValue(w, props.offset),
        order: analyzeResponsiveValue(w, props.order),
        pull: analyzeResponsiveValue(w, props.pull),
        push: analyzeResponsiveValue(w, props.push),
      }
    })
    return () => (
      <Col class={bemClass.value} tag={props.tag} {...colProps.value}>
        {slots.default?.()}
      </Col>
    )
  },
})
