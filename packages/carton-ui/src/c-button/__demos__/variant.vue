<template>
  <div class="flex-row gap-2">
    <c-button :click="handleClick">按钮</c-button>
    <c-button variant="outline" :click="handleClick">按钮</c-button>
    <c-button variant="dashed" :click="handleClick">按钮</c-button>
    <c-button variant="text" :click="handleClick">按钮</c-button>
  </div>
</template>
<script setup lang="ts">
const handleClick = async (e: MouseEvent, delay = 2000) => {
  console.log('点击按钮', delay)
  // 模拟耗时操作
  await new Promise<void>(resolve => setTimeout(resolve, delay))
}
</script>
<style>
.flex-row {
  display: flex;
  flex-direction: row;
}

.gap-2 {
  gap: 8px;
}
</style>
