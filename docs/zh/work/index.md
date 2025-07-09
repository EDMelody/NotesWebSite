<!--
 * @Author: 
 * @Date: 2025-04-18 15:07:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-07-09 18:09:24
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

notDeliveryV2修改到了顶部query调试

## 备份目录

- /tms/delivery/crossBridge/crossBridgeApply.vue<Badge type="tip" text="车辆过路过桥费" /> `送货员`
- /tms/delivery/crossBridge/crossBridgeApplyAdd.vue<Badge type="tip" text="车辆过路过桥费-新增" /> `送货员`
- /tms/delivery/crossBridge/crossBridgeReview.vue<Badge type="tip" text="车辆过路过桥费审核" /> `送货管理员`
- /tms/delivery/crossBridge/crossBridgeReviewEdit.vue<Badge type="tip" text="车辆过路过桥费审核-编辑" /> `送货管理员`
- /tms/delivery/routeAdjustApproval/index.vue<Badge type="tip" text="送货/配送线路调整审批" /> `送货管理员`
- /tms/delivery/sortingProgress/sortingProgress.vue<Badge type="tip" text="分拣进度查询" /> `送货员`
- /tms/delivery/sortingProgress/sortingProgressDetail.vue<Badge type="tip" text="订单分拣进度查询" /> `送货员`
- /tms/delivery/ticket/ticketList.vue<Badge type="tip" text="发票信息审核" /> `送货管理员`
- /tms/delivery/ticket/ticketDetail.vue<Badge type="tip" text="发票信息审核-明细" /> `送货管理员`
- /tms/delivery/leaveApplication/index.vue<Badge type="tip" text="送货人员请假申请" /> `送货管`
- /tms/delivery/leaveApplication/review.vue<Badge type="tip" text="请假审批" /> `送货管理员`
- /tms/delivery/leaveApplication/reviewDetail.vue<Badge type="tip" text="请假审批-明细" /> `送货管理员`
- /tms/delivery/transfer/transshipment.vue<Badge type="tip" text="中转发货" /> `送货员`
- /tms/delivery/transfer/transferReceive.vue<Badge type="tip" text="中转收货" /> `送货员`


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
