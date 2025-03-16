<h1 align="center" style="text-align:center;">
<img src="https://cartonui.seepine.com/logo.png" width="128" />
<br />
Carton Ui
</h1>
<p align="center">
	<strong>carton /ˈkɑːrtn/ 纸箱</strong>
  <br/>
  一个基于 Vue3 和 TDesign 的组件库，旨在将逻辑都包装起来，开发者只需要通过配置即可实现复杂的业务功能
</p>
<p align="center">
	<a href="https://cartonui.seepine.com/">https://cartonui.seepine.com</a>
</p>

<p align="center">
  <a target="_blank" href="https://cn.vuejs.org/">
    <img src="https://img.shields.io/badge/Vue-3.3+-green.svg" alt="vue3+" />
  </a>
  <a target="_blank" href="https://tdesign.tencent.com/vue-next/getting-started">
    <img src="https://img.shields.io/badge/TDesign-1.11.0+-green.svg" alt="TDesign-1.11.0+" />
  </a>
  <a target="_blank" href="https://github.com/seepine/carton-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/:license-MIT-blue.svg" alt="MIT" />
  </a>
  <a target="_blank" href='https://github.com/seepine/carton-ui/stargazers'>
		<img src="https://img.shields.io/github/stars/seepine/crco.svg?logo=github" alt="github star"/>
	</a>
</p>



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
