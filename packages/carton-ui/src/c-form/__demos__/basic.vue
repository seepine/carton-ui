<template>
  <div>
    {{ data }}
    <c-form v-model="data" :option="option" />
  </div>
</template>
<script setup lang="ts">
import type { FormOption } from 'carton-ui'
import { ref } from 'vue'

const data = ref({
  hobby: ['唱'], // 设置默认值
})

const option: FormOption = {
  /**
   * 提交事件
   * @param form 表单值
   */
  onSubmit: async form => {
    console.log('点击了提交', form)
    // 支持阻塞，例如模拟提交后端
    await new Promise<void>(resolve => setTimeout(() => resolve(), 2500))
  },

  /**
   * 重置事件
   * @param form 表单值
   */
  onReset: form => {
    console.log('点击了重置', form)
  },

  /**
   * 表单项，key为表单字段名称，type为表单输入组件类型
   */
  columns: [
    {
      label: '姓名',
      key: 'fullName',
      rules: [{ required: true, message: '不能为空' }],
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
      defaultValue: 'man', // 也可通过此处设置默认值
      props: {
        options: [
          { label: '男', value: 'man' },
          { label: '女', value: 'feman' },
        ],
      },
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
