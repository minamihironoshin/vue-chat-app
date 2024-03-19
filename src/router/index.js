import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'
import ChatBoard from '../views/ChatBoard.vue'
import LoginPage from '../views/LoginPage.vue'
import SignUp from '../views/SignUp.vue'
// import firebase from "@/firebase/firebase"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList,
    meta: {requiresAuth: true}
  },
  {
    path: '/chatBoard',
    name: 'ChatBoard',
    component: ChatBoard
  },
  {
    path: '/loginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
      const user = sessionStorage.getItem('user')
      console.log(JSON.parse(user))
      if (!user) {
          next({
              path: '/loginPage',
              query: {redirect: to.fullPath}
          })
      } else {
          next()
      }

      // firebase.auth().onAuthStateChanged((user) => {
      //     if (!user) {
      //         next({
      //             path: '/login',
      //             query: {redirect: to.fullPath}
      //         })
      //     } else {
      //         next()
      //     }
      //
      // })


  } else {
      next() // next() を常に呼び出すようにしてください!
  }
})

export default router
