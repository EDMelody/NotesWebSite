<!--
 * @Author: melody lv
 * @Date:
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-01-10 15:09:59
 * @FilePath: \vuepress-vite\docs\zh\programming\vue\code\vue2\elemSearch\elemSearch.vue
 * @Description: 搜索公共组件
 * 
-->
<template>
  <div class="common-search">
    <el-card shadow="never">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="searchCollapse">
          <template slot="title">
            <div class="title-flex">查询条件</div>
          </template>
          <el-form :model="formData" label-width="120" ref="ruleForm" size="small">
            <el-row>
              <el-col v-for="searchItem in searchList" :key="searchItem.prop"
                :span="searchItem.colNum ? 8 : searchItem.colNum">
                <el-form-item :label="searchItem.label" :prop="searchItem.prop" :rules="rules[searchItem.prop]"
                  :label-width="searchItem.labelWidth === null ? labelWidth : searchItem.labelWidth">
                  <template v-if="searchItem.type === 'input' || searchItem.type === 'inputDialog'">
                    <el-input v-model.trim="formData[searchItem.prop]" :ref="searchItem.prop" style="width: 100%;"
                      :readonly="searchItem.readonly" :type="searchItem.inputType" :clearable="searchItem.clearable"
                      :placeholder="searchItem.placeholder" :suffix-icon="searchItem.suffixIcon"
                      :prefix-icon="searchItem.prefixIcon" :disabled="searchItem.disabled"
                      @click.native="showDialogEvent(searchItem.type, searchItem.prop)"></el-input>
                  </template>
                  <template v-else-if="searchItem.type === 'select'">
                    <el-select class="search-select" v-model="formData[searchItem.prop]" :multiple="searchItem.multiple"
                      :placeholder="searchItem.placeholder" :clearable="searchItem.clearable"
                      :disabled="searchItem.disabled" :filterable="searchItem.filterable" style="width:100%"
                      @change="handlerChange($event, searchItem.prop)">
                      <el-option v-if="searchItem.selectInit ? searchItem.selectInit : false"
                        :value="searchItem.initSelectValue">{{ searchItem.selectInitLable }}</el-option>
                      <el-option v-for="option in searchItem.options" :key="option.value" :value="option.value"
                        :label="option.label"></el-option>
                    </el-select>
                  </template>
                  <template v-else-if="searchItem.type === 'datepicker'">
                    <el-date-picker style="width: 100%;" v-model="formData[searchItem.prop]"
                      :type="searchItem.datePickerType" :placeholder="searchItem.placeholder"
                      :range-separator="searchItem.rangeSeparator" :picker-options="searchItem.pickerOptions"
                      :value-format="searchItem.valueFormat"></el-date-picker>
                  </template>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="btngroup-col">
                <el-button-group>
                  <el-button v-if="buttonGroup.hasOkButton" :icon="buttonGroup.okIcon" type="primary"
                    :size="buttonGroup.size" @click="buttonEvent('confirm')">{{ buttonGroup.okText }}</el-button>
                  <el-button v-if="buttonGroup.hasCancelButton" :icon="buttonGroup.cancelIcon" :size="buttonGroup.size"
                    @click="buttonEvent('cancel')" style="margin-left:10px">{{ buttonGroup.cancelText }}</el-button>
                </el-button-group>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-dialog class="search-dialog" :title="'选择' + selectProp.label" :visible.sync="dialogVisible" width="30%">
      <div class="dialog-common-search">
        <div class="head-search">
          <el-input v-model="searchTreeName" placeholder="请输入关键字进行过滤" clearable size="small"
            prefix-icon="el-icon-search" style="margin-bottom: 20px" @input="handleSearchTreeName"></el-input>
        </div>
        <div class="head-container">
          <div class="head-container-cont">
            <el-tree :data="dialogSearchTree.data" ref="searchTree" :default-expand-all="false"
              :show-checkbox="dialogSearchTree.showCheckBox" :node-key="dialogSearchTree.nodeKey"
              :filter-node-method="filterNodeMethod" @node-click="handleNodeClick" @check="searchTreeCheckedChange"
              :lazy="false" :load="loadNode" :default-expanded-keys="dialogSearchTree.expandedKeys">
            </el-tree>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" size="mini" @click="dialogConfirmEvent">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: "test",
    computed: {
    },
    props: {
      searchList: {
        type: Array
      },
      rules: {
        type: Object
      },
      labelWidth: {
        type: String,
        default: '120px'
      },
      buttonGroup: {
        type: Object,
        default() {
          return {
            hasOkButton: true,
            size: 'mini',
            okText: '确认',
            okIcon: 'el-icon-check',
            hasCancelButton: true,
            cancelText: '取消',
            cancelIcon: 'el-icon-refresh',
          }
        }
      },
    },
    data() {
      return {
        formData: {},
        activeNames: ['searchCollapse'],
        // 弹出框相关数据
        selectProp: {}, // 当前选中prop对象，用于赋值
        dialogVisible: false,
        searchTreeName: '',
        expandedKeys: [],
        dialogSearchTree: {},
        currentNodeData: {},
      }
    },
    watch: {
    },
    created() {
      this.initFormData()
    },
    methods: {
      initFormData() {
        let formData = {}
        this.formData = {}
        this.searchList.forEach(searchItem => {
          if (searchItem.defaultValue) {
            formData[searchItem.prop] = searchItem.defaultValue
          }
        })
        this.formData = formData
      },
      handlerChange(e, prop) {
        this.$emit('change', e, prop);
      },
      // 弹框点击按钮事件
      buttonEvent(val) {
        if (val === 'confirm') {
          this.$refs['ruleForm'].validate((valid) => {
            console.log(valid)
            if (valid) {
              this.$emit('confirmEvent', JSON.parse(JSON.stringify(this.formData)))
            } else {
              return false;
            }
          })
        } else if (val === 'cancel') {
          this.$refs['ruleForm'].resetFields();
          this.$emit('cancelEvent')
        }
      },
      // tree修改值默认为label
      setTreeLabel(data, label) {
        data.forEach(item => {
          item.label = item[label]
          if (item.children && item.children.length > 0) {
            this.setTreeLabel(item.children, label)
          }
        })
        return data
      },
      showDialogEvent(type, prop) {
        if (type === 'inputDialog') {
          const currentClickProp = this.searchList.find(item => item.type === 'inputDialog' && item.prop === prop);
          this.dialogSearchTree = currentClickProp.dialogSearchTree
          let arrTemp = this.setTreeLabel(this.dialogSearchTree.data, currentClickProp.dialogSearchTree.defaultProps.label)
          this.dialogSearchTree.data = arrTemp

          this.selectProp = currentClickProp
          this.$forceUpdate()
          this.dialogVisible = true
        }
      },
      handleSearchTreeName(value) {
        this.$refs.searchTree.filter(value)
      },
      filterNodeMethod(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      searchTreeCheckedChange(node, selectNodes) {
        this.$emit('searchTreeChange', selectNodes)
      },
      // tree - 单击事件
      handleNodeClick(data) {
        console.log(data)
        this.currentNodeData = data
      },

      getCheckedNodes() {
        console.log(this.$refs.searchTree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.searchTree.getCheckedKeys());
      },

      // tree - 弹出框确认按钮
      dialogConfirmEvent() {
        this.dialogVisible = false
        if (!this.selectProp.dialogSearchTree.showCheckBox) {
          this.$set(this.formData, this.selectProp.prop, this.currentNodeData[this.selectProp.dialogSearchTree.defaultProps.label])
          this.$set(this.formData, this.selectProp.prop + 'Obj', (this.currentNodeData))
        } else { // tree checkbox = true
          const checkNodes = this.$refs.searchTree.getCheckedNodes()
          const checkNodesStr = checkNodes.map(item => item.label).join(',')
          this.$set(this.formData, this.selectProp.prop, checkNodesStr)
          this.$set(this.formData, this.selectProp.prop + 'List', checkNodes)
        }
        this.$refs['ruleForm'].validateField(this.selectProp.prop)
      },

      // tree - 根据弹出框选中得label获取code
      getTreeSelectedCodeByLabel(data, val) {
        for (const item of data) {
          if (item[this.selectProp.dialogSearchTree.defaultProps.label] === val) {
            return item.id;
          }
          if (item.children && item.children.length > 0) {
            const childResult = this.getTreeSelectedCodeByLabel(item.children, val);
            if (childResult !== undefined) {
              return childResult;
            }
          }
        }
        return undefined;
      }
    },
  }
</script>

<style scoped lang="scss">
  .title-flex {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 15px 0 10px;
  }

  .search-select>>>.el-select__tags {
    flex-wrap: nowrap !important;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .btngroup-col {
    display: flex;
    justify-content: flex-end
  }

  .common-search>>>.el-dialog {
    height: unset;
  }

  .search-dialog>>>.el-dialog__header {
    display: block;
    background: #e9f3ff;
    padding: 15px;
  }

  .search-dialog>>>.el-dialog__body {
    height: unset;
  }

  .dialog-common-search {
    padding: 15px;
  }

  .dialog-common-search .head-search {
    height: 32px;
  }

  .head-container {
    height: 400px;
    overflow: auto;
    padding: 10px;
  }
</style>