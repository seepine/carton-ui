import type {
  CheckboxGroupChangeContext,
  CheckboxGroupValue,
  CheckboxOption,
  TdCheckboxGroupProps,
} from 'tdesign-vue-next'
import type { ExtractPropTypes, PropType } from 'vue'
import type { AsyncValue } from '../../types'

export const cCheckboxProps = {
  modelValue: {
    type: Array as PropType<CheckboxGroupValue>,
    required: false,
    default: () => {
      return []
    },
  },
  options: {
    type: [Object, Function] as PropType<
      AsyncValue<Array<CheckboxOption | any>>
    >,
  },
  keys: {
    type: Object as PropType<{
      value?: string
      label?: string
    }>,
  },
  /**
   * 点击加载延迟 ms
   * @defaultValue 250
   */
  loadingDelay: {
    type: Number,
    default: 250,
  },
  /**
   * 原 t-checkbox-group 属性
   */
  props: {
    type: Object as PropType<TdCheckboxGroupProps>,
  },
  /**
   * 改变事件
   */
  onChange: {
    type: Function as PropType<
      (value: CheckboxGroupValue, context: CheckboxGroupChangeContext) => void
    >,
  },
}

export type CCheckboxProps = Partial<ExtractPropTypes<typeof cCheckboxProps>>
