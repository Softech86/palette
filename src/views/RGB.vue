<template>
  <div class="rgb">
    <div class="info">
      <div class="text">
        <div>
          <span>R</span>
          <div>{{color.r}}</div>
        </div>
        <div>
          <span>G</span>
          <div>{{color.g}}</div>
        </div>
        <div>
          <span>B</span>
          <div>{{color.b}}</div>
        </div>
      </div>
      <div class="bar">
        <loading v-model="color.r" :max="256" :color="loadingColor('r')"></loading>
        <loading v-model="color.g" :max="256" :color="loadingColor('g')"></loading>
        <loading v-model="color.b" :max="256" :color="loadingColor('b')"></loading>
      </div>
    </div>
    <div class="display">
      <cube
              :x="x"
              :y="y"
              :z="z"
              :rx="deg.rx"
              :ry="deg.ry"
              :rz="deg.rz"
              :color="color"
      ></cube>
    </div>
  </div>
</template>


<script>
import Cube from '../components/cube.vue'
import Loading from '../components/loading.vue'
import Bus from '../bus'

export default {
    name: 'rgb',
    components: {
        Cube,
        Loading
    },
    computed: {
        x() {
            return this.color.g * .2 + this.color.b * .2 + 100;
        },
        y() {
            return this.color.r * .2 + this.color.b * .2 + 100;
        },
        z() {
            return this.color.g * .2 + this.color.r * .2 + 100;
        },
        mousePos() {
//            调用 event bus 中的鼠标位置
            return Bus.mousePos;
        },
        deg() {
//            实现立方体跟随鼠标旋转效果
            let center = {
                x: this.mousePos.x - window.innerWidth / 2,
                y: this.mousePos.y - window.innerHeight / 2
            };
            return {
                rx: 60 - center.y / 20,
                ry: 0,
                rz: 45 - center.x / 20
            }
        }
    },
    data () {
        return {
            color: {
                r: 180,
                g: 160,
                b: 140
            },
        }
    },
    methods: {
//        进度条颜色
        loadingColor(c) {
            let color = {
                r: '#d85b5b',
                g: '#6cd35e',
                b: '#5c85d6',
            };
            return {
                main: color[c],
                empty: '#2e1b1b'
            }
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">
  @import "../style/rgb";
</style>