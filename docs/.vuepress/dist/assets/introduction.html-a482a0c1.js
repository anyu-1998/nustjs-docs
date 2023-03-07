import{_ as o,M as l,p as a,q as s,R as e,t,N as r,a1 as i}from"./framework-5866ffd3.js";const u={},d=e("h1",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),t(" 简介")],-1),h=e("p",null,"Nuxt 同时提供了前端和后端的功能，因此你可以专注于重要的事情：创建你的 Web 应用程序。",-1),c=e("h2",{id:"什么是-nuxt",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是-nuxt","aria-hidden":"true"},"#"),t(" 什么是 Nuxt ?")],-1),_=e("p",null,"理解什么是 Nuxt，我们需要先理解创建现代应用程序都需要那些：",-1),p=e("li",null,[e("p",null,[e("strong",null,"JavaScript 框架："),t(" 一个 "),e("code",null,"响应式"),t(" 和 "),e("code",null,"组件化"),t(" 的 JavaScript 框架，我们选择 Vue.js。")])],-1),x=e("strong",null,"Webpack 和 Vite：",-1),f={href:"https://webpack.js.org",target:"_blank",rel:"noopener noreferrer"},b={href:"https://vitejs.dev",target:"_blank",rel:"noopener noreferrer"},g=e("strong",null,"最新的 JavaScript 语法：",-1),k={href:"https://esbuild.github.io",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"服务器方面：",-1),m={href:"https://github.com/unjs/h3",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,[e("p",null,[e("strong",null,"路由库："),t(" 一个处理客户端导航的路由库，我们选择 vue-router。")])],-1),j=i('<p>这只是冰山一角，想象一下在你的项目中要设置这些所有的东西，使其发挥作用，然后去长时间维护它。自从 2016 年 10 月以来，我们一直在这样做，调整所有的配置，为所有 Vue 应用程序提供最好的优化和性能。</p><p>Nuxt 处理了这些问题，并且提供了前端和后端的功能，所以你可以专注于重要的事情：创建你的 Web 应用程序。</p><h2 id="视图引擎" tabindex="-1"><a class="header-anchor" href="#视图引擎" aria-hidden="true">#</a> 视图引擎</h2><p>Nuxt 使用 Vue.js 来做视图引擎。所有的 Vue3 能力都适用与 Nuxt。你可以在关键概念部分阅读 Vue 和 Nuxt 集成细节，</p><h2 id="自动化和约定" tabindex="-1"><a class="header-anchor" href="#自动化和约定" aria-hidden="true">#</a> 自动化和约定</h2><p>Nuxt 使用约定俗成的目录结构来将重复的工作自动化，并且允许开发者专注于推送功能。配置文件可以自定义和覆盖默认行为。</p><ul><li>文件入口</li><li>文件系统路由和 api 层</li><li>数据获取工具</li><li>支持 TypeScript 的零配置</li><li>配置构建工具</li></ul>',7),V={href:"/docs/guide/auto-imports",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"渲染模式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#渲染模式","aria-hidden":"true"},"#"),t(" 渲染模式")],-1),w=e("p",null,"Nuxt 提供了不同的渲染模式来适应不同的使用情况：",-1),J=e("ul",null,[e("li",null,"通用渲染（服务端渲染和水合）"),e("li",null,"仅客户端渲染"),e("li",null,"全静态网站的生成"),e("li",null,"混合渲染（每条路由的缓存策略）")],-1),W={href:"/docs/guide/render-modes",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"服务端引擎",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#服务端引擎","aria-hidden":"true"},"#"),t(" 服务端引擎")],-1),E={href:"https://nitro.unjs.io",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[t("在开发中，它使用 Rollup 和 Node.js workers 来实现服务器代码和上下文隔离。它还通过读取 "),e("code",null,"server/api"),t(" 下的文件和 "),e("code",null,"server/middleware"),t(" 下的服务器中间件生成你的服务器 API，")],-1),A=e("p",null,[t("在生产中，Notro 将你的应用程序和服务器构建到一个通用的 "),e("code",null,".output"),t(" 目录中。这个输出很轻量：缩小并且删除 node.js 的所有模块（polyfills 除外）。你可以在任意支持 JavaScript 的系统中部署这些输出。例如：Node.js、serverless 、Workers、边缘渲染或纯静态。")],-1),C={href:"/docs/guide/server-engine",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"生产准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#生产准备","aria-hidden":"true"},"#"),t(" 生产准备")],-1),L=e("p",null,"Nuxt 应用程序可以部署到 Node 或 Deno 服务器上，预渲染以托管到静态环境中，或部署到 serverless 和边缘供应商。",-1),M={href:"/docs/guide/production-ready",target:"_blank",rel:"noopener noreferrer"},P=e("h2",{id:"模块化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#模块化","aria-hidden":"true"},"#"),t(" 模块化")],-1),R=e("p",null,"一个模块化系统允许使用自定义功能和与第三方服务集成扩展 Nuxt。",-1),T={href:"/docs/guide/modular",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#结构","aria-hidden":"true"},"#"),t(" 结构")],-1),D=e("p",null,"Nuxt 由不同的核心包组成。",-1),G={href:"https://github.com/nuxt/nuxt/tree/main/packages/nuxt",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/nuxt/nuxt/tree/main/packages/vite",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/nuxt/nuxt/tree/main/packages/webpack",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/nuxt/nuxt/tree/main/packages/nuxi",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/unjs/nitro",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/nuxt/nuxt/tree/main/packages/kit",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/nuxt/bridge",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,"我们推荐阅读每个概念以全面了解 Nuxt 的功能和每个包的范围。",-1),X=e("h2",{id:"你是-nuxt-吗",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#你是-nuxt-吗","aria-hidden":"true"},"#"),t(" 你是 Nuxt 吗？")],-1),Y=e("p",null,"Nuxt 是你的 Vue.js 项目的主干，在保持灵活性的同时，提供结构，使你有信心建立自己的项目。",-1),Z=e("p",null,"可以通过强大的模块生态系统和钩子引擎进行扩展，它可以容易的连接你的 REST 或 GraphQL 端点，喜欢的 CMS，CSS 框架等。PWA 和 AMP 支持只需要一个模块就可以在你的 Nuxt 项目中实现。",-1);function $(ee,te){const n=l("ExternalLinkIcon");return a(),s("div",null,[d,h,c,_,e("ul",null,[p,e("li",null,[e("p",null,[x,t(" 一个在开发中支持热模块替换 和 在生产中用于打包代码的 bundler，我们支持两种 "),e("a",f,[t("webpack5"),r(n)]),t(" 和 "),e("a",b,[t("Vite"),r(n)]),t("。")])]),e("li",null,[e("p",null,[g,t(" 一个编写最新 JavaScript 语法，并支持旧版浏览器的转译器，我们使用 "),e("a",k,[t("esbuild"),r(n)]),t("。")])]),e("li",null,[e("p",null,[N,t(" 一个在开发中提供服务的服务器，同时支持服务端渲染和 api 路由，Nuxt 使用 "),e("a",m,[t("h3"),r(n)]),t(" 来实现部署的多功能性，例如：serverless，workers，nodejs，卓越的性能。")])]),v]),j,e("p",null,[e("a",V,[t("更多详情"),r(n)])]),S,w,J,e("p",null,[e("a",W,[t("阅读更多"),r(n)])]),B,e("p",null,[t("Nuxt 服务器引擎 "),e("a",E,[t("Nitro"),r(n)]),t(" 解锁了新的全栈功能。")]),y,A,e("p",null,[e("a",C,[t("阅读更多"),r(n)])]),I,L,e("p",null,[e("a",M,[t("更多详情"),r(n)])]),P,R,e("p",null,[e("a",T,[t("更多详情"),r(n)])]),q,D,e("ul",null,[e("li",null,[t("核心引擎："),e("a",G,[t("nuxt"),r(n)])]),e("li",null,[t("打包器："),e("a",Q,[t("@nuxt/vite-builder"),r(n)]),t(" 和 "),e("a",z,[t("@nuxt/webpack-builder"),r(n)])]),e("li",null,[t("命令行界面："),e("a",F,[t("nuxi"),r(n)])]),e("li",null,[t("服务器引擎："),e("a",H,[t("notro"),r(n)])]),e("li",null,[t("开发工具包："),e("a",K,[t("@nuxt/kit"),r(n)])]),e("li",null,[t("Nuxt 2 Bridge: "),e("a",O,[t("@nuxt/bridge"),r(n)])])]),U,X,Y,Z])}const re=o(u,[["render",$],["__file","introduction.html.vue"]]);export{re as default};
