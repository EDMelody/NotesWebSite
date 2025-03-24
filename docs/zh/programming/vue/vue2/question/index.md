<!--
 * @Author: 
 * @Date: 2025-02-18 15:50:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-02-18 16:14:16
 * @FilePath: \vuepress-vite\docs\zh\programming\vue\vue2\question\index.md
 * @Description: 
 * 
-->
[ElmentUI官方文档](https://element.eleme.cn/#/zh-CN)

## 动态切换el-table列名，导致设置fixed列错位问题

在 Vue 中，当使用动态添加 `<el-table-column>` 时，使用 Vue 的 nextTick 方法来确保 DOM 更新完成后再进行操作。例如，可以在添加列后使用 nextTick 来重新计算列宽，代码如下：
```
  this.$nextTick(() => {
    this.$refs.table.doLayout();
  });
```