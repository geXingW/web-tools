<template>
  <div class="tools-base64">
    <div class="form-group">
      <label for="encode-str">解密数据</label>
      <textarea class="form-control border border-primary" id="encode-str" rows="6" v-model="encodeStr">
            </textarea>
    </div>
    <div class="form-group text-center">
      <button type="submit" class="btn btn-outline-primary" @click="decode">
        <i class="fa fa-long-arrow-up"></i><i class="fa fa-long-arrow-up"></i>
        解密
      </button>
      <button type="submit" class="btn btn-outline-secondary" @click="encode">
        加密
        <i class="fa fa-long-arrow-down"></i><i class="fa fa-long-arrow-down"></i>
      </button>
    </div>
    <div class="form-group">
      <label for="decode-str">加密数据</label>
      <textarea class="form-control border border-primary" id="decode-str" rows="6" v-model="decodeStr">
            </textarea>
    </div>
  </div>
</template>
<script type="javascript">
  import {Base64} from 'js-base64'

  export default {
    data () {
      return {
        decodeStr: '',
        encodeStr: ''
      }
    },
    methods: {
      decode () {
        this.decodeStr = Base64.decode(this.encodeStr)
      },
      encode () {
        this.encodeStr = Base64.encode(this.decodeStr)
      }
    }
  }
</script>
