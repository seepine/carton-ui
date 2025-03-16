# carton-ui

## 一、快速入门

### 1. 安装 carton-ui

```shell
npm i carton-ui
```

### 2. 安装 TDesign

> `carton-ui` 基于 [TDesign](https://tdesign.tencent.com/vue-next/getting-started) 封装

```shell
npm i tdesign-vue-next
```

### 3. 安装 unplugin

通过 `unplugin-vue-components` 和 `unplugin-auto-import` 来实现按需引入和自动导入

```
npm install -D unplugin-vue-components unplugin-auto-import
```

### 4. 按需引入

```js
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

import { CartonUiResolver } from 'carton-ui/lib/resolver'

export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [
        TDesignResolver({ library: 'vue-next' })
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({ library: 'vue-next' }),
        CartonUiResolver(), // 添加按需引入
      ],
    }),
  ],
};
```

### 5. 使用

```vue
<c-button>按钮</c-button>
```
