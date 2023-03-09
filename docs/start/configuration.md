# 配置

默认情况下，Nuxt 的配置覆盖了大多数的使用情况。`nuxt.config.ts`文件会覆盖或者扩展这些默认的配置。

## Nuxt 配置

`nuxt.config.ts`文件在 Nuxt 项目的根目录下，可以覆盖或扩展应用程序的行为。

一个最小的配置文件导出`defineNuxtConfig`函数，其中包含着你配置的对象。`defineNuxtConfig`函数是全局可用的，不需要导入。

```ts
export default defineNuxtConfig({
  // Nuxt config
});
```

这个文件经常在文档中被提到，比如：添加一个自定义脚本、注册一个模块、或改变渲染模式。

你不需要使用 TypeScript 来构建 Nuxt 应用程序。然而，强烈推荐`nuxt.config`文件使用`.ts`扩展名。你能从你的 IDE 提示中受益，避免在编辑你的配置时出现错别字和错误

## 环境变量

`runtimeConfig`将环境变量暴露到你的应用程序的其他地方。默认情况下，这些变量只能在服务端使用。在`runtimeConfig.public`中的变量也可以再客户端使用。

这些变量应该在 nuxt.config.ts 中被定义，可以使用环境变量来覆盖它。

**_nuxt.config.ts_**

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    // 只可以在服务端获取的变量
    apiSecret: 123,
    // 也可以在客户端获取的变量
    public: {
      apiBase: "/api",
    },
  },
});
```

**_.env_**

```.env
NUXT_API_SECRET=api_secret_token
```

这些变量通过`useRuntimeConfig`可组合的暴露给你的应用程序的其他部分使用。

```vue
<script setup>
const runtimeConfig = useRuntimeConfig();
</script>
```

## 应用配置

`app.congfig.ts`文件位于项目的根目录下，用来暴露在构建时确定的公共变量。与`runtimeConfig`选项相反的是，它不能被环境变量所覆盖。

一个最小的配置文件导出`defineAppConfig`函数，其中包含着你配置的对象。`defineAppConfig`函数是全局可用的，不需要导入。

```ts
export default defineAppConfig({
  title: "Hello Nuxt",
  theme: {
    dark: true,
    colors: {
      primary: "#ff0000",
    },
  },
});
```

这些变量通过`useAppConfig`可组合的暴露给你的应用程序的其他部分使用。

```vue
<script setup>
const appConfig = useAppConfig();
</script>
```

## runtimeConfig **_VS_** app.config

如上所述，`runtimeConfig`和`app.config`都是给你的应用程序的其他部分暴露变量的。

- `runtimeConfig`: 需要在构建之后使用环境变量指定的私有的或公共的令牌
- `app.config`: 在构建时确定公共令牌，网站配置，如主题的变化，标题和所有的不敏感的项目配置。

| 特点             | runtimeConfig | app.config |
| ---------------- | :-----------: | :--------: |
| 客户端           |   Hydrated    |  Bundled   |
| 环境变量         |    ✅ Yes     |   ❌ No    |
| 响应式           |    ✅ Yes     |   ✅Yes    |
| 类型支持         |  ✅ Partial   |   ✅ Yes   |
| 请求配置         |     ❌ No     |   ✅Yes    |
| 模块热替换       |     ❌ No     |   ✅ Yes   |
| 非原始的 Js 类型 |     ❌ No     |   ✅ Yes   |

## 其他的配置文件

Nuxt 使用`nuxt.config.ts`文件作为唯一的配置文件，并且跳过读取外部配置文件。在构建你的项目过程中，你可能会需要配置这些。下面是一些常见的推荐配置：

```ts
export default defineNuxtConfig({
  // 和 Nitro、PostCss、Vite、webpack相关的配置
  nitro: {},
  postcss: {},
  vite: {},
  webpack: {},
});
```

下面是其他的推荐配置文件：

| 名字        |      配置文件      |                                         更多                                          |
| ----------- | :----------------: | :-----------------------------------------------------------------------------------: |
| TypeScript  |   tsconfig.json    |     [更多详情](https://nuxt.com/docs/guide/concepts/typescript#nuxttsconfigjson)      |
| EsLint      |    .eslintrc.js    | [更多详情](https://eslint.org/docs/latest/user-guide/configuring/configuration-files) |
| Prettier    |  .prettierrc.json  |              [更多详情](https://prettier.io/docs/en/configuration.html)               |
| Stylelint   | .stylelintrc.json  |                 [更多详情](https://stylelint.io/user-guide/configure)                 |
| TailwindCSS | tailwind.config.js |               [更多详情](https://tailwindcss.nuxt.dev/tailwind/config)                |
| Vitest      |  vitest.config.ts  |                         [更多详情](https://vitest.dev/config)                         |
