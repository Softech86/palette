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
    mounted() {
      let that = this;
        function timeout(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        }

        async function asyncPrint(ms) {
            for (let i in that.jobs) {
                let value = that.jobs[i];
                for (let i = 0; i < value.length; ++i) {
                    console.log(value[i]);
                    that.jobNow.push(value[i]);
                    await timeout(ms);
                }
                await timeout(ms);
                for (let i = 0; i < value.length; ++i) {
                    that.jobNow.pop();
                    await timeout(ms * .3);
                }
                await timeout(ms);
            }
        }

        asyncPrint(500);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">
  @import "../style/about";
</style>