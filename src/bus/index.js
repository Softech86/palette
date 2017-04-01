/**
 * Created by leobai on 2017/3/31.
 */

import Vue from 'vue'

export default new Vue({
    data() {
        return {
            mousePos: {
                x: 0,
                y: 0
            }
        }
    },
    created() {
        this.$on('mousePosition', function(p) {
            this.mousePos = p;
        })
    }
});