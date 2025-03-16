<template>
  <t-button
    ref="buttonRef"
    v-bind="props.props"
    :theme="props.props?.theme || props.theme"
    :class="[bemClass]"
    :disabled="loading || props.props?.disabled"
    :on-click="handleClick"
  >
    <!-- <template v-for="(_, name) in $slots" #[name]="slotData" :key="name">
      <slot :name="name" v-bind="slotData || {}"></slot>
    </template> -->
    <template v-if="$slots['icon']" #icon>
      <slot name="icon"></slot>
    </template>
    <div>
      <slot></slot>
      <t-loading
        :attach="handleAttach"
        :loading="loading || props.props?.loading === true"
        :inherit-color="true"
        :show-overlay="false"
      ></t-loading>
    </div>
  </t-button>
</template>

<script lang="ts" setup>
import { useCreate } from '../../_hooks/create'
import { Button as TButton, Loading as TLoading } from 'tdesign-vue-next'
import { throttle } from 'lodash-es'
import { ref } from 'vue'
import { run } from '../../utils'
import { cButtonProps } from './props'

const { bemClass } = useCreate('c-button')

defineOptions({
  name: 'CButton',
})

const props = defineProps(cButtonProps)

const emit = defineEmits<{
  (event: 'click', e?: MouseEvent): void
}>()

const loading = ref(false)
let timer: any
const handleClick = throttle(
  (e?: MouseEvent) => {
    if (timer !== undefined) {
      return
    }
    if (props.click !== undefined) {
      timer = setTimeout(() => {
        loading.value = true
      }, props.loadingDelay)
      run(props.click, e)
        .then(() => {})
        .finally(() => {
          clearTimeout(timer)
          timer = undefined
          loading.value = false
        })
    } else {
      emit('click', e)
    }
  },
  props.throttleDelay,
  {
    leading: true,
    trailing: false,
  }
)

const buttonRef = ref()
const handleAttach = () => {
  return buttonRef.value?.$el
}

defineExpose(
  new Proxy(
    {},
    {
      get(_, p) {
        if (p === 'click') {
          return handleClick
        }
        return buttonRef.value?.[p]
      },
      has(_, p) {
        if (p === 'click') {
          return true
        }
        return p in buttonRef.value
      },
    }
  )
)
</script>
