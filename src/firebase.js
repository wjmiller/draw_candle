import firebase from 'firebase'
import 'firebase/firestore'

// Firebase config/init
const config = {
  apiKey: "AIzaSyAg1KIoq7eREpDYEkyVnmfORunsg9bkayc",
  authDomain: "draw-candle.firebaseapp.com",
  databaseURL: "https://draw-candle.firebaseio.com",
  projectId: "draw-candle",
  storageBucket: "draw-candle.appspot.com",
  messagingSenderId: "347815611100"
}
firebase.initializeApp(config)

// Firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// Firebase collections
const usersCollection = db.collection('users')
const userStateCollection = db.collection('userState')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  userStateCollection
}