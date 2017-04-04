<template>
  <div class="loading">
    <div class="bar" :style="barStyle">
      <div class="empty" :style="emptyStyle"></div>
    </div>
    <sector
      @mousedown="mouseDown"
      @mouseup="mouseUp"
      @mousemove="mouseMove"
      @mouseleave="mouseLeave"

      :value="val" :max="max" :class="{pressed: sectorPressed}" :style="sectorStyle" :color="color"></sector>
  </div>
</template>

<script>
//  这是一个自己写的组件，是一个现实数值的进度条
//  通过 $emit 跟父组件绑定
  import Sector from './sector.vue'
//通过 event bus 获得鼠标在全局的位置
  import Bus from '../bus'

  function getOffsetLeft(n) {
      let o = 0;
      if (n.offsetLeft)
          o += n.offsetLeft;
      if (n.parentNode) {
          o += getOffsetLeft(n.parentNode);
      }
      return o;
  }

  export default {
      name: 'loading',
      components: {
          Sector
      },
      props: {
          max: {
              type: Number,
              required: true
          },
          value: {
              required: true,
          },
          color: {
              type: Object,
              default: function () {
                  return {
                      main: 'black',
                      empty: 'white'
                  }
              }
          }
      },
      methods: {
          mouseDown(e) {
              this.sectorPressed = true;
          },
          mouseUp(e) {
              this.sectorPressed = false;
          },
          mouseMove(e) {
              if (this.sectorPressed) {
                  let
                      mouseRatio = (Bus.mousePos.x - getOffsetLeft(this.$el)) / this.$el.offsetWidth,
                      mouse2val = parseInt(mouseRatio * this.max);
                  console.log(mouse2val)
                  this.set(mouse2val)
              }
          },
          mouseLeave(e) {
              this.sectorPressed = false;
          },

          set(v) {
//            更改进度条的值
//            通过 emit 方法触发 input 更改事件，使父组件 v-model 语法糖绑定的变量值修改
//            再通过 props 传参进来，刷新这个组件的状态
              if (v >= 0 && v < this.max) {
                  this.$emit('input', v);
              }
          },
          inc() {
              // 进度条值加一，未使用
              if (this.val < this.max - 1) {
                  this.$emit('input', Number(this.value) + 1);
              }
          },
          dec() {
              // 进度条值加一，未使用
              if (this.val > 0) {
                  this.$emit('input', Number(this.value) - 1);
              }
          },
      },
      data () {
          return {
              sectorPressed: false,
          }
      },
      computed: {
          val() {
              return Number(this.value);
          },
          percentage() {
              return this.val / this.max * 100;
          },
          barStyle() {
              return {
                  color: this.color.main
              }
          },
          sectorStyle() {
              return {
                  left: `${this.percentage}%`
              }
          },
          emptyStyle() {
              return {
                  color: this.color.empty,
                  width: 100 - this.percentage + '%'
              }
          }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../style/loading.scss";
</style>
