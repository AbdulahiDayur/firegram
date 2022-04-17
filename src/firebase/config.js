import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYFi8stv_j8Zpq3lcB9vY6QA7cIS8OCtE",
  authDomain: "abdul-firegram-25dc0.firebaseapp.com",
  projectId: "abdul-firegram-25dc0",
  storageBucket: "abdul-firegram-25dc0.appspot.com",
  messagingSenderId: "230281247989",
  appId: "1:230281247989:web:755729793ed06fb3a9d9bc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
