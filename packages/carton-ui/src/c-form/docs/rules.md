---
permalink: /form/rules
---

# c-form 规则校验

通过 `rules` 指定校验规则。

<demo src="../__demos__/rules.vue"></demo>

## 组件配置

### FormOption Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| rules | 总校验规则 | { [key: string]: FormRule[] } | -      |

### FormColumn Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| rules | 校验规则 | FormRule / FormRule[] | -      |
