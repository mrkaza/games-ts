import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCQ_VDLdkjlQQwJib_LteV72rB1a5IXu9c",
  authDomain: "games-ts.firebaseapp.com",
  databaseURL: "https://games-ts.firebaseio.com",
  projectId: "games-ts",
  storageBucket: "games-ts.appspot.com",
  messagingSenderId: "77111678840",
  appId: "1:77111678840:web:e3e99d5206a188d01b5a8d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const fbAuth = firebase.auth();
export const fbStorage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
