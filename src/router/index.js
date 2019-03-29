import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

// Import views
import Lesson from '@/views/Lesson'
import Login from '@/views/Login'
import Account from '@/views/Account'

Vue.use(Router)

// Setup routes
const router = new Router({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Lesson',
      component: Lesson,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// Before routing, check auth
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router