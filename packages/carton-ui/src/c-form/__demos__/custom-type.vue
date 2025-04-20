<template>
  <div>
    {{ data }}
    <c-form v-model="data" :option="option" />
  </div>
</template>
<!-- 建议使用 lang=tsx 获得语法简写，无需使用繁杂的h函数嵌套 -->
<script setup lang="tsx">
import type { FormOption } from 'carton-ui'
import { Input } from 'tdesign-vue-next'
import { ref } from 'vue'

type User = {
  fullName?: string
  tel?: number
  range: string[]
}
const data = ref()

const option: FormOption<User> = {
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
      label: '自定义组件',
      key: 'range',
      defaultValue: ['', ''],
      // 自定义组件
      type: data => {
        return (
          <div style="display:flex;">
            <Input
              value={data.range[0]}
              onChange={val => (data.range[0] = val.toString())}
            ></Input>
            <span>~</span>
            <Input
              value={data.range[1]}
              onChange={val => (data.range[1] = val.toString())}
            ></Input>
          </div>
        )
      },
    },
  ],
}
</script>
