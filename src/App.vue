<template>
  <div id="app" @mousemove="mouseMove" :style="{opacity: opacity}">
    <tag-select></tag-select>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import TagSelect from './components/tag-select.vue'
  import Bus from './bus'

export default {
  name: 'app',
    components: {
      TagSelect
    },
    methods: {
        mouseMove(e) {
            let mousePos = {
                x: e.clientX,
                y: e.clientY
            };
//            发送鼠标位置事件到 event bus
            Bus.$emit('mousePosition', mousePos);
        }
    },
    data() {
      return {
          opacity: 0
      }
    },
    mounted() {
        setTimeout(()=>{this.opacity = 1;}, 0);
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "./style/app";
</style>
