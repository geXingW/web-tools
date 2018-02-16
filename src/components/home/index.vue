<template>
  <main role="main" class="home">

    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">WEB离线应用工具集</h1>
        <p class="lead text-muted">
          WEB离线应用工具集，有网、没网都能用！
        </p>
        <p>
          <a class="btn btn-success my-2">
            赞
            <i class="fa fa-thumbs-o-up"></i>
          </a>
        </p>
      </div>
    </section>

    <div class="album py-5 bg-light" style="top: 0px">
      <div class="container">

        <div class="row">
          <div class="col-12 alert alert-success" role="alert">
            现在都有啥
          </div>
          <div class="col-md-4" v-for="(tool, index) in toolList" :key="index">
            <div class="card mb-4 box-shadow">
              <h4 class="m-0 mt-3 text-center">
                <a :href="tool.url">{{ tool.title }}</a>
              </h4>
              <div class="card-body">
                <p class="card-text">
                  {{ tool.description }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a :href="tool.url" class="btn btn-sm btn-outline-secondary">
                      试一试
                      <i class="fa fa-hand-o-right"></i>
                    </a>
                  </div>
                  <small class="text-muted">{{ tool.date }}</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="album py-5 bg-light" style="top: 0px">
      <div class="container">
        <div class="row">
          <div class="col-12 alert alert-primary" role="alert">
            未来会有啥
          </div>
          <div class="col-md-4" v-for="(tool, index) in todoList" :key="index">
            <div class="card mb-4 box-shadow">
              <h4 class="m-0 mt-3 text-center">{{ tool.title }}</h4>
              <div class="card-body">
                <p class="card-text">
                  {{ tool.description }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary disabled">试一试</button>
                  </div>
                  <small class="text-muted">{{ tool.date }}</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>
<script type="javascript">
  export default {
    data () {
      return {
        toolList: [
          {
            title: 'Base64 编/解码',
            description: 'Base64 编码 + 解码',
            url: '/#/base64',
            date: '2018-01-25'
          },
          {
            title: 'URL 编/解码',
            description: 'Url 编码 + 解码',
            url: '/#/base64',
            date: '2018-01-25'
          },
          {
            title: 'JSON 解析/格式化',
            description: 'JSON 解析 + 格式化',
            url: '/#/base64',
            date: '2018-01-25',
          },
          {
            url: '/#/excel',
            title: 'Excel/CSV 解析',
            description: 'Excel 解析',
            date: '2018-02-01'
          },
        ],
        todoList: [
          {
            title: '图片处理',
            description: '图片处理',
            date: ''
          },
        ]
      }
    }
  }
</script>
<style lang="stylus">
  .home
    .album
      padding-top: 0px !important;
      margin-bottom: 5rem !important;

</style>
