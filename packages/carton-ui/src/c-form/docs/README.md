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
| option | 配置参数 | [FormOption](#formoption) | -      |


## 类型定义

组件导出以下类型定义

```ts
import type { FormOption } from 'carton-ui'
```

### FormOption

> 此处未列出所有属性，更多属性可查看 ts 类型定义，或前往实际场景查看示例

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| columns | 表单项 | Array<[FormColumn](#formcolumn)> | -      |
| onSubmit | 提交事件 | `(data)=>Promise<void>` | -      |
| onReset | 重置事件 | `(data)=>Promise<void>` | -      |
| props | 表单属性 | [TdFormProps](https://tdesign.tencent.com/vue-next/components/form?tab=api#form-props) | -      |

### FormColumn

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| label | 字段标签名称 | string / VNode | -      |
| key | 表单字段名称 | string | -      |
| type | 表单项类型 | string | -      |
| defaultValue | 表单项默认值 |  | -      |
| options | 字典项，例如类型为checkbox或select等需要 | `Array<any>` | -      |
| props | 组件Props，会透传给实际组件，例如 `type='number'` 时，即可传入 [InputNumberProps](https://tdesign.tencent.com/vue-next/components/input-number?tab=api) | object | -      |
| formItemProps | 表单项Props，会透传给 `t-form-item` |  [TdFormItemProps](https://tdesign.tencent.com/vue-next/components/form?tab=api#formitem-props) | -      |
