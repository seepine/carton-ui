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
}

const data = ref<User>()

const option: FormOption<User> = {
  onSubmit: async data => {
    console.log('点击了提交', data)
    await new Promise<void>(resolve => setTimeout(() => resolve(), 2500))
  },

  // 可全局设置规则
  rules: {
    fullName: [{ required: true, message: '姓名不能为空' }],
  },

  columns: [
    {
      label: '姓名',
      key: 'fullName',
    },
    {
      label: '电话',
      key: 'tel',
      type: 'number',
      // 也可在每个 column 单独设置
      rules: { required: true, telnumber: true, message: '格式不正确' },
    },
    {
      label: '年龄',
      key: 'age',
      type: 'number',
      // 也可在每个 column 单独设置
      rules: [
        { required: true, message: '年龄不能为空' },
        {
          min: 0,
          message: '年龄必须为正数',
        },
        {
          max: 99,
          message: '年龄不能超过99岁',
        },
      ],
    },
  ],
}
</script>
