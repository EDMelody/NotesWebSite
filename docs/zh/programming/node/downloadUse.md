# Node.js


## 参考

[官方文档-英](https://nodejs.org/docs/latest/api/) &nbsp;&nbsp;&nbsp; [官方网站-英](https://nodejs.org/en) &nbsp;&nbsp;&nbsp; [下载地址](https://nodejs.org/en/download/prebuilt-installer) &nbsp;&nbsp;&nbsp; [GIthub](https://github.com/nodejs/node)

## 安装node-v20.10.0

双击下载文件(node-v20.10.0-x64.msi) >> 同意协议 >> 一直下一步即可

## 安装cnpm
```sh
npm install -g cnpm
```

## npm镜像源
::: code-group
```sh[官方源]
npm config set registry https://registry.npmjs.org/
```
```sh[淘宝源]
npm config set registry https://registry.npmmirror.com/
```
```sh[cnpm源]
npm config set registry https://r.cnpmjs.org/
```
```sh[阿里源]
npm config set registry https://npm.aliyun.com/
```
:::

## 安装成功检查
```sh
// 输出如下所示即成功
node -v
// 例：v20.10.0
npm -v
// 例：v10.2.3
cnpm -v
// cnpm@9.4.0 (C:\Users\neusoft\AppData\Roaming\npm\node_modules\cnpm\lib\parse_argv.js)
// npm@9.9.2 (C:\Users\neusoft\AppData\Roaming\npm\node_modules\cnpm\node_modules\npm\index.js)
// node@20.10.0 (C:\Program Files\nodejs\node.exe)
// npminstall@7.12.0 (C:\Users\neusoft\AppData\Roaming\npm\node_modules\cnpm\node_modules\npminstall\lib\index.js)
// prefix=C:\Users\neusoft\AppData\Roaming\npm
// win32 x64 10.0.19045
// registry=https://registry.npmmirror.com
```