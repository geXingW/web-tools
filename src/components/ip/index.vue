<template>
  <div class="row">
    <el-container style="height: 800px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="1">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">网络和IP地址计算器</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <!-- IP Parse -->
          <ip-parse></ip-parse>
          <hr>
          <mask-length></mask-length>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import IpParse from './IpParse'
  import MaskLength from './MaskLength'

  export default {
    data () {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      return {
        tableData: Array(2).fill(item)
      }
    },
    components: {
      IpParse,
      MaskLength
    },
    methods: {
      // show
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
