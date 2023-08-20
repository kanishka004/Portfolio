import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-dam0h4ZQ_SeFM_ctYtgtVLtcPQcsBx8",
    authDomain: "react-portfolio-kanishka.firebaseapp.com",
    projectId: "react-portfolio-kanishka",
    storageBucket: "react-portfolio-kanishka.appspot.com",
    messagingSenderId: "808538286044",
    appId: "1:808538286044:web:55bf929be247e51f691119"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();