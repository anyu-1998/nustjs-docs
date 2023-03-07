# 简介

Nuxt 同时提供了前端和后端的功能，因此你可以专注于重要的事情：创建你的 Web 应用程序。

## 什么是 Nuxt ?

理解什么是 Nuxt，我们需要先理解创建现代应用程序都需要那些：

- **JavaScript 框架：** 一个 `响应式` 和 `组件化` 的 JavaScript 框架，我们选择 Vue.js。

- **Webpack 和 Vite：** 一个在开发中支持热模块替换 和 在生产中用于打包代码的 bundler，我们支持两种 [webpack5](https://webpack.js.org) 和 [Vite](https://vitejs.dev)。

- **最新的 JavaScript 语法：** 一个编写最新 JavaScript 语法，并支持旧版浏览器的转译器，我们使用 [esbuild](https://esbuild.github.io)。

- **服务器方面：** 一个在开发中提供服务的服务器，同时支持服务端渲染和 api 路由，Nuxt 使用 [h3](https://github.com/unjs/h3) 来实现部署的多功能性，例如：serverless，workers，nodejs，卓越的性能。

- **路由库：** 一个处理客户端导航的路由库，我们选择 vue-router。

这只是冰山一角，想象一下在你的项目中要设置这些所有的东西，使其发挥作用，然后去长时间维护它。自从 2016 年 10 月以来，我们一直在这样做，调整所有的配置，为所有 Vue 应用程序提供最好的优化和性能。

Nuxt 处理了这些问题，并且提供了前端和后端的功能，所以你可以专注于重要的事情：创建你的 Web 应用程序。

## 视图引擎

Nuxt 使用 Vue.js 来做视图引擎。所有的 Vue3 能力都适用与 Nuxt。你可以在关键概念部分阅读 Vue 和 Nuxt 集成细节，

## 自动化和约定

Nuxt 使用约定俗成的目录结构来将重复的工作自动化，并且允许开发者专注于推送功能。配置文件可以自定义和覆盖默认行为。

- 文件入口
- 文件系统路由和 api 层
- 数据获取工具
- 支持 TypeScript 的零配置
- 配置构建工具

[更多详情](/docs/guide/auto-imports)

## 渲染模式

Nuxt 提供了不同的渲染模式来适应不同的使用情况：

- 通用渲染（服务端渲染和水合）
- 仅客户端渲染
- 全静态网站的生成
- 混合渲染（每条路由的缓存策略）

[阅读更多](/docs/guide/render-modes)

## 服务端引擎

Nuxt 服务器引擎 [Nitro](https://nitro.unjs.io) 解锁了新的全栈功能。

在开发中，它使用 Rollup 和 Node.js workers 来实现服务器代码和上下文隔离。它还通过读取 `server/api` 下的文件和 `server/middleware` 下的服务器中间件生成你的服务器 API，

在生产中，Notro 将你的应用程序和服务器构建到一个通用的 `.output` 目录中。这个输出很轻量：缩小并且删除 node.js 的所有模块（polyfills 除外）。你可以在任意支持 JavaScript 的系统中部署这些输出。例如：Node.js、serverless 、Workers、边缘渲染或纯静态。

[阅读更多](/docs/guide/server-engine)

## 生产准备

Nuxt 应用程序可以部署到 Node 或 Deno 服务器上，预渲染以托管到静态环境中，或部署到 serverless 和边缘供应商。

[更多详情](/docs/guide/production-ready)

## 模块化

一个模块化系统允许使用自定义功能和与第三方服务集成扩展 Nuxt。

[更多详情](/docs/guide/modular)

## 结构

Nuxt 由不同的核心包组成。

- 核心引擎：[nuxt](https://github.com/nuxt/nuxt/tree/main/packages/nuxt)
- 打包器：[@nuxt/vite-builder](https://github.com/nuxt/nuxt/tree/main/packages/vite) 和 [@nuxt/webpack-builder](https://github.com/nuxt/nuxt/tree/main/packages/webpack)
- 命令行界面：[nuxi](https://github.com/nuxt/nuxt/tree/main/packages/nuxi)
- 服务器引擎：[notro](https://github.com/unjs/nitro)
- 开发工具包：[@nuxt/kit](https://github.com/nuxt/nuxt/tree/main/packages/kit)
- Nuxt 2 Bridge: [@nuxt/bridge](https://github.com/nuxt/bridge)

我们推荐阅读每个概念以全面了解 Nuxt 的功能和每个包的范围。

## 你是 Nuxt 吗？

Nuxt 是你的 Vue.js 项目的主干，在保持灵活性的同时，提供结构，使你有信心建立自己的项目。

可以通过强大的模块生态系统和钩子引擎进行扩展，它可以容易的连接你的 REST 或 GraphQL 端点，喜欢的 CMS，CSS 框架等。PWA 和 AMP 支持只需要一个模块就可以在你的 Nuxt 项目中实现。
