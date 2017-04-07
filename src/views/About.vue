<template>
  <div class="about">
      <div class="text">
        <span>I am </span><h2>Leo Bai</h2>
      </div>
      <div class="text">
        <h1>Softech</h1>
      </div>
      <div class="stage">
        <div class="jobs">
          <div class="job" v-for="job in jobs">
            {{job}}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'about',
    components: {},
    computed: {},
    data () {
        return {
            jobs: [
                'Front-end',
                'Singing',
                'Guitar',
                'Design',
                'Tongji University',
            ],
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">
  @import "../style/about";
</style>