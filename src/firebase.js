import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: "AIzaSyAg1KIoq7eREpDYEkyVnmfORunsg9bkayc",
  authDomain: "draw-candle.firebaseapp.com",
  databaseURL: "https://draw-candle.firebaseio.com",
  projectId: "draw-candle",
  storageBucket: "draw-candle.appspot.com",
  messagingSenderId: "347815611100"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
const userStateCollection = db.collection('userState')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  userStateCollection
}