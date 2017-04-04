<template>
  <div class="about">
    <div>
      <div>
        <span>I am </span><h2>Leo Bai</h2>
      </div>
      <div>
        <span>aka.</span><h1>Softech</h1>
      </div>
      <div>
        <span>a {{jobNow.join("")}}_</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  components: {
  },
  computed: {
  },
  data () {
    return {
        jobs: [
            'Front-end Engineer',
            'Designer',
            'Tongji Student',
            'Singer',
            'Guitar Player',
        ],
        jobNow: [],
    }
  },
    methods: {
        timeout: function (ms) {
            // 延时 ms
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        },
        asyncPrint: async function (ms) {
            // 异步实现打字的动效
            for (let i in this.jobs) {
                let value = this.jobs[i];
                for (let i = 0; i < value.length; ++i) {
                    console.log(value[i]);
                    await this.timeout(ms);
                    this.jobNow.push(value[i]);
                }
                await this.timeout(ms);
                for (let i = 0; i < value.length; ++i) {
                    this.jobNow.pop();
                    await this.timeout(ms * .3);
                }
                await this.timeout(ms);
            }
        }
    },
    created() {
      // TODO: Bug - Vue 不能实时刷新 DOM
      // 但是值确实变了，且打印在 log 里
        this.asyncPrint(500);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">
  @import "../style/about";
</style>