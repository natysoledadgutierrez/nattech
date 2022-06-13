// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAegVQDH8te6zXDf-RDs6cgK7i338RUMM",
  authDomain: "nattech-d4c2b.firebaseapp.com",
  projectId: "nattech-d4c2b",
  storageBucket: "nattech-d4c2b.appspot.com",
  messagingSenderId: "298573418232",
  appId: "1:298573418232:web:bf30babcc3dd65ea90f50d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;