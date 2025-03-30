<template>
  <div>
    <c-row>
      <c-col :flex="2" :order="{ xs: 0, sm: 1 }">
        <div style="background-color: var(--td-brand-color-6)">Col1</div>
      </c-col>
      <c-col :flex="3" :order="{ xs: 1, sm: 0 }">
        <div style="background-color: var(--td-brand-color-4)">Col2</div>
      </c-col>
    </c-row>
  </div>
</template>
