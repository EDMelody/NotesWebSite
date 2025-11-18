<!--
 * @Author: 
 * @Date: 2025-02-18 15:50:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-11-18 11:16:20
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

## 3. 项目过大引起的内存泄漏之SCSS问题

项目启动报错提示

```error
<--- Last few GCs --->

[8704:000001C85EC30770]   443473 ms: Mark-sweep 4072.3 (4128.0) -> 4069.3 (4133.8) MB, 1553.5 / 0.1 ms  (average mu = 0.712, current mu = 0.318) allocation failure scavenge might not succeed
[8704:000001C85EC30770]   445568 ms: Mark-sweep (reduce) 4085.3 (4133.8) -> 4077.8 (4141.0) MB, 1734.4 / 0.0 ms  (+ 0.3 ms in 250 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 2094 ms) (average mu = 0.536, current mu =

<--- JS stacktrace --->

FATAL ERROR: MarkCompactCollector: young object promotion failed Allocation failed - JavaScript heap out of memory
 1: 00007FF78726428F napi_wrap+133311
 2: 00007FF7871FDE66 SSL_get_quiet_shutdown+63062
 3: 00007FF7871FECFD node::OnFatalError+301
 4: 00007FF787AE1B2E v8::Isolate::ReportExternalAllocationLimitReached+94
 5: 00007FF787AC691D v8::SharedArrayBuffer::Externalize+781
 6: 00007FF78797012C v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1516
 7: 00007FF78795ABAB v8::internal::NativeContextInferrer::Infer+59739
 8: 00007FF78793FE7F v8::internal::MarkingWorklists::SwitchToContextSlow+56975
 9: 00007FF787953B6B v8::internal::NativeContextInferrer::Infer+31003
10: 00007FF78794AC4D v8::internal::MarkCompactCollector::EnsureSweepingCompleted+6285
11: 00007FF787952DBE v8::internal::NativeContextInferrer::Infer+27502
12: 00007FF787956E0B v8::internal::NativeContextInferrer::Infer+43963
13: 00007FF787960802 v8::internal::ItemParallelJob::Task::RunInternal+18
14: 00007FF787960791 v8::internal::ItemParallelJob::Run+641
15: 00007FF787933DF3 v8::internal::MarkingWorklists::SwitchToContextSlow+7683
16: 00007FF78794B0FC v8::internal::MarkCompactCollector::EnsureSweepingCompleted+7484
17: 00007FF787949934 v8::internal::MarkCompactCollector::EnsureSweepingCompleted+1396
18: 00007FF7879474A8 v8::internal::MarkingWorklists::SwitchToContextSlow+87224
19: 00007FF787975F11 v8::internal::Heap::LeftTrimFixedArray+929
20: 00007FF787978005 v8::internal::Heap::PageFlagsAreConsistent+789
21: 00007FF78796D221 v8::internal::Heap::CollectGarbage+2049
22: 00007FF78796B425 v8::internal::Heap::AllocateExternalBackingStore+1349
23: 00007FF7879852B5 v8::internal::GCIdleTimeHandler::ShouldDoContextDisposalMarkCompact+1029
24: 00007FF787985705 v8::internal::Factory::AllocateRaw+37
25: 00007FF78799ADFE v8::internal::FactoryBase<v8::internal::Factory>::NewStruct+94
26: 00007FF787993BF5 v8::internal::Factory::NewStackTraceFrame+53
27: 00007FF7879BD242 v8::internal::Isolate::CaptureSimpleStackTrace+2354
28: 00007FF7879BCAD1 v8::internal::Isolate::CaptureSimpleStackTrace+449
29: 00007FF7879BC21D v8::internal::Isolate::CaptureAndSetSimpleStackTrace+45
30: 00007FF7879B2A00 v8::internal::MessageLocation::MessageLocation+3664
31: 00007FF7879B651C v8::internal::MessageFormatter::Format+13100
32: 00007FF78798AF16 v8::internal::Factory::NewError+134
33: 00007FF787994C52 v8::internal::Factory::NewTypeError+162
34: 00007FF7879B66C1 v8::internal::MessageHandler::MakeMessageObject+337
35: 00007FF7876BC0DC v8::internal::interpreter::JumpTableTargetOffsets::iterator::operator=+9596
36: 00007FF787B6CF5D v8::internal::SetupIsolateDelegate::SetupHeap+474253
37: 00007FF787AFD329 v8::internal::SetupIsolateDelegate::SetupHeap+16473
38: 00007FF787B03122 v8::internal::SetupIsolateDelegate::SetupHeap+40530
39: 0000014416B3E990
npm ERR! code ELIFECYCLE
npm ERR! errno 134
npm ERR! hbls_pc@2.0.0 serve: `vue-cli-service serve`
npm ERR! Exit status 134
npm ERR!
npm ERR! Failed at the hbls_pc@2.0.0 serve script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\neusoft\AppData\Roaming\npm-cache\_logs\2025-11-18T03_07_06_275Z-debug.log

```

解决方法
1. 去除/deep/ 使用:deep代替
2. 扁平化scss文件中的css减少计算，减少嵌套层数