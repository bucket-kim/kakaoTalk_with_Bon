// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUkmh77Ur52jhvfg89J7kiC6i-1_MMM9c",
  authDomain: "kakao-talk-clone.firebaseapp.com",
  projectId: "kakao-talk-clone",
  storageBucket: "kakao-talk-clone.appspot.com",
  messagingSenderId: "550533202690",
  appId: "1:550533202690:web:567972a521f03f4763f81b",
  measurementId: "G-F5CL2XS4ND",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
