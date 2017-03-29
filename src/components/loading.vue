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

      :value="val" :max="max" :style="sectorStyle" :color="color"></sector>
  </div>
</template>

<script>
  import Sector from './sector.vue'
  export default {
    methods: {
        mouseDown(e) {
            this.sectorPressed = true;
            this.pressStartPosition = e.x;
        },
        mouseUp(e) {
            this.sectorPressed = false;
            this.pressStartPosition = 0;
        },
        mouseMove(e) {
            if (this.sectorPressed) {
                if (e.screenX - this.mouseStartPosition > 1) {
                    this.inc();
                    this.mouseStartPosition = e.screenX;
                }
                if (e.screenX - this.mouseStartPosition < -1) {
                    this.dec();
                    this.mouseStartPosition = e.screenX;
                }
            }
        },
        mouseLeave(e) {
            this.sectorPressed = false;
            this.pressStartPosition = 0;
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
        mouseStartPosition: 0,
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
