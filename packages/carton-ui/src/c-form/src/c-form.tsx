import { defineComponent, provide, ref, watch } from 'vue'
import { useCreate } from '../../_hooks/create'
import { cFormProps } from './props'
import {
  Button,
  Col,
  Form,
  FormItem,
  Loading,
  Row,
  type FormInstanceFunctions,
} from 'tdesign-vue-next'
import CFormItem from './c-form-item'
import type { FormInjection } from './interface'
import { cloneDeep, isEqual, throttle } from 'lodash-es'
import CButton from '../../c-button'
import type { AnyObject } from '../../types'
import { isFunction, runAsync } from '../../utils'

const { name, bemClass } = useCreate('c-form')

export default defineComponent({
  name,
  props: cFormProps,
  emits: ['update:modelValue'],
  setup(props, { emit, expose }) {
    const injectKey = Symbol('c-form-inject-key')
    const formRef = ref<FormInstanceFunctions>()
    const data = ref<AnyObject>({})
    const backData = ref<AnyObject>({})

    const loading = ref(false)

    watch(
      data,
      throttle(() => {
        emit('update:modelValue', data.value)
      }, 100),
      { deep: true }
    )

    const initDefaultValue = (val: any = {}) => {
      backData.value = cloneDeep(val)
      props.option.columns?.forEach(column => {
        if (
          column.defaultValue !== undefined &&
          backData.value[column.key || '__known'] === undefined
        ) {
          backData.value[column.key || '__known'] = column.defaultValue
        } else if (
          column.props?.defaultValue !== undefined &&
          backData.value[column.key || '__known'] === undefined
        ) {
          backData.value[column.key || '__known'] = column.props?.defaultValue
        }
      })
      const deep = cloneDeep(backData.value)
      data.value = deep
    }

    initDefaultValue(props.modelValue)

    watch(
      () => props.modelValue,
      throttle(val => {
        if (!isEqual(data.value, val)) {
          initDefaultValue(val)
        }
      }, 100),
      { deep: true, immediate: false }
    )

    provide<FormInjection>(injectKey, {
      data,
      props,
      injectKey,
    })

    const submit = async () => {
      const res = await formRef.value?.validate()
      if (res !== true) {
        return
      }
      loading.value = true
      try {
        await runAsync(props.option.onSubmit, data.value)
      } catch (e) {}
      loading.value = false
    }

    const reset = async () => {
      await runAsync(props.option.onReset, data.value)
    }

    expose(
      new Proxy(
        {},
        {
          get(_, p) {
            return ((formRef.value || {}) as any)[p]
          },
          has(_, p) {
            return p in (formRef.value || {})
          },
        }
      )
    )

    const footer = () => {
      if (props.option.footer === false) {
        return
      }
      const {
        prefixRender,
        suffixRender,
        submitBtn = true,
        resetBtn = true,
      } = props.option.footer || {}
      return (
        <FormItem>
          <Row gutter={16} align="center">
            {isFunction(prefixRender) ? prefixRender(data.value) : undefined}
            {submitBtn ? (
              <Col>
                <CButton theme="primary" click={submit} loadingDelay={250}>
                  提交
                </CButton>
              </Col>
            ) : undefined}
            {resetBtn ? (
              <Col>
                <Button theme="default" variant="base" type="reset">
                  重置
                </Button>
              </Col>
            ) : undefined}
            {/* <Col>
              <Checkbox style="display:flex">提交后继续</Checkbox>
            </Col> */}
            {isFunction(suffixRender) ? suffixRender(data.value) : undefined}
          </Row>
        </FormItem>
      )
    }

    return () => (
      <Loading
        class="c-form__loading"
        loading={loading.value}
        fullscreen={false}
        inheritColor={false}
        showOverlay={false}
        delay={250}
        size="0"
      >
        <Form
          ref={formRef}
          data={data.value}
          class={bemClass.value}
          resetType="initial"
          rules={props.option.rules}
          {...props.option.props}
          readonly={loading.value}
          onReset={reset}
          onSubmit={submit}
        >
          {(props.option.columns || []).map(column => {
            if (typeof column.render === 'function') {
              return column.render(data.value)
            }
            return <CFormItem column={column} injectKey={injectKey}></CFormItem>
          })}
          {footer()}
        </Form>
      </Loading>
    )
  },
})
