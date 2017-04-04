<template>
  <div class="cube">
    <!--Debug:-->
    <!--<p>This is a cube.</p>-->
    <!--<p>{{x}} {{y}} {{z}} {{xyStyle}} {{color}}</p>-->
    <div class="box" :style="boxStyle">
      <!--通过 transform 形成立方体的三个两两相邻面，详见样式表-->
      <div class="xz" :style="style('xz')"></div>
      <div class="xy" :style="style('xy')"></div>
      <div class="yz" :style="style('zy')"></div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'cube',
    props: {
      'x': Number,
      'y': Number,
      'z': Number,
      'rx': Number,
      'ry': Number,
      'rz': Number,
      color: Object
    },
    data () {
        return {

        }
    },
    computed: {
        // 整体三维旋转
        boxStyle() {
          let {rx, ry, rz} = this, {r, g, b} = this.color;
            return {
              transform: `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`,
            }
        },
    },
      methods: {
          style(axes) {
              // 生成三个色块的颜色及其他属性
              // axes 取 xy xz zy
              let
                  {r, g, b} = this.color,
                  c = {
                      xy: [0, 0, b / 4],
                      zy: [r / 4, 0, 0],
                      xz: [0, g / 4, 0]
                  };
              return {
                  width: this[axes[0]] + 'px',
                  height: this[axes[1]] + 'px',
                  background: `rgba(${r}, ${g}, ${b}, 1)`,
                  color: `rgba(${c[axes]}, 1)`
              }
          }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../style/cube.scss";
</style>
