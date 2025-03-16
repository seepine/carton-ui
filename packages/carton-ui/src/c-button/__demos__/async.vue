<template>
  <div class="flex-row gap-2">
    <c-button :click="handleClick">异步按钮</c-button>
    <c-button theme="primary" :click="handleClick">异步按钮</c-button>
    <c-button theme="danger" :click="handleClick">异步按钮</c-button>
    <c-button theme="warning" :click="handleClick">异步按钮</c-button>
    <c-button theme="success" :click="handleClick">异步按钮</c-button>
  </div>
</template>
<script setup lang="ts">
const handleClick = async () => {
  // 模拟耗时操作
  await new Promise<void>(resolve => setTimeout(resolve, 2000))
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
