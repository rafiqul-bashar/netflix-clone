// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCAvXIJI-Mie4oBwzShzG6KgsFR9ZnxjwA',
  authDomain: 'net-clone-6cabc.firebaseapp.com',
  projectId: 'net-clone-6cabc',
  storageBucket: 'net-clone-6cabc.appspot.com',
  messagingSenderId: '243414695273',
  appId: '1:243414695273:web:16eab223461feaf42311f8',
}

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()
export default app
export { auth, db }
