<template>
  <div class="tools-json">
    <div class="form-group">
      <label for="encode-str">待解析数据</label>
      <textarea class="form-control" id="encode-str" rows="6" v-model="source"></textarea>
    </div>
    <div class="form-group text-center">
      <button type="submit" class="btn btn-outline-primary" @click="decode">
        <i class="fa fa-long-arrow-down"></i>
        解析
        <i class="fa fa-long-arrow-down"></i>
      </button>

      <button type="submit" class="btn btn-outline-info clip"
              :data-clipboard-text="source">
        <i class="fa fa-clipboard"></i>
        复制结果
      </button>
    </div>
    <div class="form-group">
      <label>解析后数据</label>
      <pre class="alert-info border border-warning rounded">{{ result }}</pre>
    </div>
  </div>
</template>
<script type="javascript">
  import Clipboard from 'clipboard'

  export default {
    data () {
      return {
        source: '',
        result: '',
        clip: null,
      }
    },
    mounted () {
      this.clip = new Clipboard('.clip')
    },
    methods: {
      decode () {
        this.result = JSON.parse(this.source)
      },
    }
  }
</script>
