<template>
  <div>
    {{ value }}
  </div>
  <c-checkbox
    v-model="value"
    :options="[
      { name: '北京', id: 'beijing' },
      { name: '上海', id: 'shanghai' },
      { name: '广州', id: 'guangzhou' },
    ]"
    :keys="{
      value: 'id',
      label: 'name',
    }"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([])
</script>
