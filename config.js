import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC1Xg9jQITUD8v3wFEQjPJ88ihxKCowBrE",
    authDomain: "e-library-3c0bd.firebaseapp.com",
    projectId: "e-library-3c0bd",
    storageBucket: "e-library-3c0bd.appspot.com",
    messagingSenderId: "173239769406",
    appId: "1:173239769406:web:52f97178f2fe958e0c746f"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
