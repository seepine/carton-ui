<template>
  <div>
    <c-row>
      <c-col
        :span="{
          xs: 3,
          sm: 4,
          md: 6,
          lg: 8,
          xl: 10,
        }"
      >
        <div style="background-color: var(--td-brand-color-6)">Col</div>
      </c-col>
      <c-col
        :span="{
          xs: 9,
          sm: 8,
          md: 6,
          lg: 4,
          xl: 2,
        }"
      >
        <div style="background-color: var(--td-brand-color-4)">Col</div>
      </c-col>
    </c-row>
  </div>
</template>
