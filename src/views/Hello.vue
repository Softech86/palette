<template>
  <div class="hello">
    <h1>Hi, there.</h1>

    <input type="number" v-model="deg">
    <sector :value="parseInt(deg)" :max="256"></sector>
    <loading :value="parseInt(deg)" :max="256"></loading>

    <div>
      <input type="number" v-model="color.r" min="0" max="255">
      <input type="number" v-model="color.g" min="0" max="255">
      <input type="number" v-model="color.b" min="0" max="255">
    </div>
    <cube
      :x="x"
      :y="y"
      :z="z"
      :rx="60"
      :ry="0"
      :rz="45"
      :color="color"
    ></cube>
  </div>
</template>

<script>
import Cube from '../components/cube.vue'
import Sector from '../components/sector.vue'
import Loading from '../components/loading.vue'
export default {
  name: 'hello',
  components: {
    Cube,
    Sector,
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
    }
  },
  data () {
    return {
        deg: 0,
      color: {
        r: 0,
        g: 0,
        b: 0
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
