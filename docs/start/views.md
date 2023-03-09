# 视图

Nuxt 提供了若干个组件层来实现你的应用程序的用户界面。

## app.vue

默认情况下，Nuxt 会把 app.vue 文件作为入口，并渲染应用程序的每一个路径下的内容。

```vue
<template>
  <div>
    <h1>Welcome to the homePage</h1>
  </div>
</template>
```

## Components

大多数组件是用户界面中可以重复的部分，比如按钮和菜单，在 Nuxt 中，你可以在`components/`目录下创建这些组件，并且它们会自动提供给你的应用程序，不需要你导入它们。

**_定义_**

```vue
<!-- 在components/AppAlert.vue文件中定义 -->
<template>
  <span>
    <slot />
  </span>
</template>
```

**_使用_**

```vue
<!-- 在app.vue文件中使用 -->
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component. </AppAlert>
  </div>
</template>
```

## Pages

pages 代表着每一个路由模式的视图，`pages/`目录中的每一个文件都代表着一个显示内容不同的路由。

去使用 pages，创建`pages/index.vue`文件并添加`<NuxtPage />`组件到`app.vue`里面。你现在可以通过在`pages/`目录下添加新文件来创建更多的页面和它们相应的路由。

**`pages/index.vue`**

```vue
<template>
  <div>
    <h1>Welcome to homePage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
  </div>
</template>
```

**`pages/about.vue`**

```vue
<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>
```

**`app.vue`**

```vue
<template>
  <div>
    <NuxtPage />
  </div>
</template>
```

## Layouts

布局是对页面的包装，包含着多个页面的普通用户界面，比如 header 和 footer 的显示。布局是 Vue 文件，使用`<slot />`组件显示页面内容。在默认情况下，使用`layouts/default.vue`文件。自定义布局可以作为你的页面元数据的一部分来设置。

**_如果在你的应用程序中只有一个布局，我们推荐使用 app.vue 的`<NuxtPage />`组件来代替_**
**`layouts/default.vue`**

```vue
<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
```

**`pages/index.vue`**

```vue
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
  </div>
</template>
```

**`pages/about.vue`**

```vue
<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>
```
