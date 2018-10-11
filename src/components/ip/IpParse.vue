<template>
  <!-- box ./begin -->
  <div class="box">
    <div class="box-header text-center">
      <h3>网络和IP地址计算器</h3>
    </div>
    <div class="box-body mt-5">
      <form action="">
        <div class="form-row">
          <!-- IP ./begin -->
          <div class="col-1">
            <input type="text" class="form-control-plaintext text-center" placeholder="IP" readonly value="IP:">
          </div>
          <div class="col-2">
            <input type="number" :class="[ip1IsValid ? 'form-control is-valid':'form-control is-invalid']"
                   placeholder="A:0~255" min="0" max="255" v-model="ip1">
          </div>
          <div class="col-2">
            <input type="number" :class="[ip2IsValid ? 'form-control is-valid':'form-control is-invalid']"
                   placeholder="B:0~255" min="0" max="255" v-model="ip2">
          </div>
          <div class="col-2">
            <input type="number" :class="[ip3IsValid ? 'form-control is-valid':'form-control is-invalid']"
                   placeholder="C:0~255" min="0" max="255" v-model="ip3">
          </div>
          <div class="col-2">
            <input type="number" :class="[ip4IsValid ? 'form-control is-valid':'form-control is-invalid']"
                   placeholder="D:0~255" min="0" max="255" v-model="ip4">
          </div>
          <!-- 掩码 ./begin -->
          <div class="col-2">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">/</div>
              </div>
              <input type="number" :class="[maskIsValid ? 'form-control is-valid':'form-control is-invalid']"
                     placeholder="掩码:0~32" min="0" max="32" v-model="ipMask">
            </div>
          </div>
          <div class="col-1">
            <button type="button" class="btn btn-primary" @click="calc">计算</button>
          </div>
        </div>
      </form>
      <!-- 解析结果 ./begin -->
      <div class="mt-5 col-6 offset-3">
        <table class="table">
          <tbody>
          <tr>
            <th class="text-right width-200">可用地址数：</th>
            <th>{{result.numHosts}}</th>
          </tr>
          <tr>
            <th class="text-right width-200">掩码：</th>
            <th>{{result.subnetMask}}</th>
          </tr>
          <tr>
            <th class="text-right width-200">网络：</th>
            <th>{{result.networkAddress}}</th>
          </tr>
          <tr>
            <th class="text-right width-200">第一个可用IP：</th>
            <th>{{result.firstAddress}}</th>
          </tr>
          <tr>
            <th class="text-right width-200">最后一个可用IP ：</th>
            <th>{{result.lastAddress}}</th>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import IP from 'ip'

  export default {
    name: 'IpParse',
    data () {
      return {
        'ip1': null,
        'ip2': null,
        'ip3': null,
        'ip4': null,
        'ipMask': null,
        'result': {
          'numHosts': 0,
          'subnetMask': null,
          'networkAddress': null,
          'broadcastAddress': null,
          'firstAddress': null,
          'lastAddress': null
        }
      }
    },
    methods: {
      calc () {
        try {
          if (!this.ip1IsValid || !this.ip2IsValid || !this.ip3IsValid || !this.ip4IsValid || !this.maskIsValid) {
            return
          }
          this.result = IP.cidrSubnet(`${this.ip1}.${this.ip2}.${this.ip3}.${this.ip4}/${this.ipMask}`)
        } catch (e) {
          console.log(e)
        }
      }
    },
    computed: {
      ip1IsValid: function () {
        return this.ip1 === null || (this.ip1 >= 0 && this.ip1 <= 255)
      },
      ip2IsValid () {
        return this.ip2 === null || (this.ip2 >= 0 && this.ip2 <= 255)
      },
      ip3IsValid () {
        return this.ip3 === null || (this.ip3 >= 0 && this.ip3 <= 255)
      },
      ip4IsValid () {
        return this.ip4 === null || (this.ip4 >= 0 && this.ip4 <= 255)
      },
      maskIsValid () {
        return this.ipMask === null || (this.ipMask >= 0 && this.ipMask <= 255)
      },
    }
  }
</script>

<style>
  .width-200 {
    width: 160px;
    max-width: 200px;
  }
</style>
