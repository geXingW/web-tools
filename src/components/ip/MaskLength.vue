<template>
  <div class="box">
    <div class="box-header text-center">
      <h3>IP掩码/掩码位计算</h3>
    </div>
    <div class="box-body mt-5">
      <form action="">

        <div class="form-row mt-4">
          <!-- IP ./begin -->
          <div class="col-2 offset-1">
            <input type="text" class="form-control-plaintext text-center" placeholder="IP" readonly value="掩码:">
          </div>
          <div class="col-2">
            <input type="number" :class="[mask1IsValid ? 'form-control is-valid':'form-control is-invalid']"
                   placeholder="A:0~255" min="0" max="255" v-model="mask1">
          </div>
          <div class="col-2">
            <input type="number" :class="[mask2IsValid ? 'form-control is-valid':'form-control is-invalid']"
                   placeholder="B:0~255" min="0" max="255" v-model="mask2">
          </div>
          <div class="col-2">
            <input type="number" :class="[mask3IsValid ? 'form-control is-valid':'form-control is-invalid']"
                   placeholder="C:0~255" min="0" max="255" v-model="mask3">
          </div>
          <div class="col-2">
            <input type="number" :class="[mask4IsValid ? 'form-control is-valid':'form-control is-invalid']"
                   placeholder="D:0~255" min="0" max="255" v-model="mask4">
          </div>
        </div>

        <div class="form-row mt-4">
          <div class="col-1 offset-4">
            <button type="button" class="btn btn-primary" @click="calcMaskLength">
              <i class="fa fa-long-arrow-down"></i>
              <i class="fa fa-long-arrow-down"></i>
              计算掩码位
            </button>
          </div>
          <div class="col-1 offset-2">
            <button type="button" class="btn btn-primary" @click="calcMask">
              计算掩码
              <i class="fa fa-long-arrow-up"></i>
              <i class="fa fa-long-arrow-up"></i>
            </button>
          </div>
        </div>

        <div class="form-row mt-4">
          <!-- IP ./begin -->
          <div class="col-2 offset-4">
            <input type="text" class="form-control-plaintext text-center" placeholder="IP" readonly value="掩码位:">
          </div>
          <!-- 掩码 ./begin -->
          <div class="col-2">
            <input type="number" :class="[maskLengthIsValid ? 'form-control is-valid':'form-control is-invalid']"
                   placeholder="掩码:0~32" min="0" max="32" v-model="maskLength">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import IP from 'ip'
  import {getMaskLength} from '../../js/helpers'

  export default {
    name: 'MaskLength',
    data () {
      return {
        'mask': null,
        'maskLength': 0,
        'mask1': null,
        'mask2': null,
        'mask3': null,
        'mask4': null
      }
    },
    methods: {
      calcMask () { // 计算掩码
        if (!this.maskLengthIsValid) {
          return
        }

        let mask = IP.fromPrefixLen(this.maskLength)
        let maskArr = mask.split('.')
        this.mask1 = maskArr[0]
        this.mask2 = maskArr[1]
        this.mask3 = maskArr[2]
        this.mask4 = maskArr[3]
      },
      calcMaskLength () { // 计算掩码位
        if (!this.mask1IsValid || !this.mask2IsValid || !this.mask3IsValid || !this.mask4IsValid) {
          return
        }
        let mask = `${this.mask1}.${this.mask2}.${this.mask3}.${this.mask4}`
        this.maskLength = getMaskLength(mask)
      }
    },
    computed: {
      mask1IsValid: function () {
        return this.mask1 === null || (this.mask1 >= 0 && this.mask1 <= 255)
      },
      mask2IsValid () {
        return this.mask2 === null || (this.mask2 >= 0 && this.mask2 <= 255)
      },
      mask3IsValid () {
        return this.mask3 === null || (this.mask3 >= 0 && this.mask3 <= 255)
      },
      mask4IsValid () {
        return this.mask4 === null || (this.mask4 >= 0 && this.mask4 <= 255)
      },
      maskLengthIsValid () {
        return this.maskLength === null || (this.maskLength >= 0 && this.maskLength <= 32)
      },
    }
  }
</script>

<style lang="stylus">

</style>
