<template>
  <div class="tools-json">
    <div class="form-group">
      <label for="encode-str">待解析数据</label>
      <textarea class="form-control" id="encode-str" rows="6" v-model="sourceStr"></textarea>
    </div>
    <div class="form-group text-center">
      <button type="submit" class="btn btn-outline-primary" @click="decode">
        <i class="fa fa-long-arrow-down"></i>
        解析
        <i class="fa fa-long-arrow-down"></i>
      </button>
    </div>
    <div class="form-group">
      <label>解析后数据</label>
      <pre class="alert-info border border-warning rounded">{{ formatStr }}</pre>
    </div>
  </div>
</template>
<script type="javascript">
  export default {
    data () {
      return {
        sourceStr: '',
        decodeStr: '',
        formatStr: '',
      }
    },
    computed: {
      _decodeStr () {
        return this.sourceStr
      }
    },
    methods: {
      decode () {
        this.formatStr = JSON.parse(this.sourceStr)
      },
    }
  }
</script>
