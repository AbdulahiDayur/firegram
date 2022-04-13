import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectStorage, projectFireStore };
