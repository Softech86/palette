<template>
  <div class="tag-select">
    <div class="title">{{block[select].title}}</div>
    <div class="tags">
      <div class="tag btn" @click="onTagClick(i, b.router)" v-for="(b, i) in block" :class="{select: i == select}">
        {{b.tag}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'tag-select',
      data() {
          return {
              block: [
                  {
                      title: 'Hello, it\'s me',
                      tag: '首页',
                      router: 'Hello'
                  },
                  {
                      title: 'Color Selector',
                      tag: '拾色器',
                      router: 'RGB'
                  },
                  {
                      title: 'Components',
                      tag: '组件'
                  },
                  {
                      title: 'About',
                      tag: '关于'
                  },
              ],
          }
      },
      computed: {
          select() {
              return this.block.findIndex(b => b.router == this.$route.name)
          }
      },
      methods: {
          onTagClick(i, router) {
              if (router) {
                  this.select = i;
                  this.$router.push({name: router});
              }
          }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../style/tag-select";
</style>
