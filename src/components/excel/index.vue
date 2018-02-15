<template>
  <div class="tools-excel">
    <div class="form-group">
      <label for="select-file">选取文件</label>
      <input class="form-control" type="file" id="select-file" @change="fileChange">
    </div>

    <div class="form-group text-center">
      <button type="submit" class="btn btn-outline-primary" @click="decodeJSON">
        <i class="fa fa-long-arrow-down"></i>
        解析为JSON
        <i class="fa fa-long-arrow-down"></i>
      </button>
      <button type="submit" class="btn btn-outline-primary" @click="decodeHTML">
        <i class="fa fa-long-arrow-down"></i>
        解析为HTML
        <i class="fa fa-long-arrow-down"></i>
      </button>
    </div>

    <div class="form-group">
      <label>解析后数据</label>
      <div class="box alert-info border border-warning">

        <!-- HTML 输出 -->
        <div class="html-content" v-if="type==='HTML'">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" v-for="(sheetName, index) in sheetNames" :key="index">
              <a class="nav-link" :class="{'active': htmlActiveTab === index}" id="home-tab"
                 data-toggle="tab" :href="`${sheetName}-${index}`" role="tab" aria-controls="home"
                 aria-selected="true" @click="htmlActiveTab=index">
                {{ `${sheetName}`}}
              </a>
            </li>
          </ul>
          <div class="tab-content p-3 alert-light" id="myTabContent">

            <div class="tab-pane fade" :class="{'show active': htmlActiveTab === index}"
                 role="tabpanel" aria-labelledby="home-tab"
                 v-for="(sheetName, index) in sheetNames"
                 :key="index"
                 :id="`${sheetName}-${index}`">

              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                  <tr>
                    <th v-for="c in cols[index]" :key="c.key">{{c.name}}</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(r, key) in contents[index]" :key="key">
                    <td v-for="c in cols[index]" :key="c.key"> {{ r[c.key] }}</td>
                  </tr>
                  </tbody>
                </table>
              </div><!--  /.table-responsive -->
            </div>

          </div>
        </div>

        <!-- JSON 输出 -->
        <pre class="rounded" v-if="type === 'JSON'">{{ jsonData }}</pre>

        <!-- 没结果 -->
        <div class="p-2" v-if="type === null">空</div>

      </div>
    </div>

  </div>

</template>
<script type="javascript">
  import XLSX from 'xlsx'
  import {eRep} from 'js/helpers'

  const makeCols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1)
    .fill(0)
    .map((x, i) => ({
      name: XLSX.utils.encode_col(i),
      key: i
    }))

  const _SheetJSFT = [
    'xlsx', 'xlsb', 'xlsm', 'xls', 'xml', 'csv', 'txt', 'ods', 'fods', 'uos', 'sylk', 'dif', 'dbf', 'prn', 'qpw', '123', 'wb*', 'wq*', 'html', 'htm'
  ].map(function (x) {
    return '.' + x
  }).join(',')

  export default {
    data () {
      return {
        jsonData: ['SheetJS'.split(''), '1234567'.split('')],
        cols: [],
        SheetJSFT: _SheetJSFT,
        type: null,
        sheetNames: [],
        htmlActiveTab: 0,
        contents: [],
        jsonCols: [],
      }
    },
    methods: {
      decodeJSON () {
        this.type = 'JSON'
      },
      decodeHTML () {
        this.type = 'HTML'
      },
      fileChange (evt) {
        const files = evt.target.files
        if (files && files[0]) this._file(files[0])
      },
      _file (file) {
        try {
          /* Boilerplate to set up FileReader */
          const reader = new FileReader()
          reader.onload = (e) => {
            /* Parse data */
            let bstr = e.target.result
            let wb = XLSX.read(bstr, {type: 'binary'})
            /* Get first worksheet */
            this.sheetNames = wb.SheetNames

            for (let i = 0; i < this.sheetNames.length; i++) {
              let wsname = wb.SheetNames[i]
              let ws = wb.Sheets[wsname]
              let content = XLSX.utils.sheet_to_json(ws, {header: 1, origin: 'A1'})
              this.contents[i] = content
              this.cols[i] = makeCols(ws['!ref'])
            }

            let wsname = wb.SheetNames[0]
            let ws = wb.Sheets[wsname]
            /* Convert array of arrays */
            let data = XLSX.utils.sheet_to_json(ws, {header: 1, origin: 'A1'})
            /* Update state */
            this.jsonData = data
            this.jsonCols = makeCols(ws['!ref'])
          }
          reader.readAsBinaryString(file)
        } catch (err) {
          eRep(err)
        }
      }
    }
  }
</script>
<style lang="stylus">

</style>
