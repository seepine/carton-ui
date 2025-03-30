---
permalink: /form/base
---

# c-form 表单

配置驱动视图的表单，通过 `columns` 动态生成表单，用法简单且具有高扩展性。

## 基础用法

表单项主要通过 `label, key, type` 用以设置表单显示标签、表单属性和表单项类型。
更多配置在设置了 `type` 表单项类型后，根据实际类型的 `props` 而定

<demo src="../__demos__/basic.vue"></demo>

## 组件配置

### Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| option | 配置参数 | FormOption | -      |

## 类型定义

组件导出以下类型定义

```ts
import type { FormOption } from 'carton-ui'
```
