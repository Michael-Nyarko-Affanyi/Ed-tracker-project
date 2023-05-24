// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADQ-18i2nqSl_wvW3iPsJg3grffH9wzC4",
  authDomain: "email-auth-d26fe.firebaseapp.com",
  projectId: "email-auth-d26fe",
  storageBucket: "email-auth-d26fe.appspot.com",
  messagingSenderId: "346775715239",
  appId: "1:346775715239:web:303c040e6dae9b6d978a82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app