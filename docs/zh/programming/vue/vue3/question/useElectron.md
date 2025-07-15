<!--
 * @Author: 
 * @Date: 2025-07-15 10:19:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-07-15 11:19:10
 * @FilePath: \vuepress-vite\docs\zh\programming\vue\vue3\question\useElectron.md
 * @Description: 
 * 
-->
# VUE3 搭建跨平台桌面应用Electron window篇


## 安装依赖

```sh
  npm i electron electron-build --save-dev
```

## 版本

- 当前使用的依赖版本号
```
  "electron": "^29.3.1",
  "electron-builder": "^24.6.0",
```

## 添加配置文件

- 根目录下创建`electron`文件夹，添加[`main.js`](#代码),[`preload.js`](#代码)文件
- 添加[`electron-builder.yml`](#代码)打包配置
- 在`package.json`文件中增加启动和打包命令，如果没有cross-env依赖需要先安装依赖`npm run cross-env --save-dev`

  - `ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/` 更换使用镜像
  - `ELECTRON_BUILDER_SKIP_SIGN=true` 跳过签名
  - `DEBUG=electron-builder` 查看详细日志
  - `--config electron-builder.yml` 使用配置，可以不设，默认为该文件

  ### 手动下载文件
    - 下载文件`electron-v29.3.1-win32-x64.zip`
    
    - 存放到`C:\Users\<用户名>\AppData\Local\electron\Cache`目录下，文件名不可更改

    - 下载文件`winCodeSign-2.6.0.7z`

    - 存放到`C:\Users\<用户名>\AppData\Local\electron-builder\winCodeSign`目录下，文件名不可更改，可以手动解压，避免执行自动解压报错问题
    
    [点击下载electron-v29.3.1-win32-x64.zip](https://github.com/electron/electron/releases/download/v29.3.1/electron-v29.3.1-win32-x64.zip) 
    
    [点击下载winCodeSign-2.6.0.7z](https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z)

``` package.json
  "scripts": {
      "electron": "cross-env NODE_ENV=development electron .",
      "electron:build": "vite build && cross-env ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/ ELECTRON_BUILDER_OFFLINE=true ELECTRON_BUILDER_CACHE=\"C:\\Users\\<用户名>\\AppData\\Local\\electron-builder\" DEBUG=electron-builder ELECTRON_BUILDER_SKIP_SIGN=true electron-builder --config electron-builder.yml --win --x64",
  }
```
本地运行需要修改本地地址`main.js`中

## 问题
```sh
  "https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z": dial tcp 20.205.243.166:443: connectex: 
```
无法连接 GitHub 下载服务器，尝试使用 electron-builder 离线打包


## 代码

:::details main.js
<<< @/zh/programming/vue/vue3/question/codeFile/main.js{js}
:::

:::details preload.js
<<< @/zh/programming/vue/vue3/question/codeFile/preload.js{js}
:::

:::details electron-builder.yml
<<< @/zh/programming/vue/vue3/question/codeFile/electron-builder.yml{yml}
:::
