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

            Bus.$emit('mousePosition', mousePos);
        }
    },
    data() {
      return {
          opacity: 0
      }
    },
    watch: {
//        '$route' (to, from) {
//            const toDepth = to.path.split('/').length
//            const fromDepth = from.path.split('/').length
//            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//        }
    },
    mounted() {
        setTimeout(()=>{this.opacity = 1;}, 0);
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "./style/app";
</style>
