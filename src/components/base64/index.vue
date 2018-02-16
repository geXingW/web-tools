<template>
  <div class="tools-base64">
    <div class="form-group">
      <label for="encode-str">解密数据</label>
      <textarea class="form-control border border-primary" id="encode-str" rows="6" v-model="source"
                placeholder="请输入要加/解密的数据">
      </textarea>
    </div>
    <div class="form-group text-center">
      <button type="submit" class="btn btn-outline-primary" @click="decode">
        <i class="fa fa-long-arrow-down"></i>
        <i class="fa fa-long-arrow-down"></i>
        解密
      </button>
      <button type="submit" class="btn btn-outline-success" @click="encode">
        加密
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
      <textarea class="form-control border border-primary" id="decode-str" rows="6" v-model="result"
                placeholder="这里是加/解密后的结果">
            </textarea>
    </div>
  </div>
</template>
<script type="javascript">
  import {Base64} from 'js-base64'
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
      decode () {
        this.result = Base64.decode(this.source)
      },
      encode () {
        this.result = Base64.encode(this.source)
      }
    }
  }
</script>
