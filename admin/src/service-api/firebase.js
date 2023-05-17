// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCjfxuMi10_YFmGnWkzjL-KXKxAG7ktu4",
  authDomain: "ecommerce-fe5d1.firebaseapp.com",
  projectId: "ecommerce-fe5d1",
  storageBucket: "ecommerce-fe5d1.appspot.com",
  messagingSenderId: "899889136548",
  appId: "1:899889136548:web:eb263f219eb8d8a8673731",
  measurementId: "G-XB8RWSEESJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
