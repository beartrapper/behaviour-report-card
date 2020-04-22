import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8W7hdcoGyG4Jr76ObjPTPrjUNLGf5okU",
    authDomain: "login-database-brc.firebaseapp.com",
    databaseURL: "https://login-database-brc.firebaseio.com",
    projectId: "login-database-brc",
    storageBucket: "login-database-brc.appspot.com",
    messagingSenderId: "233571554632",
    appId: "1:233571554632:web:7d320a8b681c5105888f7d",
    measurementId: "G-V19H1EQG9B"
  };

firebase.initializeApp(firebaseConfig);
// firebase.firestore();
export const authentication = firebase.auth();
// export const firestore = firebase.firestore();
export default firebase;