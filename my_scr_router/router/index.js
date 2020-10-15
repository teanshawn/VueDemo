import Vue from 'vue'
import vueRouter from 'vue-router'

import about from '../pages/About'
import home from '../pages/Home.vue'
import news from '../pages/News.vue'
import message from '../pages/Message.vue'
import messageDetail from '../pages/MessageDetail.vue'

Vue.use(vueRouter)

export default new vueRouter({
  routes: [
    {path: '/about', component: about},
    {
      path: '/home',
      component: home,
      children: [
        {path: 'news', component: news},
        {
          path: 'message',
          component: message,
          meta: {requiresAuth: false, title: 'messageTitle'},
          children: [
            {
              path: 'detail/:id',
              component: messageDetail,
              meta: {requiresAuth: true, title: 'nmessageDetailTitle'}
            }
          ]
        },
        {path: '', component: news}
      ]
    },
    {path: '/', component: about}
  ]
})
