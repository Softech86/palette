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
//  页面导航组件
  export default {
      name: 'tag-select',
      data() {
          return {
//              全部页面，router 为路由中对应的名称
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
                      title: 'About',
                      tag: '关于',
                      router: 'About'
                  },
              ],
          }
      },
      computed: {
          select() {
//              当前页面，通过 vue-router 获取
              return this.block.findIndex(b => b.router == this.$route.name)
          }
      },
      methods: {
          onTagClick(i, router) {
              if (router) {
                  this.select = i;
//                  通过 vue-router 跳转到相应页面
//                  click 发生后 router 改变，再改变 $route.name 改变 select 计算属性
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
