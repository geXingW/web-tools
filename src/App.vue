<template>
  <div class="tools">
    <header>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" :href="`/`">离线工具</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03"
                aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" :href="`/#/base64`">
                Base64解码
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="`/#/json`">JSON解析</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="`/#/url`">URL解码</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="`/#/excel`">EXCEL/CSV解析</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-md-0">
            <input class="form-control" type="text" placeholder="Search">
          </form>
        </div>
      </nav>
    </header>
    <div class="container tools-container">
      <router-view></router-view>
    </div>

    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <b>联系我</b>：
        <ul>
          <li>邮箱：<a href="mailto:wolfs_9@hotmail.com">wolfs_9@hotmail.com</a></li>
          <li>Github：<a href="https://github.com/geXingW">https://github.com/geXingW</a></li>
          <li>博客：<a href="https://gexingw.github.io">https://gexingw.github.io</a></li>
        </ul>
        <p> Copyright © Zero Wang</p>
      </div>
    </footer>
  </div>
</template>
<script type="javascript">
  import Store from 'js/store'
  import {eRep, xhrReport, errObj} from 'js/helpers'
  import http from 'js/http'
  import {ErrDB} from 'js/db'

  window.addEventListener('offline', function (e) {
    Store.commit('setOnlineStatus', false)
  })
  window.addEventListener('online', function (e) {
    Store.commit('setOnlineStatus', true)
  })

  export default {
    watch: {
      'onLine' (newVal, oldVal) {
        if (newVal) {
          this.sendErrReports()
        }
      }
    },
    computed: {
      onLine () {
        return this.$store.getters.isOnline
      }
    },
    methods: {
      eRep () {
        eRep('Test error report.')
      },
      sendErrReports () {
        let errors = []
        ErrDB.getItem('errors')
          .then(err => err || errors)
        // 汇报错误信息
        http.post('/err-report', errors)
          .then(res => {
            ErrDB.clear()
          })
          .catch(error => {
            if (error.response) {
              let errInfo = {msg: error.response.data, 'code': error.response.status}
              let xhrErr = errObj(errInfo, '/err-report')
              xhrReport(xhrErr)
            }
          })
      }
    }
  }
</script>
<style lang="stylus">
  @import "../node_modules/font-awesome/css/font-awesome.min.css"
  .tools-container
    padding-top: 50px
    min-height: calc(100vh - 226px)
</style>
