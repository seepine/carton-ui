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
  onSubmit: async () =>
    await new Promise<void>(resolve => setTimeout(() => resolve(), 2500)),

  columns: [
    {
      label: '性别',
      key: 'gender',
      type: 'radio',
      defaultValue: 'man',
      // 通过options设置选项
      options: [
        { label: '男', value: 'man' },
        { label: '女', value: 'feman' },
      ],
    },
    {
      label: '喜好',
      key: 'hobby',
      type: 'select',
      // 支持动态变化
      options: data =>
        data.gender === 'man' ? ['唱', '跳', 'rapper'] : ['弹琴', '跳舞'],
    },
    {
      label: '喜好多选',
      key: 'hobbyArray',
      type: 'checkbox',
      // 支持异步动态变化
      options: async data => {
        // 模拟异步从后端获取
        const fetch = (gender: string) => {
          return new Promise<any[]>(resolve => {
            setTimeout(() => {
              resolve(
                gender === 'man' ? ['唱', '跳', 'rapper'] : ['弹琴', '跳舞']
              )
            }, 1000)
          })
        }

        return await fetch(data.gender)
      },
    },
  ],
}
</script>
