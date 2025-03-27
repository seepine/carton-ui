import { defineComponent, ref } from 'vue'
import { useCreate } from '../../_hooks/create'
import { cButtonProps } from './props'
import { Button as TButton, Loading as TLoading } from 'tdesign-vue-next'
import { throttle } from 'lodash-es'
import { runAsync } from '../../utils'

const { name, bemClass } = useCreate('c-button')

export default defineComponent({
  name,
  props: cButtonProps,
  setup(props, { expose, slots }) {
    const loading = ref(false)

    let timer: any
    const handleClick = throttle(
      (e: MouseEvent) => {
        if (timer !== undefined) {
          return
        }
        if (props.click !== undefined) {
          timer = setTimeout(() => {
            loading.value = true
          }, props.loadingDelay)
          runAsync(props.click, e)
            .then(() => {})
            .finally(() => {
              clearTimeout(timer)
              timer = undefined
              loading.value = false
            })
        } else {
          props.onClick?.(e)
        }
      },
      props.throttleDelay,
      {
        leading: true,
        trailing: false,
      }
    )

    const buttonRef = ref<InstanceType<typeof TButton>>()
    const handleAttach = () => {
      return buttonRef.value?.$el
    }

    expose(
      new Proxy(
        {},
        {
          get(_, p) {
            if (p === 'click') {
              return handleClick
            }
            return ((buttonRef.value || {}) as any)[p]
          },
          has(_, p) {
            if (p === 'click') {
              return true
            }
            return p in (buttonRef.value || {})
          },
        }
      )
    )

    return () => (
      <TButton
        ref={buttonRef}
        class={bemClass.value}
        {...props.props}
        theme={props.props?.theme || props.theme}
        variant={props.props?.variant || props.variant}
        disabled={loading.value || props.props?.disabled}
        onClick={handleClick}
      >
        {Object.keys(slots).map(slotName => slots[slotName]?.())}
        <TLoading
          attach={handleAttach}
          loading={loading.value || props.props?.loading === true}
          inheritColor={true}
          showOverlay={false}
        />
      </TButton>
    )
  },
})
