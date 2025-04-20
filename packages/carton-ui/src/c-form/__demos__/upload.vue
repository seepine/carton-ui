<template>
  <div>
    {{ data }}
    <c-form v-model="data" :option="option" />
  </div>
</template>
<script setup lang="ts">
import { isArray, type FormOption } from 'carton-ui'
import { ref } from 'vue'

const data = ref({})

const option: FormOption = {
  onSubmit: async form => {
    console.log(form)
    await new Promise<void>(resolve => setTimeout(() => resolve(), 2500))
  },

  columns: [
    {
      label: '默认',
      key: 'file',
      type: 'upload',
      props: {
        requestMethod(files) {
          console.log(files)
          return Promise.resolve({
            status: 'success',
            response: {
              url: '',
              files: (isArray(files) ? files : [files]).map(item => {
                return item
              }),
            },
          })
        },
      },
    },
  ],
}
</script>
