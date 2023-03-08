# 安装

使用我们的在线启动器快速开始 Nuxt，或从你的本地终端启动。

## 线上启动

你可以使用我们的线上沙箱在你的浏览器上开始玩 Nuxt3。

[在 StackBlitz 上玩](https://stackblitz.com/github/nuxt/starter/tree/v3-stackblitz)
[在 CodeSandbox 上玩](https://codesandbox.io/s/github/nuxt/starter/tree/v3-codesandbox)

通过打开[nuxt.new](https://nuxt.new)来开始使用我们的启动器和主题之一。

## 准备

在开始之前，请确保你安装了推荐的设置。

- Node.js
- Visual Studio Code
- Volar Extension
  - TypeScript Vue Plugin(Volar)

如果你已经安装了 Node.js，检查 `node --version`的版本高于 16.11

## New Project

打开终端并使用以下命令创建一个新的启动项目：

```npx
npx nuxi init <项目名>
```

```pnpm
pnpm dlx nuxi init <项目名>
```

在 Visual Studio Code 打开你的项目。

```cd
code <项目名>
```

安装依赖

```pnpm
pnpm install
```

**_运行 pnpm install 之前，确保你`.npmrc`中有`shamefully-hoist=true`_**

## 开发服务器

现在你可以在开发模式下启动你的 Nuxt 应用程序

```pnpm
pnpm dev -o
```

## 下一步

现在你已经创建了你的 Nuxt3 项目，你已经准备好开始构建你的应用程序。
