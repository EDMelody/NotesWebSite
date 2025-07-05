<!--
 * @Author: 
 * @Date: 2025-04-18 15:07:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-07-05 15:21:00
 * @FilePath: \vuepress-vite\docs\zh\work\index.md
 * @Description: 
 * 
-->

```ts

{
  path: '/sortingProgressDetail',
  name: 'sortingProgressDetail',
  component: () => import('@/views/tms/sortingProgress/sortingProgressDetail.vue'),
  meta: {
    title: 'sortingProgressDetail',
    keepAlive: true
  }
},
```
## 近期修改


## 近期模板使用
```ts
// 移动端获取登录用户信息
import { useUserStore } from '@/stores/userInfo.js'
userInfo.value = await useUserStore().getUserInfo()

```
```ts
// 移动端获取codeList列表
import { handleGetCodeListEvent } from '@/utils/publicMethods.js'
await handleGetCodeListEvent('')
```



## 移动端组件升级修改统一vant

  - 终端任务-配送在途-更多相关明细页面暂未设置(电脑不支持访问)
  - 车辆检查

<Badge type="tip" text="河北" />
> [!NOTE] PC 
> 车组维护修改

> [!NOTE] 零售户
> 首页，订单列表修改

<Badge type="tip" text="徐州" />

> [!NOTE] PC
> search table 组件BUG修复
> 储位调整单，储位调整明细性能优化
