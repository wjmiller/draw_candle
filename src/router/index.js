import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

// Import views
import Lesson from '@/views/Lesson'
import Login from '@/views/Login'
import Account from '@/views/Account'
import ActivityTest from '@/views/ActivityTest'
import GameTest from '@/views/GameTest'
import FeedbackTest from '@/views/FeedbackTest'
import MultiChoiceTest from '@/views/MultiChoiceTest'

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
    },
    {
      path: '/activity-test',
      name: 'ActivityTest',
      component: ActivityTest,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/feedback-test',
      name: 'FeedbackTest',
      component: FeedbackTest,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/game-test',
      name: 'GameTest',
      component: GameTest,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/multi-choice-test',
      name: 'MultiChoiceTest',
      component: MultiChoiceTest,
      meta: {
        requiresAuth: false
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
