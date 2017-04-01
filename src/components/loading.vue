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
  import Sector from './sector.vue'
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

        inc() {
            if (this.val < this.max - 1) {
                this.$emit('input', Number(this.value) + 1);
            }
        },
        dec() {
            if (this.val > 0) {
                this.$emit('input', Number(this.value) - 1);
            }
        },
        set(v) {
            if (v >= 0 && v < this.max) {
                this.$emit('input', v);
            }
        }
    },
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
