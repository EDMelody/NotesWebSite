<!--
 * @Author: 
 * @Date: 2025-09-09 17:05:42
 * @LastEditors: 
 * @LastEditTime: 2025-09-26 16:40:17
 * @FilePath: \vuepress-vite\docs\zh\programming\jsUtils\jsUtils.md
 * @Description: 
 * 
-->

```js
let arr = [
  {children: null, id: '1001', parentId: '-1'},
  {children: null, id: '100101', parentId: '1001'},
  {children: null, id: '100102', parentId: '1001'},
  {children: null, id: '10010201', parentId: '100102'},
]
let arrTarget = [
  {
    children: [
      { children: [], id: '100101', parentId: '1001'},
      { children: [
        {children: [], id: '10010201', parentId: '100102'},
      ], id: '100102', parentId: '1001'},
    ],
    id: '1001', parentId: '-1'
  }
]
// arr转arrTarget
```

```js
// 递归处理数组转树
recursionData(list) {
  const buildTree = (items, parentId = '-1') => {
    return items
      .filter(item => item.parentId === parentId)
      .map(item => ({
      ...item,
      children: buildTree(items, item.id)
      }))
  }
  return buildTree(list)
}

// 递归处理树转数组
function flattenTree(arr, result = []) {
  if (!Array.isArray(arr)) return result
  arr.forEach(item => {
    const { children, ...rest } = item
    result.push(rest)
    if (Array.isArray(children) && children.length > 0) {
      flattenTree(children, result)
    }
  })
  return result
}
```