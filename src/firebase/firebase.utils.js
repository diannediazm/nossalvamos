import firebase from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDHuY0f3EbbR4FKBnSf7L2fS0IZTFpzQ_I",
  authDomain: "nos-df0ce.firebaseapp.com",
  databaseURL: "https://nos-df0ce-default-rtdb.firebaseio.com",
  projectId: "nos-df0ce",
  storageBucket: "nos-df0ce.appspot.com",
  messagingSenderId: "652808281000",
  appId: "1:652808281000:web:a66c68480b59e124421b9d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

export default firebase;