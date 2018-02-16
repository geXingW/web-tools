<template>
  <div class="tools-url-decode">
    <div class="form-group">
      <label for="encode-str">解密数据</label>
      <textarea class="form-control" id="encode-str" rows="6" v-model="source"
                placeholder="请输入要加/解密的数据">
            </textarea>
    </div>
    <div class="form-group text-center">
      <button type="submit" class="btn btn-outline-primary" @click="encode">
        <i class="fa fa-long-arrow-down"></i>
        <i class="fa fa-long-arrow-down"></i>
        加密
      </button>
      <button type="submit" class="btn btn-outline-secondary" @click="decode">
        解密
        <i class="fa fa-long-arrow-down"></i>
        <i class="fa fa-long-arrow-down"></i>
      </button>

      <button type="submit" class="btn btn-outline-info clip"
              :data-clipboard-text="result">
        <i class="fa fa-clipboard"></i>
        复制结果
      </button>
    </div>
    <div class="form-group">
      <label for="decode-str">加密数据</label>
      <textarea class="form-control" id="decode-str" rows="6" v-model="result"
                placeholder="这里是加/解密后的结果"></textarea>
    </div>
  </div>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  import Clipboard from 'clipboard'

  export default {
    data () {
      return {
        source: '',
        result: '',
        clip: null
      }
    },
    mounted () {
      this.clip = new Clipboard('.clip')
    },
    methods: {
      encode () {
        this.result = encodeURIComponent(this.source)
      },
      decode () {
        this.result = decodeURIComponent(this.source)
      },
      copy () {
      }
    }
  }
</script>
