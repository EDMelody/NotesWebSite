<template>
  <div>
    <commonSearch ref="commonSearch" :searchList="columnList" :rules="rules" :buttonGroup="buttonGroup"
      @change="handlerChange" @confirmEvent="confirmEvent" @cancelEvent="cancelEvent">
    </commonSearch>
  </div>
</template>

<script>
  import commonSearch from './commonSearch.vue'

  export default {
    name: "test",
    computed: {
    },
    components: {
      commonSearch
    },
    data () {
      return {
        buttonGroup: {
          hasOkButton: true,
          size: 'mini',
          okText: '查询',
          okIcon: 'el-icon-check',
          hasCancelButton: true,
          cancelText: '重置',
          cancelIcon: 'el-icon-refresh',
        },
        columnList: [
          {
            prop: 'type',
            type: 'select',
            label: '类型',
            colNum: 8,
            labelWidth: '150px',
            filterable: true,
            multiple: false,
            clearable: true,
            options: [
              { label: '类型1', value: 1 },
              { label: '类型2', value: 2 },
            ]
          },
          {
            prop: 'org',
            type: 'inputDialog',
            label: '组织',
            colNum: 8,
            labelWidth: '150px',
            placeholder: '请选择',
            clearable: false,
            disabled: false,
            readonly: true,
            suffixIcon: 'el-icon-menu',
            dialogSearchTree: {
              data: [
              ],
              showCheckBox: false,
              nodeKey: 'id',
              defaultProps: {
                children: 'children',
                label: 'name'
              },
              // 展开的key
              expandedKeys: []
            }
          },
          {
            prop: 'time',
            type: 'datepicker',
            label: '年月',
            colNum: 8,
            labelWidth: '150px',
            datePickerType: 'month',
            valueFormat: 'yyyy-MM',
            placeholder: '请选择月份'
          },
          {
            prop: 'level',
            type: 'select',
            label: '等级',
            colNum: 8,
            labelWidth: '150px',
            filterable: true,
            multiple: false,
            clearable: true,
            options: [
              { label: '测试1', value: 1 },
              { label: '测试2', value: 2 },
            ]
          },
        ],
        rules: {
          org: [
            { required: true, trigger: ['input', 'change'], message: '请选择组织' }
          ],
          time: [
            { required: true, trigger: 'blur', message: '请选择年月' }
          ],
          level: [
            { required: true, trigger: 'change', message: '请选择等级' }
          ],
          type: [
            { required: true, trigger: 'change', message: '请选择类型' }
          ],
        },
      }
    },
    watch: {
    },
    created () {
    },
    methods: {
      // 下拉框修改
      handlerChange(val, prop) {
        // console.log(val, prop)
      },
      // 确认-查询
      confirmEvent(obj) {
      },
      // 取消-重置
      cancelEvent() {
      }
    }
  }
</script>