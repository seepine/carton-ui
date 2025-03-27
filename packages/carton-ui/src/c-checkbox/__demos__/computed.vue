<template>
  <div>
    {{ value }}
  </div>
  <t-radio-group v-model="type" :options="['福建', '广东']" />
  <c-checkbox v-model="value" :options="options" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([])

const type = ref('福建')

const options = async () => {
  return type.value === '福建'
    ? await new Promise<any[]>(resolve => {
        setTimeout(() => resolve(['福州', '厦门', '龙岩', '三明']), 2500)
      })
    : await new Promise<any[]>(resolve => {
        setTimeout(() => resolve(['广州', '深圳', '珠海']), 2500)
      })
}
</script>
