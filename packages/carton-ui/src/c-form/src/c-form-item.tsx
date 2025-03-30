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
} from 'tdesign-vue-next'
import type { FormInjection } from './interface'
import CCheckbox from '../../c-checkbox'
import { runAsync, watchAsync } from '../../utils'

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
    const onChange = (val: any, content: any) => {
      value.value = val
      // @ts-ignore
      props.column.onChange?.(val, {
        data: formInj.data,
        content,
      })
    }

    const comp = () => {
      if (type === undefined || type === 'input') {
        return (
          <Input
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
          ></Input>
        )
      }
      if (type === 'number') {
        return (
          <InputNumber
            style="width:100%"
            max={999999999999999}
            align="left"
            decimalPlaces={2}
            theme="column"
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
          ></InputNumber>
        )
      }
      if (type === 'autoComplete') {
        return (
          <AutoComplete
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
          ></AutoComplete>
        )
      }
      if (type === 'cascader') {
        return (
          <Cascader
            {...props.column.props}
            modelValue={value.value}
            onChange={onChange}
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
            // @ts-ignore
            options={props.column.options}
            modelValue={value.value}
            onChange={onChange}
          ></CCheckbox>
        )
      }
      if (type === 'date' || type === 'datePicker') {
        return (
          <DatePicker
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
            modelValue={value.value}
            onChange={onChange}
          ></RadioGroup>
        )
      }
      return () => <span>NotSupportType</span>
    }
    return () => (
      <FormItem
        class={bemClass.value}
        label={label.value}
        name={props.column.key}
        rules={props.column.rules}
      >
        {comp()}
      </FormItem>
    )
  },
})
