import type {
  AutoCompleteOption,
  CascaderChangeContext,
  ChangeContext,
  CheckboxGroupChangeContext,
  CheckboxGroupProps,
  CheckboxGroupValue,
  CheckboxOption,
  DateMultipleValue,
  DatePickerTriggerSource,
  DateValue,
  FormInstanceFunctions,
  FormItemProps,
  FormRule,
  RadioOption,
  RangeInputPosition,
  RangeInputValue,
  SelectOption,
  SelectValue,
  SelectValueChangeTrigger,
  SliderValue,
  TagInputChangeContext,
  TagInputValue,
  TdAutoCompleteProps,
  TdCascaderProps,
  TdDatePickerProps,
  TdFormProps,
  TdInputNumberProps,
  TdInputProps,
  TdRadioGroupProps,
  TdRangeInputProps,
  TdSelectProps,
  TdSliderProps,
  TdSwitchProps,
  TdTagInputProps,
  TdTextareaProps,
  TdTimePickerProps,
  TdTreeSelectProps,
  TdUploadProps,
  TimePickerValue,
  TreeNodeModel,
  TreeOptionData,
  TreeSelectValue,
  TreeSelectValueChangeTrigger,
  UploadChangeContext,
  UploadFile,
} from 'tdesign-vue-next'
import type { AnyObject, Run } from '../../types'
import type { ComputedRef, Ref, VNode } from 'vue'
import type { CFormProps } from './props'
import type {
  DataOption,
  TargetParams,
  TdTransferProps,
  TransferValue,
} from 'tdesign-vue-next/es/transfer/type'

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
  rules?: FormRule | Array<FormRule>
  /**
   * 表单项属性
   */
  formItemProps?: Omit<FormItemProps, 'name' | 'label' | 'rules'>
  /**
   * 是否显示
   * @defaultValue true
   */
  display?: Run<FormData, boolean>
}
type OmitValue = 'defaultValue' | 'modelValue' | 'value'
export type FormColumnComponent<FormData extends AnyObject = AnyObject> =
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
          data: FormData
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
          data: FormData
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
          data: FormData
          context?: { e?: InputEvent }
        }
      ) => void
    }
  | {
      type: 'date'
      props?: Omit<TdDatePickerProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: DateValue | DateMultipleValue
      onChange?: (
        value: string,
        ctx: {
          data: FormData
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
          data: FormData
          context?: {
            e: MouseEvent
          }
        }
      ) => void
    }
  | {
      type: 'radio'
      props?: Omit<TdRadioGroupProps<string | number | boolean>, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string | number | boolean
      /**
       * 选项
       */
      options: Run<FormData, Array<RadioOption>>
      onChange?: (
        value: string | number | boolean,
        ctx: {
          data: FormData
          context?: {
            e: Event
            name?: string
          }
        }
      ) => void
    }
  | {
      type: 'checkbox'
      props?: Omit<CheckboxGroupProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: CheckboxGroupValue
      /**
       * 选项
       */
      options: Run<FormData, Array<CheckboxOption>>
      onChange?: (
        value: CheckboxGroupValue,
        ctx: {
          data: FormData
          context: CheckboxGroupChangeContext
        }
      ) => void
    }
  | {
      type: 'autoComplete'
      props?: Omit<TdAutoCompleteProps<string>, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string
      /**
       * 选项
       */
      options: Run<FormData, Array<AutoCompleteOption>>
      onChange?: (
        value: string,
        ctx: {
          data: FormData
          context: {
            e?: InputEvent | MouseEvent | CompositionEvent | KeyboardEvent
          }
        }
      ) => void
    }
  | {
      type: 'cascader'
      props?: Omit<TdCascaderProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: string | number | Array<string> | Array<number>
      /**
       * 选项
       */
      options: Run<FormData, Array<TreeOptionData>>
      onChange?: (
        value: string | number | Array<string> | Array<number>,
        ctx: {
          data: FormData
          context: CascaderChangeContext<TreeOptionData>
        }
      ) => void
    }
  | {
      type: 'tag'
      props?: Omit<TdTagInputProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: TagInputValue
      onChange?: (
        value: TagInputValue,
        ctx: {
          data: FormData
          context: TagInputChangeContext
        }
      ) => void
    }
  | {
      type: 'rangeInput'
      props?: Omit<TdRangeInputProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: RangeInputValue
      onChange?: (
        value: RangeInputValue,
        ctx: {
          data: FormData
          context: {
            e?: InputEvent | MouseEvent | CompositionEvent
            position?: RangeInputPosition
            trigger?: 'input' | 'initial' | 'clear'
          }
        }
      ) => void
    }
  | {
      type: 'select'
      props?: Omit<TdSelectProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: SelectValue
      /**
       * 选项
       */
      options: Run<FormData, Array<SelectOption | any>>
      onChange?: (
        value: SelectValue,
        ctx: {
          data: FormData
          context: {
            option?: SelectOption
            selectedOptions: SelectOption[]
            trigger: SelectValueChangeTrigger
            e?: MouseEvent | KeyboardEvent
          }
        }
      ) => void
    }
  // | {
  //     type: 'selectInput'
  //     props?: Omit<TdSelectInputProps, OmitValue>
  //     /**
  //      * 默认值
  //      */
  //     defaultValue?: SelectInputValue
  //   }
  | {
      type: 'slider'
      props?: Omit<TdSliderProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: SliderValue
      onChange?: (
        value: SliderValue,
        ctx: {
          data: FormData
        }
      ) => void
    }
  | {
      type: 'transfer'
      props?: Omit<TdTransferProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: Array<TransferValue>
      /**
       * 选项
       */
      options: Run<FormData, Array<DataOption | TransferValue>>
      onChange?: (
        value: Array<TransferValue>,
        ctx: {
          data: FormData
          context: TargetParams
        }
      ) => void
    }
  | {
      type: 'time' | 'timePicker'
      props?: Omit<TdTimePickerProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: TimePickerValue
      onChange?: (
        value: TimePickerValue,
        ctx: {
          data: FormData
        }
      ) => void
    }
  | {
      type: 'tree' | 'treeSelect'
      props?: Omit<TdTreeSelectProps, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: TreeSelectValue
      /**
       * 选项
       */
      options: Run<FormData, Array<TreeOptionData | TreeSelectValue>>
      onChange?: (
        value: TreeSelectValue,
        ctx: {
          data: FormData
          content: {
            node: TreeNodeModel<DataOption>
            trigger: TreeSelectValueChangeTrigger
            e?: MouseEvent | KeyboardEvent
          }
        }
      ) => void
    }
  | {
      type: 'upload'
      props?: Omit<TdUploadProps<UploadFile>, OmitValue>
      /**
       * 默认值
       */
      defaultValue?: Array<UploadFile>
      onChange?: (
        value: Array<UploadFile>,
        ctx: {
          data: FormData
          content: UploadChangeContext
        }
      ) => void
    }
  | {
      type: (form: FormData) => VNode
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
  onSubmit?: Handler<FormData>
  onReset?: (form: FormData) => void
  columns: FormColumn<FormData>[]
  /**
   * 表单属性
   */
  props?: Omit<
    TdFormProps<FormData>,
    'data' | 'onReset' | 'onSubmit' | 'onValidate' | 'rules'
  >
  /**
   * 表单字段校验规则。TS 类型：Array<FormRule>
   */
  rules?: {
    [field in keyof FormData]?: Array<FormRule>
  }
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
        /**
         * 提交按钮是否显示
         */
        submitBtn?: boolean
        /**
         * 重置按钮是否显示
         */
        resetBtn?: boolean
      }
}

export interface FormInst<FormData extends AnyObject = AnyObject>
  extends FormInstanceFunctions<FormData> {
  // validate: FormItemValidate
}

export interface FormInjection<FormData extends AnyObject = AnyObject> {
  props: CFormProps
  data: Ref<FormData>
  readonly injectKey: symbol
}
