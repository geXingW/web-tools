<template>
  <div class="row">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="1">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">网络和IP地址计算器</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">IP地址和网络转换器</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">子网掩码转换器</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    data () {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      return {
        tableData: Array(20).fill(item)
      }
    }
  }
</script>

<style lang="stylus">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
