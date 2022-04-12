// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByOOgZpS8AMKVi9tQTuqHk3Tq-CtjvUNk",
    authDomain: "e-online-store.firebaseapp.com",
    projectId: "e-online-store",
    storageBucket: "e-online-store.appspot.com",
    messagingSenderId: "1085975140468",
    appId: "1:1085975140468:web:84a45653e5f8ccc02a1921"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)