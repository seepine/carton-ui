---
permalink: /components/c-row
---

# c-row/c-col 栅格

对 `t-row/t-col` 进行封装，基本用法一致，不同的是响应式做了不同处理，响应式不再以浏览器宽度为主，而是以 `c-row` 视图的宽度为主。

## 基础用法

`span`、`offset` 等都支持数字或响应式写法。

<demo src="../__demos__/basic.vue"></demo>

## flex 布局

<demo src="../__demos__/flex.vue"></demo>

## 组件配置

### c-row Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| justify | flex 布局下的水平排列方式。可选项：start/end/center/space-around/space-between | String | start   |
| align | 纵向对齐方式，CSS 属性 align-items 值。其中 top 和 start 等效；middle 和 center 等效；bottom 和 end 等效。可选项：start/end/center/stretch/baseline/top/middle/bottom | String | top   |
| gutter | 栅格间隔，数字或响应式，示例：{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 } | Number / Object / Array | 0 |
| tag | 自定义元素标签	 | String | div	 |

### c-col Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| flex | flex 布局填充。CSS 属性 flex 值。示例：2 / 3 / '100px' / 'auto' / '1 1 200px'，支持响应式，例如 `{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }` | String / Number	 | - |
| span | 栅格占位格数，为 0 时相当于 display: none，支持响应式，例如 `{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }`	 | Number/ResponsiveValue | -	 |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格，支持响应式，例如 `{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }`	 | Number/ResponsiveValue | -	 |
| order | 栅格顺序，flex 布局模式下有效，支持响应式，例如 `{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }`	 | Number/ResponsiveValue | -	 |
| pull | 栅格向左移动格数，支持响应式，例如 `{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }`	 | Number/ResponsiveValue | -	 |
| push | 栅格向右移动格数，支持响应式，例如 `{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }`	 | Number/ResponsiveValue | -	 |
| tag | 自定义元素标签	 | String | div	 |

## 类型定义

组件导出以下类型定义

```ts
import type { CRowProps, CColProps } from 'carton-ui'
```
