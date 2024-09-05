
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRynDRBZ8UaTAWz-H3iPPcFRHI4fWUQrk",
  authDomain: "house-marketplace-app-98213.firebaseapp.com",
  projectId: "house-marketplace-app-98213",
  storageBucket: "house-marketplace-app-98213.appspot.com",
  messagingSenderId: "618177535645",
  appId: "1:618177535645:web:794b7e2f509df388587e74"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()