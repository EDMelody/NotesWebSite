
# Property 'offsetHeight' does not exist on type 'Element'

## 错误示例
```ts
// 此段代码offsetHeight错误提示:
// Property 'offsetHeight' does not exist on type 'Element'
document.getElementsByClassName('classname').offsetHeight
```

## 错误解释

尝试访问一个Element类型的实例的offsetHeight属性，Element类型本身并没有这个属性。offsetHeight是一个DOM元素的属性，通常只在特定的DOM元素（比如HTML元素）上存在。

## 解决方案

### 1.类型断言

- 如果不确定具体元素的具体类型，可以使用HTMLElement类型
```ts
(document.getElementById('myElement') as HTMLElement).offsetHeight
```

### 2.选取正确元素

```ts
(document.getElementById('myElement') as HTMLDivElement).offsetHeight
```