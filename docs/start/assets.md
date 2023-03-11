# 资源

Nuxt 使用两个目录处理资源，如：样式表、字体、图片。

- `public/`目录下的内容在服务的根部按照原样提供。
- `assets/`目录包含着你想要构建工具处理的所有资源。

## `public/` 目录

`public/`目录被用为静态资源公共服务器，在你的应用程序中公开的已定义的 URL。

你可以从你的应用程序的代码中或者从浏览器的根 URL`/`下，获取在`public/`目录下的文件。

**_示例_**

例如，引用在`public/img/`目录中的图片文件，可以利用静态 URL`/img/nuxt.png`。

```vue
<template>
  <img src="/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

## `assets/` 目录

Nuxt 使用 Vite 或 webpack 构建和打包你的应用程序。这些构建工具主要的作用是处理 JavaScript 文件，但是他们可以通过 plugins 或者 loaders 扩展，以处理其他类型的资源，如：样式表，字体。SVG。这一步对原始文件的转化是为了性能和缓存。如：样式表最小化，浏览器缓存无效化。

按照约定，Nuxt 使用`assets/`目录存储这些文件，但是这个目录没有自动扫描功能，你可以使用如何其他的名字来代替它。

在你的应用程序代码里，你可以使用`~/assets/`路径引用位于`assets/`目录里的文件。

**_示例_**

例如，引入一个将要处理的图片文件，如果构建工具被配置处理这个文件扩展名，则该文件被处理。

```vue
<template>
  <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

**_Nuxt 不会在静态 URL 中提供`assets/`目录下的文件，如`/assets/my-file.png`。如果你需要一个静态 URL，请使用`public/`目录。_**

## 全局样式导入

在你的 Nuxt 组件样式表里插入全局声明，你可以在你的`nuxt.config`文件中使用 Vite 选项。

**_示例_**

在这个示例里，有一个包含颜色变量的 sass 局部文件，以便于你的 Nuxt 的页面和组件使用

```scss
$primary: #49240f;
$secondary: #e4a790;
```

如果在`nuxt.config`中

```ts
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/_color.scss" as *;`,
        },
      },
    },
  },
});
```
