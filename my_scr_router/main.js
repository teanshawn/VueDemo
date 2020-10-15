import Vue from 'vue'
import router from './router'
import App from './App'

router.beforeEach((to, from, next) => {
  console.log(to.matched)
  next()
/*  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }*/

})

new Vue({
  el:"#app",
  components:{App},
  template:'<App/>',
  router
})
