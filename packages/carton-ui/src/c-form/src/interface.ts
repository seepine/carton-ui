import type {
  ChangeContext,
  CheckboxGroupProps,
  CheckboxGroupValue,
  ColorObject,
  ColorPickerChangeTrigger,
  DateMultipleValue,
  DatePickerTriggerSource,
  DateValue,
  FormRule,
  RangeInputValue,
  SelectInputValue,
  SelectValue,
  SliderValue,
  TagInputValue,
  TdAutoCompleteProps,
  TdCascaderProps,
  TdColorPickerProps,
  TdDatePickerProps,
  TdFormProps,
  TdInputNumberProps,
  TdInputProps,
  TdRadioGroupProps,
  TdRangeInputProps,
  TdSelectInputProps,
  TdSelectProps,
  TdSliderProps,
  TdSwitchProps,
  TdTagInputProps,
  TdTextareaProps,
  TdTimePickerProps,
  TdTreeSelectProps,
  TdUploadProps,
  TreeSelectValue,
  UploadFile,
} from 'tdesign-vue-next'
import type { AnyObject, Run } from '../../types'
import type { ComputedRef, Ref, VNode } from 'vue'
import type { CFormProps } from './props'
import type {
  TdTransferProps,
  TransferValue,
} from 'tdesign-vue-next/es/transfer/type'
import type { CCheckboxProps } from '../../c-checkbox'

export interface FormColumnBase<FormData extends AnyObject = AnyObject> {
  /**
   * 标签值
   */
  label?:
    | Run<FormData, string | ComputedRef<string>>
    | ((data: FormData) => VNode)
  /**
   * 属性值
   */
  key?: string
  /**
   * 自定义渲染
   * @param data 当前表单数据
   * @returns 视图
   */
  render?: (data: FormData) => VNode
  /**
   * 表单字段校验规则。TS 类型：Array<FormRule>
   */
  rules?: Array<FormRule>
}
type OmitValue = 'defaultValue' | 'modelValue' | 'value'
export type FormColumnComponent<T extends AnyObject = AnyObject> =
  | {
      type?: 'input'
      props?: Omit<TdInputProps<string>, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string
      onChange?: (
        value: string,
        ctx: {
          data: AnyObject
          context?: {
            e?: InputEvent | MouseEvent | CompositionEvent
            trigger: 'input' | 'initial' | 'clear'
          }
        }
      ) => void
    }
  | {
      type: 'number'
      props?: Omit<TdInputNumberProps<number | string>, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: number | string
      onChange?: (
        value: string,
        ctx: {
          data: AnyObject
          context?: ChangeContext
        }
      ) => void
    }
  | {
      type: 'textarea'
      props?: Omit<TdTextareaProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string
      onChange?: (
        value: string,
        ctx: {
          data: AnyObject
          context?: { e?: InputEvent }
        }
      ) => void
    }
  | {
      type: 'color' | 'colorPicker'
      props?: Omit<TdColorPickerProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string
      onChange?: (
        value: string,
        ctx: {
          data: AnyObject
          context?: {
            color: ColorObject
            trigger: ColorPickerChangeTrigger
          }
        }
      ) => void
    }
  | {
      type: 'date' | 'datePicker'
      props?: Omit<TdDatePickerProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: DateValue | DateMultipleValue
      onChange?: (
        value: string,
        ctx: {
          data: AnyObject
          context?: {
            dayjsValue?: any
            trigger?: DatePickerTriggerSource
          }
        }
      ) => void
    }
  | {
      type: 'switch'
      props?: Omit<TdSwitchProps<string | number | boolean>, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string | number | boolean
      onChange?: (
        value: string,
        ctx: {
          data: AnyObject
          context?: {
            e: MouseEvent
          }
        }
      ) => void
    }
  | {
      type: 'radio' | 'radioGroup'
      props?: Omit<TdRadioGroupProps<string | number | boolean>, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string | number | boolean
    }
  | (Omit<CCheckboxProps, OmitValue> & {
      type: 'checkbox' | 'checkboxGroup'
      props?: Omit<CheckboxGroupProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: CheckboxGroupValue
    })
  | {
      type: 'autoComplete'
      props?: Omit<TdAutoCompleteProps<string>, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string
    }
  | {
      type: 'cascader'
      props?: Omit<TdCascaderProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string | number | Array<string> | Array<number>
    }
  | {
      type: 'tag' | 'tagInput'
      props?: Omit<TdTagInputProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: TagInputValue
    }
  | {
      type: 'range' | 'rangeInput'
      props?: Omit<TdRangeInputProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: RangeInputValue
    }
  | {
      type: 'select'
      props?: Omit<TdSelectProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: SelectValue
    }
  | {
      type: 'selectInput'
      props?: Omit<TdSelectInputProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: SelectInputValue
    }
  | {
      type: 'slider'
      props?: Omit<TdSliderProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: SliderValue
    }
  | {
      type: 'transfer'
      props?: Omit<TdTransferProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: Array<TransferValue>
    }
  | {
      type: 'time' | 'timePicker'
      props?: Omit<TdTimePickerProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string
    }
  | {
      type: 'tree' | 'treeSelect'
      props?: Omit<TdTreeSelectProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: TreeSelectValue
    }
  | {
      type: 'upload'
      props?: Omit<TdUploadProps<UploadFile>, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: Array<UploadFile>
    }
  | {
      type: (form: T) => VNode
      props?: any
      /**
       * 默认值
       */
      defaultValue?: any
    }

export type FormColumn<T extends AnyObject = AnyObject> = FormColumnBase<T> &
  FormColumnComponent<T>

export type Handler<T> = ((form: T) => void) | ((form: T) => Promise<void>)

export interface FormOption<FormData extends AnyObject = AnyObject> {
  props?: Omit<
    TdFormProps<FormData>,
    'data' | 'onReset' | 'onSubmit' | 'onValidate'
  >
  onSubmit?: Handler<FormData>
  onReset?: (form: FormData) => void
  /**
   * 底部区域配置
   *
   * @value false, 隐藏底部按钮区域
   * @value object, 自定义配置
   */
  footer?:
    | false
    | {
        /**
         * 前缀自定义渲染
         * @param data 表单数据
         * @returns 视图
         */
        prefixRender?: (data: FormData) => VNode
        /**
         * 后缀自定义渲染
         * @param data 表单数据
         * @returns 视图
         */
        suffixRender?: (data: FormData) => VNode
      }
  columns: FormColumn[]
}

export interface FormInst {
  // validate: FormItemValidate
}

export interface FormInjection<FormData extends AnyObject = AnyObject> {
  props: CFormProps
  data: Ref<FormData>
  readonly injectKey: symbol
}
