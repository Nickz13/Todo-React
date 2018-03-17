

import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBrJfyn9_4XInJnTzJIX3lPcsgOqUndHrE",
    authDomain: "todo-app-5d623.firebaseapp.com",
    databaseURL: "https://todo-app-5d623.firebaseio.com",
    projectId: "todo-app-5d623",
    storageBucket: "",
    messagingSenderId: "538892624867"
  };
  var fire = firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default fire;