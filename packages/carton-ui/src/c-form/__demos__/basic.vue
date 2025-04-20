<template>
  <div>
    {{ data }}
    <c-form v-model="data" :option="option" />
  </div>
</template>
<script setup lang="ts">
import type { FormOption } from 'carton-ui'
import { ref } from 'vue'

type User = {
  fullName?: string
  tel?: number
  age?: number
  gender?: 'man' | 'feman'
  hobby?: Array<'唱' | '跳' | 'rapper'>
}

const data = ref<User>({
  hobby: ['唱'], // 可双向绑定设置默认值
})

// 支持传入范型获得类型提示，不传默认 AnyObject
const option: FormOption<User> = {
  /**
   * 提交事件
   * @param data 表单值
   */
  onSubmit: async data => {
    console.log('点击了提交', data)
    // 支持异步，例如模拟提交后端
    await new Promise<void>(resolve => setTimeout(() => resolve(), 2500))
  },

  /**
   * 重置事件
   * @param data 表单值
   */
  onReset: data => {
    console.log('点击了重置', data)
  },

  /**
   * 表单项，key为表单字段名称，type为表单输入组件类型
   */
  columns: [
    {
      label: '姓名',
      key: 'fullName',
    },
    {
      label: '电话',
      key: 'tel',
      type: 'number',
    },
    {
      label: '年龄',
      key: 'age',
      type: 'number',
      // 自定义属性，会透传给 type 的实际组件
      props: {
        min: 0,
        max: 99,
      },
    },
    {
      label: '性别',
      key: 'gender',
      type: 'radio',
      defaultValue: 'man', // 也可通过此处设置默认值
      options: [
        { label: '男', value: 'man' },
        { label: '女', value: 'feman' },
      ],
    },
    {
      label: '喜好',
      key: 'hobby',
      type: 'checkbox',
      options: ['唱', '跳', 'rapper'],
    },
  ],
}
</script>
