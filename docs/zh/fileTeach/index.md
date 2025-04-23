---
layout: doc
title: 啊哦哟
---
[官方文档](https://vitepress.dev/zh/) &nbsp;&nbsp;&nbsp; [官方文档-英](https://vitepress.dev/) &nbsp;&nbsp;&nbsp; [Github](https://github.com/vuejs/vitepress)

## 操作

```vitepress
layout: doc    // 页面布局 | 默认值 doc 可选 doc/page/home
// 当layout为home时可配置
features:
    - title: 百度
      details: 百度查询
      link: www.baidu.com

title: 标题    // 页面标题
// 通过如下方式可直接获取配置标题
## {{ $frontmatter.title }}
```

|属性|默认值|可选参数|
| --------------------- | --------------------- | --------------------- |
|layout|doc|doc/page/home|

`高亮`

- 标题
- 标题
  -  二级标题

### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />
### Title <Badge type="info">custom element</Badge>

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。