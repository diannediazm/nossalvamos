import firebase from "firebase/app";
import 'firebase/database';

const config = {
    apiKey: "nos-df0ce",
    authDomain: "nos-df0ce.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "nos-df0ce.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  const database = firebase.database();

  export default firebase;