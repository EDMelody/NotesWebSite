# 
## vitePress 数学方程式使用问题

```npm
npm add -D markdown-it-mathjax3
```

-启动报错

```error
> docs:dev
> vitepress dev docs
failed to start server. error:
You need to install `markdown-it-mathjax3` to use math support.
Error: You need to install `markdown-it-mathjax3` to use math support.
    at createMarkdownRenderer (file:///C:/Users/neusoft/node_modules/vitepress/dist/node/serve-BwR5EPUJ.js:37578:13)        
    at async createMarkdownToVueRenderFn (file:///C:/Users/neusoft/node_modules/vitepress/dist/node/serve-BwR5EPUJ.js:38282:14)                                                                                                                         14)
    at async configResolved (file:///C:/Users/neusoft/node_modules/vitepress/dist/node/serve-BwR5EPUJ.js:42320:23)
    at async Promise.all (index 0)
    at async resolveConfig (file:///C:/Users/neusoft/node_modules/vite/dist/node/chunks/dep-BKbDVx1T.js:69639:5)
    at async _createServer (file:///C:/Users/neusoft/node_modules/vite/dist/node/chunks/dep-BKbDVx1T.js:65857:20)
    at async createDevServer (file:///C:/Users/neusoft/node_modules/vitepress/dist/node/cli.js:405:20)
```

## 解决方案

```npm
npm add -D markdown-it markdown-it-mathjax3 vitepress
```