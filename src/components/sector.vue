<template>
  <div class="sector" :style="sectorStyle"
       @mousedown="mouseDown"
       @mouseup="mouseUp"
       @mousemove="mouseMove"
       @mouseleave="mouseLeave"
  >
    <div class="s rotator" :style="`transform: rotate(${deg}deg)`"></div>
    <div class="s lhalf" v-if="deg < 180" :style="{background: color.empty}"></div>
    <div class="s rhalf" v-if="deg >= 180"></div>
    <div class="center">{{value}}</div>
  </div>
</template>

<script>
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
