/**
 * Created by leobai on 2017/3/31.
 */

//event bus 组件，用来实现类似 vuex 的状态管理功能
// 用来传递全局的鼠标位置
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
            // 监听鼠标位置事件
            this.mousePos = p;
        })
    }
});