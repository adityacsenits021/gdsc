import { initializeApp } from 'firebase/app'
import {
  getFirestore,
} from 'firebase/firestore'
import {
  getAuth,
  
} from 'firebase/auth'

import {getStorage,

} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCrmMfnRY-jpXd_voHtdVtdIg4JkMCcs6M",
    authDomain: "photobook-22af3.firebaseapp.com",
    projectId: "photobook-22af3",
    storageBucket: "photobook-22af3.appspot.com",
    messagingSenderId: "283408952277",
    appId: "1:283408952277:web:6b088e4bbf1179a7c1ab5c"
  };


// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()
const storage=getStorage()

export {db,auth,storage}