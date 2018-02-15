<template>
  <div class="tools-url-decode">
    <div class="form-group">
      <label for="encode-str">解密数据</label>
      <textarea class="form-control" id="encode-str" rows="6" v-model="decode_str"
                placeholder="在此输入需要解密的数据">
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
        <i class="fa fa-long-arrow-up"></i>
        <i class="fa fa-long-arrow-up"></i>
      </button>
    </div>
    <div class="form-group">
      <label for="decode-str">加密数据</label>
      <textarea class="form-control" id="decode-str" rows="6" v-model="encode_str"
                placeholder="在此输入需要加密的数据"></textarea>
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
  export default {
    data () {
      return {
        decode_str: '',
        encode_str: '',
      }
    },
    methods: {
      encode () {
        this.encode_str = encodeURI(this.decode_str)
      },
      decode () {
        this.decode_str = decodeURI(this.encode_str)
      },
    }
  }
</script>
