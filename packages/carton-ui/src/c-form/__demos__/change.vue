<template>
  {{ form }}
  <c-form v-model="form" :option="option" />
</template>
<script setup lang="ts">
import type { FormOption } from 'carton-ui'
import { ref } from 'vue'

type User = {
  fullName?: string
  gender?: 'man' | 'feman'
  tel?: number
  age?: number
}
const form = ref<User>()

const option: FormOption<User> = {
  columns: [
    {
      label: '姓名',
      key: 'fullName',
      // 首参数是值
      onChange: val => {
        console.log(val)
      },
    },
    {
      label: '性别',
      key: 'gender',
      type: 'radio',
      options: [
        { label: '男', value: 'man' },
        { label: '女', value: 'feman' },
      ],
      // 第二个参数可以获取更多，data可以直接改变表单值
      onChange: (val, ctx) => {
        console.log(val)
        ctx.data.fullName = `选择了 ${val}`
      },
    },
  ],
}
</script>
