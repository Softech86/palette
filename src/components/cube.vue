<template>
  <div class="cube">
    <!--<p>This is a cube.</p>-->
    <!--<p>{{x}} {{y}} {{z}} {{xyStyle}} {{color}}</p>-->
    <div class="box" :style="boxStyle">
      <div class="xz" :style="xzStyle"></div>
      <div class="xy" :style="xyStyle"></div>
      <div class="yz" :style="yzStyle"></div>
    </div>
  </div>


</template>

<script>
  import {dcos as cos, dsin as sin} from '../script/math'
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
        boxStyle() {
          let {rx, ry, rz} = this, {r, g, b} = this.color;
            return {
              transform: `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`,
            }
        },
      xyStyle() {
        let {x, y} = this, {r, g, b} = this.color;
        return {
          width: x + 'px',
          height: y + 'px',
          background: `rgba(${r}, ${g}, ${b}, 1)`,
          color: `rgba(0, 0, ${parseInt(b / 4)}, 1)`
        }
      },
      xzStyle() {
        let {x, z} = this, {r, g, b} = this.color;
        return {
          width: x + 'px',
          height: z + 'px',
          background: `rgba(${r}, ${g}, ${b}, 1)`,
          color: `rgba(0, ${parseInt(g / 4)}, 0, 1)`
        }
      },
      yzStyle() {
        let {y, z} = this, {r, g, b} = this.color;
        return {
          width: z + 'px',
          height: y + 'px',
          background: `rgba(${r}, ${g}, ${b}, 1)`,
          color: `rgba(${parseInt(r / 4)}, 0, 0, 1)`
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../style/cube.scss";
</style>
