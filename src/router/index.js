import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../views/Hello.vue'
import RGB from '../views/RGB.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect: {
            name: 'Hello'
          }
      },
    {
      path: '/rgb',
      name: 'RGB',
      component: RGB
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
  ]
})
