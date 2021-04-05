import * as firebase from 'firebase';
import "firebase/auth";
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCwpfb29kEmGgL4OAjphK7kuSZGkiHQIzQ",
    authDomain: "insta-clone-tutorial.firebaseapp.com",
    databaseURL: "https://insta-clone-tutorial.firebaseio.com",
    projectId: "insta-clone-tutorial",
    storageBucket: "insta-clone-tutorial.appspot.com",
    messagingSenderId: "957078760992",
    appId: "1:957078760992:web:34cfe5e37e14d7d1a55645"
};
  // Initialize Firebase

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db;