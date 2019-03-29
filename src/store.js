import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./firebase.js')

Vue.use(Vuex)

// Handle page reload
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')

    fb.usersCollection.doc(user.uid).onSnapshot(doc => {
      store.commit('setUserProfile', doc.data())
    })
  }
})

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {}
  },
  actions: {
    clearData({
      commit
    }) {
      commit('setCurrentUser', null)
      commit('setUserProfile', {})
    },
    fetchUserProfile({
      commit,
      state
    }) {
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
        commit('setUserProfile', res.data())
      })
    },
    updateProfile({
      commit,
      state
    }, data) {
      let name = data.name
      let email = data.email
      fb.usersCollection.doc(state.currentUser.uid).update({
        name,
        email
      });
    }
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val
    },
    setUserProfile(state, val) {
      state.userProfile = val
    }
  }
})