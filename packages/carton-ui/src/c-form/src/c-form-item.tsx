import { computed, defineComponent, inject, ref } from 'vue'
import { useCreate } from '../../_hooks/create'
import { cFormItemProps } from './props'
import {
  AutoComplete,
  Cascader,
  DatePicker,
  FormItem,
  Input,
  InputNumber,
  RadioGroup,
  RangeInput,
  Select,
  Slider,
  Switch,
  Textarea,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
} from 'tdesign-vue-next'
import type { FormInjection } from './interface'
import CCheckbox from '../../c-checkbox'
import {
  arrayTransferByKeys,
  computedAsync,
  isArray,
  isFunction,
  isString,
  runAsync,
  watchAsync,
} from '../../utils'

const { name, bemClass } = useCreate('c-form-item')

export default defineComponent({
  name,
  props: cFormItemProps,
  setup(props) {
    const formInj = inject<FormInjection>(props.injectKey as any, {
      props: { option: { columns: [] } },
      data: ref({}),
      injectKey: Symbol('default-form-item-key'),
    })
    const { type } = props.column || {}

    const value = computed({
      get: () => formInj.data.value[props.column.key || '_unknow'],
      set: val => (formInj.data.value[props.column.key || '_unknow'] = val),
    })
    const label = watchAsync(formInj.data, () =>
      runAsync(props.column?.label, formInj.data.value)
    )
    const display = watchAsync<boolean>(
      formInj.data,
      async () => {
        if (props.column?.display === undefined) {
          return true
        }
        return (
          (await runAsync(props.column?.display, formInj.data.value)) !== false
        )
      },
      { defaultValue: true }
    )
    const options = computedAsync<any[]>(
      async () => {
        // @ts-ignore
        const { options = [], keys } = props.column
        const res = await runAsync(options, formInj.data.value)
        return arrayTransferByKeys(res || [], props.column.props?.keys || keys)
      },
      [],
      { resetInitialStateEffect: true }
    )
    const onChange = (val: any, content: any) => {
      value.value = val
      // @ts-ignore
      props.column.onChange?.(val, {
        data: formInj.data.value,
        content,
      })
    }
    const onBlur = (val: any) => {
      value.value = isString(val) ? val.trim() : val
    }

    const comp = () => {
      if (type === undefined || type === 'input') {
        return (
          <Input
            clearable
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
            onBlur={onBlur}
          ></Input>
        )
      }
      if (type === 'number') {
        return (
          <InputNumber
            clearable
            style="width:100%"
            max={999999999999999}
            align="left"
            decimalPlaces={0}
            theme="column"
            allowInputOverLimit={false}
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
          ></InputNumber>
        )
      }
      if (type === 'autoComplete') {
        return (
          <AutoComplete
            clearable
            {...props.column.props}
            options={options.value}
            modelValue={value.value}
            onChange={onChange}
          ></AutoComplete>
        )
      }
      if (type === 'cascader') {
        return (
          <Cascader
            clearable
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
            options={options.value}
          ></Cascader>
        )
      }
      if (type === 'checkbox') {
        return (
          <CCheckbox
            props={props.column.props}
            // @ts-ignore
            keys={props.column.keys}
            // @ts-ignore
            loadingDelay={props.column.loadingDelay}
            options={options.value}
            modelValue={value.value}
            onChange={onChange}
          ></CCheckbox>
        )
      }
      if (type === 'date') {
        return (
          <DatePicker
            clearable
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
          ></DatePicker>
        )
      }
      if (type === 'radio') {
        return (
          <RadioGroup
            {...props.column.props}
            options={options.value}
            modelValue={value.value}
            onChange={onChange}
          ></RadioGroup>
        )
      }
      if (type === 'rangeInput') {
        return (
          <RangeInput
            clearable
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
          ></RangeInput>
        )
      }
      if (type === 'select') {
        return (
          <Select
            clearable
            {...props.column.props}
            options={options.value}
            modelValue={value.value}
            onChange={onChange}
          ></Select>
        )
      }
      if (type === 'slider') {
        return (
          <Slider
            clearable
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
          ></Slider>
        )
      }
      if (type === 'switch') {
        return (
          <Switch
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
          ></Switch>
        )
      }
      if (type === 'textarea') {
        return (
          <Textarea
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
            onBlur={onBlur}
          ></Textarea>
        )
      }
      if (type === 'transfer') {
        return (
          <Transfer
            {...props.column.props}
            modelValue={value.value || []}
            onChange={onChange}
            data={options.value}
          ></Transfer>
        )
      }
      if (type === 'time') {
        return (
          <TimePicker
            clearable
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
          ></TimePicker>
        )
      }
      if (type === 'tree') {
        return (
          <TreeSelect
            clearable
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
            data={options.value}
          ></TreeSelect>
        )
      }
      if (type === 'upload') {
        return (
          <Upload
            {...props.column.props}
            modelValue={value.value || []}
            onChange={onChange}
          ></Upload>
        )
      }
      if (isFunction(type)) {
        return type(formInj.data.value)
      }
      return () => <span>NotSupportType</span>
    }
    return () =>
      display.value ? (
        <FormItem
          class={bemClass.value}
          {...props.column.formItemProps}
          label={label.value}
          name={props.column.key}
          rules={
            isArray(props.column.rules)
              ? props.column.rules
              : props.column.rules
              ? [props.column.rules]
              : undefined
          }
        >
          {comp()}
          {display.value}
        </FormItem>
      ) : undefined
  },
})
