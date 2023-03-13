# 路由

文件系统路由是 Nuxt 的一个核心特点。所有在`pages/`目录里创建的 vue 文件都对应着一个 URL，展示这个文件的内容。通过对每个页面使用动态导入，Nuxt 利用代码拆分，为所请求的路由提供最少的 JavaScript。

## 页面

Nuxt 的路由基于 vue-router，并从`pages/`目录中创建的每个组件生成路由，基于它们的文件名。

这些文件系统路使用命名约定来创建动态和嵌套路由。

```ts
/**
 * pages/
 * ----| about.vue
 * ----| posts/
 * --------| [id].vue
 */
routes: [
  {
    path: "/about",
    component: "pages/about.vue",
  },
  {
    path: "/posts/:id",
    component: "pages/posts/[id].vue",
  },
];
```

## 导航

`<NuxtList />`组件在它们之间链接页面。它渲染一个`<a>`标签，其`href`属性被设置为页面的路径。应用程序水合后，页面的过度是通过通过改变浏览器的 URL 在 JavaScript 中进行的。这防止了全页面刷新和允许动画过度。

当`<NuxtLink>`进入到客户端的视口时，Nuxt 会自动提前预加载链接页面的组件和有效载荷（生成页面），实现更快的导航。

```vue
<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts/1">Post 1</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts/2">Post 2</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
```

## 路由参数

可以在`<script setup>`块或 Vue 组件的`setup()`方法中使用`useRoute()`，得到当前访问路由的详细信息。

```vue
<script setup>
const route = useRoute();

console.log(route.params.id); // /posts/1 中的 1
</script>
```

## 路由中间件

Nuxt 提供了可定制的路由中间件框架，你可以在你的应用程序中使用，非常适合提取导航到特定路由之前运行的代码。

> 路由中间件在你的 Nuxt 应用的 Vue 部分运行。尽管名字相似，它们和服务端的中间件完全不同，后者是在你的应用的 Nitro 服务器部分运行的。

有三种路由中间件：

1. 匿名路由中间件，在它们使用的页面中直接定义。
2. 命名中间件，放置在`middleware/`目录下，并且会自动通过异步导入加载到使用的页面中。（**_注意：路由中间件的名字必须是标准的 kebab-case，所以`someMiddleware`应该是`some-middleware`_**）
3. 全局路由中间件，放置在`middleware/`目录中，并且会在所有变化的路由中自动运行。

例如一个守卫`/dashboard`页面的`auth`中间件：

```ts
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (isAuthenticated() === false) {
    return navigateTo("/login");
  }
});
```

```vue
<!-- pages/dashboard.vue -->
<template>
  <h1>Welcome to your dashboard</h1>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
```

## 路由校验

Nuxt 通过`definePageMete`中的`validate`属性在你需要校验的所有页面中提供路由校验。

`validate`属性接受`route`作为参数。你可以返回一个布尔值，决定这是否是一个有效的路由，可以用这个页面来呈现。如果你返回`false`，并且另一个匹配的，这将会导致 404 错误。你也可以返回一个包含`statusCode`或`statusMessage`的对象，以 like 响应一个错误（其他的匹配项将不会被检查）。

如果你要使用更复杂的用例，你可以使用匿名路由中间件来代替。

```vue
<script setup>
definePageMeta({
  vaildate: async (route) => {
    return /^\d+$/.test(route.params.id);
  },
});
</script>
```
