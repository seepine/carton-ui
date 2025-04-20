<template>
  <div>
    {{ data }}
    <c-form v-model="data" :option="option" />
  </div>
</template>
<script setup lang="ts">
import type { FormOption } from 'carton-ui'
import { ref } from 'vue'

const data = ref({})
const option: FormOption = {
  columns: [
    {
      label: '输入框',
      key: 'input',
    },
    {
      label: '数字输入框',
      key: 'number',
      type: 'number',
    },
    {
      label: '自定义填充',
      key: 'autoComplete',
      type: 'autoComplete',
      options: ['第一个联想词', '第二个联想词', '第三个联想词'],
    },
    {
      label: '级联选择',
      type: 'cascader',
      key: 'cascader',
      options: [
        {
          label: 'a',
          value: 'a',
          children: [
            { label: 'a1', value: 'a1' },
            { label: 'a2', value: 'a2' },
          ],
        },
        { label: 'b', value: 'b' },
      ],
    },
    {
      label: '多选框',
      key: 'checkbox',
      type: 'checkbox',
      options: ['a', 'b', 'c'],
    },
    {
      label: '日期选择器',
      key: 'date',
      type: 'date',
    },
    {
      label: '单选框',
      key: 'radio',
      type: 'radio',
      options: ['a', 'b'],
    },
    {
      label: '范围选择器',
      key: 'rangeInput',
      type: 'rangeInput',
    },
    {
      label: '选择器',
      key: 'select',
      type: 'select',
      options: ['A', 'B', 'C'],
    },
    {
      label: '滑块',
      key: 'slider',
      type: 'slider',
    },
    {
      label: '开关',
      key: 'switch',
      type: 'switch',
    },
    {
      label: '多行文本框',
      key: 'textarea',
      type: 'textarea',
    },
    {
      label: '穿梭框',
      key: 'transfer',
      type: 'transfer',
      options: ['A', 'B', 'C'],
    },
    {
      label: '时间选择器',
      key: 'time',
      type: 'time',
    },
    {
      label: '树选择器',
      key: 'tree',
      type: 'tree',
      options: [
        {
          label: 'a',
          value: 'a',
          children: [
            { label: 'a1', value: 'a1' },
            { label: 'a2', value: 'a2' },
          ],
        },
        { label: 'b', value: 'b' },
      ],
    },
    {
      label: '上传',
      key: 'upload',
      type: 'upload',
    },
  ],
}
</script>
