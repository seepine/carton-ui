<template>
  <c-form :option="option" />
</template>
<script setup lang="tsx">
import type { FormOption } from 'carton-ui'
import { Button } from 'tdesign-vue-next'

const option: FormOption = {
  footer: {
    submitBtn: {
      props: {
        block: true,
      },
    },
    resetBtn: false, // 隐藏重置按钮
    prefixRender: () => <span style="width:40px">前缀</span>, // 自定义前缀
    suffixRender: () => (
      // 自定义后缀
      // 在表单内通过给按钮赋予 type = 'submit/reset'，可触发表单的提交或重置
      <Button type="reset" theme="default">
        自定义的重置
      </Button>
    ),
  },

  onSubmit: () =>
    new Promise<void>(resolve => setTimeout(() => resolve(), 3500)),

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
      label: '性别',
      key: 'gender',
      type: 'radio',
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
