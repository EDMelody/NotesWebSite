# Vue3

## 参考
<!-- # [Vue3官方首页](https://cn.vuejs.org/) -->
[官方文档](https://cn.vuejs.org/)

## 安装与使用

Vue3 和 [Vite](https://www.vitejs.net/) 要求的最低 Node.js 版本是12.0.0或更高版本，最低 npm 版本是6.0或更高版本。

> [!IMPORTANT]
> 在使用vue之前，确保你安装了最新版本的[Node.js]()-[下载地址](https://nodejs.org/en/download/prebuilt-installer)

::: code-group
```sh[npm]
npm create vue@latest
```
```sh[pnpm]
pnpm create vue@latest
```
```sh[yarn]
yarn create vue@latest
```
```sh[bun]
bun create vue@latest
```
:::


这一指令将会安装并执行 create-vue，它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示：

```sh
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

如果不确定是否要开启某个功能，你可以直接按下回车键选择 No。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：

::: code-group
```sh[npm]
cd <your-project-name>
npm install
npm run dev
```
```sh[pnpm]
cd <your-project-name>
pnpm install
pnpm run dev
```
```sh[yarn]
cd <your-project-name>
yarn
yarn dev
```
```sh[bun]
cd <your-project-name>
bun install
bun run dev
```
:::

当你准备将应用发布到生产环境时，请运行：

::: code-group
```sh[npm]
npm run build
```
```sh[pnpm]
pnpm run build
```
```sh[yarn]
yarn build
```
```sh[bun]
bun run build
```
:::