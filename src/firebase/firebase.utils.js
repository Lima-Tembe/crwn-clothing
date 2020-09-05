import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDezySPDQSuijR3QiGSitviiHzXjVTocNY",
  authDomain: "crwn-db-8cc12.firebaseapp.com",
  databaseURL: "https://crwn-db-8cc12.firebaseio.com",
  projectId: "crwn-db-8cc12",
  storageBucket: "crwn-db-8cc12.appspot.com",
  messagingSenderId: "970259547524",
  appId: "1:970259547524:web:ee08b97c0606902ec449d1",
  measurementId: "G-E5DWD1YKQ6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;