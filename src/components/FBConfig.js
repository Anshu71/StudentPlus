// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getDatabase} from "firebase/database";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXin9tL0OS68Ta90mu8LqszmJfdF39Pf8",
  authDomain: "codespot-9aba0.firebaseapp.com",
  databaseURL: "https://codespot-9aba0-default-rtdb.firebaseio.com",
  projectId: "codespot-9aba0",
  storageBucket: "codespot-9aba0.appspot.com",
  messagingSenderId: "1086111554947",
  appId: "1:1086111554947:web:8f179a12cdcf1230e3eab6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getDatabase(app);//add these line
export default db;  //add these line
export const  auth=getAuth(app);