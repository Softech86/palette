<template>
  <div class="sector" :style="sectorStyle"
       @mousedown="mouseDown"
       @mouseup="mouseUp"
       @mousemove="mouseMove"
       @mouseleave="mouseLeave"
  >
    <!--环形由左半圆遮罩、右半圆、转子三部分组成，当转子超过一半时右半圆显示，否则左半圆遮挡住转子小于零的部分-->
    <div class="s rotator" :style="`transform: rotate(${deg}deg)`"></div>
    <div class="s lhalf" v-if="deg < 180" :style="{background: color.empty}"></div>
    <div class="s rhalf" v-else></div>
    <!--扇形上面挡一个圆，变成环形，显示信息-->
    <div class="center">{{value}}</div>
  </div>
</template>

<script>
//  环形进度条组件，也是 loading 的一部分
  export default {
      name: 'sector',
      props: {
          value: {
              type: Number,
              required: true
          },
          max: {
              type: Number,
              required: true
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
      data () {
          return {}
      },
      computed: {
//          计算角度跟数值的对应关系
          deg() {
              let d = this.value / this.max * 360;
              while (d < 0) d += 360;
              d = d % 360;
              return d;
          },
          sectorStyle() {
              return {
                  color: this.color.main,
                  background: this.color.empty,
              }
          }
      },
      methods: {
//        将几个鼠标事件发送到父组件，保证父组件对几个事件的监听
          mouseDown(e) {
              this.$emit('mousedown', e);
          },
          mouseUp(e) {
              this.$emit('mouseup', e);
          },
          mouseMove(e) {
              this.$emit('mousemove', e)
          },
          mouseLeave(e) {
              this.$emit('mouseleave', e)
          }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../style/sector";
</style>
