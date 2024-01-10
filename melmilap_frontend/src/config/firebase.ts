// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDla1vxVl_Io15upY7m5d0yoJHOvdD_cTk",
  authDomain: "upload-image-3e279.firebaseapp.com",
  projectId: "upload-image-3e279",
  storageBucket: "upload-image-3e279.appspot.com",
  messagingSenderId: "930501187978",
  appId: "1:930501187978:web:b9eb7c6194517258d8d073",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();
