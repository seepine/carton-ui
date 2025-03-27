import { defineComponent, ref, watch } from 'vue'
import { useCreate } from '../../_hooks/create'
import { cCheckboxProps } from './props'
import {
  CheckboxGroup,
  Loading,
  type CheckboxGroupChangeContext,
  type CheckboxGroupValue,
  type CheckboxOption,
} from 'tdesign-vue-next'
import { computedAsync, runAsync } from '../../utils'
import { arrayTransferByKeys } from '../../utils/array'

const { name, bemClass } = useCreate('c-checkbox')

export default defineComponent({
  name,
  props: cCheckboxProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const data = ref<CheckboxGroupValue>(props.modelValue || [])
    const handleChange = (
      value: CheckboxGroupValue,
      context: CheckboxGroupChangeContext
    ) => {
      data.value = value
      emit('update:modelValue', data.value)
      props.onChange?.(value, context)
    }
    watch(
      () => props.modelValue,
      val => {
        data.value = val
      }
    )
    const loading = ref(false)
    const options = computedAsync<CheckboxOption[]>(
      async () => {
        if (props.props?.options) {
          return arrayTransferByKeys(props.props?.options, props.keys)
        }
        const timer = setTimeout(() => {
          loading.value = true
        }, props.loadingDelay)
        const res = await runAsync(props.options)
        clearTimeout(timer)
        loading.value = false
        return arrayTransferByKeys(res, props.keys)
      },
      [],
      { resetInitialStateEffect: true }
    )

    return () => (
      <div class={bemClass.value} style={{ minHeight: '22px' }}>
        <CheckboxGroup
          {...props.props}
          modelValue={data.value}
          options={options.value}
          onChange={handleChange}
        ></CheckboxGroup>
        {loading.value && options.value.length === 0 ? (
          <Loading
            size="small"
            loading={loading.value}
            inheritColor={true}
            showOverlay={false}
          ></Loading>
        ) : undefined}
      </div>
    )
  },
})
