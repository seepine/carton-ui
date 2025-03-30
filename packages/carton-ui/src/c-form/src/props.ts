import type { ExtractPropTypes, PropType } from 'vue'
import type { FormColumn, FormOption } from './interface'
import type { AnyObject } from '../../types'

export const cFormProps = {
  /**
   * 类型定义
   */
  modelValue: {
    type: Object as PropType<AnyObject>,
    required: false,
  },
  'update:modelValue': {
    type: Function as PropType<(data: AnyObject) => void>,
    required: false,
  },
  /**
   * 类型定义
   */
  option: {
    type: Object as PropType<FormOption>,
    required: true,
    default: () => {
      return { columns: [] }
    },
  },
}

export type CFormProps = ExtractPropTypes<typeof cFormProps>

export const cFormItemProps = {
  /**
   * 类型定义
   */
  column: {
    type: Object as PropType<FormColumn>,
    required: true,
    default: () => {
      return {}
    },
  },

  injectKey: {},
}

export type CFormItemProps = ExtractPropTypes<typeof cFormItemProps>
