# SEO 和 Meta

使用强大的 head 配置，`useHead`，组件来改进你的 Nuxt 应用的 SEO。

## app Head

在你的`nuxt.config.ts`中提供一个 app.head 属性，允许你自定义你整个应用程序的 head。

> 这个方法不允许你提供响应式数据，如果你需要全局的响应式数据你可以在你的`app.vue`中使用`useHead`。

在配置中可以使用更便捷的配置：`chareset`和`viewport`。你也可以提供下面列出的任何一个键的类型。

**_默认值_**

开箱即用，Nuxt 提供合理的默认值，如果需要，你可以覆盖它。

- `charset`: `utf-8`
- `viewport`: `width=device-width, initial-scale=1`

**_示例_**

```ts
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=500, initial-scale=1",
      title: "My App",
      meta: [{ name: "description", content: "My amazing site" }],
    },
  },
});
```

## 组合式: `useHead`

`useHead`组合式函数允许你以编程后响应的管理你的 head 标签，由 Unhead 提供。

所有的组合式，它只能在组件的`setup`和生命周期钩子中使用。

**_示例_**

```vue
<script setup lang="ts">
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello World')" }],
});
</script>
```

## 组合式：`useSeoMeta` 和 `useServerSeoMeta`

`useSeoMeta`和`useServerSeoMeta`组合函数允许你把你的网站的 SEO meta 标签定义为一个完全支持 TypeScript 的平面对象。

这个有助于你避免错别字和常见错误，如使用`name`而不是`property`。

在大部分情况下，meta 不需要响应式的，因为搜索引擎只会扫描最初的加载。因此我们推荐使用`useServerSeoMeta`作为一个注重性能的工具，它不会在客户端做任何事情。

**_简单示例_**

```vue
<script setup lang="ts">
useServerSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
```

**_响应式示例_**

当插入的标签是响应式，例如：来自于 API 请求，你应该使用计算属性的 getter 语句，相同的`useHead`。

```vue
<script setup lang="ts">
const data = useFetch(() => $fetch("/api/example"));

useServerSeoMeta({
  ogTitle: () => `${data.value?.title} - My Site`,
  description: () => data.value?.description,
  ogDescription: () => data.value?.description,
});
</script>
```

## 组件

Nuxt 提供了`<Title>`, `<Base>`, `<NoScript>`, `<Style>`, `<Meta>`, `<Link>`, `<Body>`, `<Html>`和`<Hand>`组件，因此你可以在你的组件的模板中直接创建`<meta>`标签.

因为这些组件名字与本地 HTML 元素匹配，非常重要的一点，它们在模板中都是大写的。

`<Head>`和`<Body>`可以接收 meta 标签的嵌套，但是这对嵌套的 meta 标签在最终渲染的 HTML 没有效果。

**_实例_**

```vue
<template>
  <div>
    <Head>
      <TItle>{{ title }}</TItle>
      <Meta name="description" :content="title" />
      <Style
        type="text/css"
        children="body { background-color: green; }"
      ></Style>
    </Head>
  </div>
</template>

<script setup>
const title = ref("Hello World");
</script>
```

## 类型

下面是用于`useHead`，`app.head`和组件的非响应式类型。

```ts
interface MetaObject {
  title?: string;
  titleTemplate?: string | ((title?: string) => string);
  templateParams?: Record<string, string | Record<string, string>>;
  base?: Base;
  link?: Link[];
  meta?: Meta[];
  style?: Style[];
  script?: Script[];
  noscript?: Noscript[];
  htmlAttrs?: HtmlAttributes;
  bodyAttrs?: BodyAttributes;
}
```

## 特殊注意

**_响应式_**

响应式是支持所有属性的，如：计算属性、计算属性的 getter、refs 和 reactive。

推荐使用计算属性的 getter `computed({getters: () => {}})`，而不是`computed(() => {})`。

```vue
<!-- 方式一 -->
<script setup lang="ts">
const desc = ref("My amazing site");

useHead({
  meta: [{ name: "description", content: desc }],
});
</script>

<!-- 方式二 -->
<template>
  <div>
    <Meta name="description" :content="desc" />
  </div>
</template>
<script setup>
const desc = ref("My amazing site.");
</script>
```

**_标题模板_**

你能使用`titleTemplate`选项提供一个动态模板，用来自定义你的网站的 title，将你的网站的名字添加到每一个页面的 title 中。

`titleTemplate`可以是任意字符串，其中`%s`被替换为 title，或者函数。

如果想你使用函数，就不能在你的`nuxt.config`中设置，推荐在你的`app.vue`文件里设置，它将用于你网站的所有页面。

```vue
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}- Site Title` : `Site Title`;
  },
});
</script>
```

现在，如果你在你网站的另一个页面中使用`useHead`将标题设置为`My page`，标题将在浏览器选项卡中显示为`My Page - Site - Title`，你也可以将 null 传递给网站标题的默认值。

**_Body 标签_**

你可以在合适的标签上使用`tagPosition: 'bodyClose'`选项，将它们添加到`<body>`标签的结束位置。

```vue
<script setup lang="ts">
useHead({
  script: [
    {
      src: "https://third-party-script.com",
      // 可选项：'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "bodyClose",
    },
  ],
});
</script>
```

**_使用`definePageMeta`_**

在你的`pages/`目录内部，你可以在当前的路由中使用`definePageMeta`和`useHead`一起设置基本元数据。

你可以先设置当前页面的 title，然后在你的 layout 文件中，你可能使用之前设置的路由的源信息。

```vue
<script setup>
definePageMeta({
  title: "Some Page",
});
</script>

<script setup>
const route = useRoute();

useHead({
  meta: [{ property: "og:title", content: "App Name - ${route.meta.title`" }],
});
</script>
```

**_动态 title_**

在下面的示例中，`titleTemplate`可以设置为带有占位符`%s`的字符串或者函数，这允许为你的 Nuxt 应用程序的每一个路由动态设置页面 title 时具有更大的灵活性。

```vue
<script setup>
useHead({
  titleTemplate: "%s - Site Title",
  // 或
  titleTemplate: (productCategory) => {
    return productCategory ? `${productCategory} - Site Title` : "Site Title";
  },
});
</script>
```

`nuxt.config`也被用作设置页面标题的另一种方式。然而，`nuxt.config`不允许页面的 title 是动态的。因此，推荐在`app.vue`文件中使用`titleTemplate`添加动态 title，然后将其用于 Nuxt 应用程序的所有路由。

**_外部的 CSS_**

下面的例子显示如何使用`useHead`的 link 属性或使用`<link>`组件来启用谷歌字体。

```vue
<template>
  <div>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      crossorigin=""
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>
```
