import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-QpaAzUIgs01ar6XxWkevC_4Fesv2Z8Y",
  authDomain: "login-page-feb91.firebaseapp.com",
  projectId: "login-page-feb91",
  storageBucket: "login-page-feb91.appspot.com",
  messagingSenderId: "799080763771",
  appId: "1:799080763771:web:0fee513c8b76899ff8adde",
  measurementId: "G-ZJWT81EFRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);



