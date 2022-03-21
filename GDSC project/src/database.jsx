import { initializeApp } from 'firebase/app'
import {
  getFirestore,
} from 'firebase/firestore'
import {
  getAuth,
  
} from 'firebase/auth'

import {getStorage,

} from 'firebase/storage'

// const firebaseConfig = {
//     apiKey: "AIzaSyCrmMfnRY-jpXd_voHtdVtdIg4JkMCcs6M",
//     authDomain: "photobook-22af3.firebaseapp.com",
//     projectId: "photobook-22af3",
//     storageBucket: "photobook-22af3.appspot.com",
//     messagingSenderId: "283408952277",
//     appId: "1:283408952277:web:6b088e4bbf1179a7c1ab5c"
//   };


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOa0OsZFQ2Xw-CpEgB5lhX5_lOGUzlxjU",
  authDomain: "gdsc-e3045.firebaseapp.com",
  projectId: "gdsc-e3045",
  storageBucket: "gdsc-e3045.appspot.com",
  messagingSenderId: "986477852132",
  appId: "1:986477852132:web:8bd30142ef7fa7a0da83f1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()
const storage=getStorage()

export {db,auth,storage}