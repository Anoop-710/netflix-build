
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRocgB-UKO7msARUm8PDoHDnP2OvHVJ3E",
    authDomain: "netflix-build-fc6ee.firebaseapp.com",
    projectId: "netflix-build-fc6ee",
    storageBucket: "netflix-build-fc6ee.appspot.com",
    messagingSenderId: "273447270596",
    appId: "1:273447270596:web:34afb49ce6b7fe023f3191"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig); //Takes configuration as an object and it will initialize the application
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {auth,db}
 