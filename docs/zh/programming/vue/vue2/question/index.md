<!--
 * @Author: 
 * @Date: 2025-02-18 15:50:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-21 11:17:31
 * @FilePath: \vuepress-vite\docs\zh\programming\vue\vue2\question\index.md
 * @Description: 
 * 
-->
[ElmentUI官方文档](https://element.eleme.cn/#/zh-CN)

# El-Table
1.列名动态切换，导致设置fixed列渲染问题
2.虚拟列表

## 1. el-table列名动态切换，导致设置fixed列渲染问题

在 Vue 中，当使用动态添加 `<el-table-column>` 时，使用 Vue 的 nextTick 方法来确保 DOM 更新完成后再进行操作。例如，可以在添加列后使用 nextTick 来重新计算列宽，代码如下：
```
  this.$nextTick(() => {
    this.$refs.table.doLayout();
  });
```

## 2. el-table无分页情况下，DOM过多页面卡顿问题

template
```vue
<div style="margin-bottom: 10px;">
  <el-input v-model="filterName" placeholder="搜索姓名" clearable style="width: 200px; margin-right: 10px;" />
  <el-input v-model="filterAge" placeholder="搜索年龄" clearable style="width: 200px; margin-right: 10px;" />

</div>

<el-table
  ref="infiniteTable"
  :data="filterTableData"
  height="500"
  style="width: 100%;"
>
  <el-table-column prop="name" label="姓名" />
  <el-table-column prop="age" label="年龄" />
  <el-table-column prop="email" label="邮箱" />
</el-table>
```
script
```js
export default {
  data() {
    return {
      tableData: [],         // 原始数据
      filteredData: [],      // 筛选后数据
      filterTableData: [],   // 当前展示的数据（分页）
      filterKeyword: '',     // 搜索关键字
      batchSize: 50,
      loading: false,
      noMore: false,
    };
  },
  methods: {

    applyFilter() {
      const keyword = this.filterName.trim()
      const keyword1 = this.filterAge.trim()

      this.filteredData = this.tableData.filter(item => {
        const matchName = !keyword || item.name.includes(keyword);
        const matchAge = !keyword1 || item.age.includes(keyword1);
        return matchName && matchAge;
      });

      // 重置展示数据
      this.filterTableData = [];
      this.noMore = false;
      this.loadMore();
      this.bindScroll();
    },

    loadMore() {
      if (this.loading || this.noMore) return;
      this.loading = true;

      setTimeout(() => {
        const start = this.filterTableData.length;
        const next = this.filteredData.slice(start, start + this.batchSize);
        this.filterTableData = this.filterTableData.concat(next);
        this.loading = false;

        if (this.filterTableData.length >= this.filteredData.length) {
          this.noMore = true;
        }
      }, 200);
    },

    bindScroll() {
      this.$nextTick(() => {
        const wrapper = this.$refs.infiniteTable.$el.querySelector('.el-table__body-wrapper');
        if (wrapper) {
          wrapper.removeEventListener('scroll', this.handleScroll);
          wrapper.addEventListener('scroll', this.handleScroll);
        }
      });
    },

    handleScroll(e) {
      const wrapper = e.target;
      if (wrapper.scrollHeight - wrapper.scrollTop - wrapper.clientHeight <= 20) {
        this.loadMore();
      }
    },
  },

  watch: {
    filterName() {
      this.applyFilter()
    },
    filterAge() {
      this.applyFilter()
    }
  },

  mounted() {
    // 初始化数据-模拟接口请求
    this.tableData = Array.from({ length: 1000 }, (_, i) => ({
      name: `用户 ${i + 1}`,
      age: 20 + (i % 30),
      email: `user${i + 1}@example.com`
    }))

    this.filteredData = this.tableData // 默认全量展示
    this.loadMore()
    this.bindScroll()
  }
}
```