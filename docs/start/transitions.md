# 动画

Nuxt 使用 Vue 的`<Transition>`组件来实现页面和布局之间的过渡。

## Page 过渡

你可以启动 Page 过渡，使你的所有页面都能自动过渡。

```ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
```

> 如果你正在改变页面的布局，你设置在这里的`page transtion`将不会运行。你可以使用`layout transtion`代替它。

要在开始时页面之间添加过渡，在你的`app.vue`中添加以下 CSS。

```vue
<!-- app.vue -->
<template>
  <NuxtPage />
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<!-- pages/index.vue -->
<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">About Page</NuxtLink>
  </div>
</template>

<!-- pages/about.vue -->
<template>
  <div>
    <h1>About page</h1>
    <NuxtLink to="/">Home Page</NuxtLink>
  </div>
</template>
```

要在页面设置不同的过渡，设置页面的`definePageMeta`函数的 key`pageTranstion`。

```vue
<!-- app.vue -->
<template>
  <NuxtPage />
</template>
<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>

<!-- pages/about.vue -->
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "rotate",
  },
});
</script>
```

## Layout 过渡

你可以启动 Layout 过渡，使你的所有布局都能自动过渡。

```ts
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
```

要在开始时给页面和布局之间添加过渡，在你的`app.vue`中添加以下 CSS：

```vue
<!-- app.vue -->
<template>
  <div>
    <h1>About page</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "orange",
});
</script>
```

```vue
<!-- layouts/default.vue -->
<template>
  <div>
    <pre>default layout</pre>
    <slot />
  </div>
</template>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
```

```vue
<!-- layouts/orang.vue -->
<template>
  <div>
    <pre>orange layout</pre>
    <slot />
  </div>
</template>

<style scoped>
div {
  background-color: #eebb90;
  padding: 20px;
  height: 100vh;
}
</style>
```

```vue
<!-- pages/index.vue -->
<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>
```

```vue
<!-- pages/about.vue -->
<template>
  <div>
    <h1>About page</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "orange",
});
</script>
```

和`pageTransition`类似，你可以在你的页面组件使用`definePageMeta`自定义`layoutTransition`。

```vue
<script setup lang="ts">
definePageMeta({
  layout: "orange",
  layoutTransition: {
    name: "slide-in",
  },
});
</script>
```

## 全局设置

你可以使用`nuxt.config`在全局中自定义这些默认过渡的名称。

`pageTransition`和`layoutTransition`的键都接收`TransitionProps`作为 JSON 序列化的值，你可以通过`name`，`mode`和有效的过渡属性自定义 CSS 过渡。

```ts
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in", // default
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in", // default
    },
  },
});
```

> 如果你要改变`name`属性，你也可以重命名相应的 CSS 类名。

使用`definePageMeta`为单个的 Nuxt 页面设置 page 或 layout 过渡，并覆盖在`nuxt.config`文件中 page 和 layout 过渡的全局定义。

```vue
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "bounce",
    mode: "out-in", // default
  },
});
</script>
```

## 禁止过渡

`pageTransition`和`layoutTransition`可以在具体的路由中禁止。

```vue
<script setup lang="ts">
definePageMeta({
  pageTransition: false
  layoutTransition: false
})
</script>
```

或者在全局的`nuxt.config`中：

```ts
defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false,
  },
});
```

## JavaScript Hooks

高级的使用情况，你可以在你的 Nuxt 页面中使用 JavaScript hook 创建高度动态和自定义的过渡。

这种使用方式为 JavaScript 动画库（GSAP 和 Tween.js）提供了完美的用例。

```vue
<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "custom-flip",
    mode: "out-in",
    onBeforeEnter: (el) => {
      console.log("Before enter...");
    },
    onEnter: (el, done) => {},
    onAfterEnter: (el) => {},
  },
});
</script>
```

## 动态过渡

使用逻辑条件来应用动态过渡，你可以利用内嵌中间件的方式来为`to.meta.pageTransition`指定一个不同的过渡名称。

```vue
<!-- pages/[id].vue -->
<template>
  <h1>#{{ $route.params.id }}</h1>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    to.meta.pageTransition.name =
      +to.params.id > +from.params.id ? "slide-left" : "slide-right";
  },
});
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
```

```vue
<!-- layout/default.vue -->
<script setup lang="ts">
const route = useRoute();
const id = computed(() => Number(route.params.id || 1));
const prev = computed(() => "/" + (id.value - 1));
const next = computed(() => "/" + (id.value + 1));
</script>

<template>
  <div>
    <slot />
    <div v-if="$route.params.id">
      <NuxtLink :to="prev">⬅️</NuxtLink> |
      <NuxtLink :to="next">➡️</NuxtLink>
    </div>
  </div>
</template>
```

## NuxtPage 的过渡

当在`app.vue`中使用`<NuxtPage />`，过渡属性可以直接通过组件的 prop 来激活全局过渡。

```vue
<template>
  <div>
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'bounce',
          mode: 'out-in',
        }"
      />
    </NuxtLayout>
  </div>
</template>
```
