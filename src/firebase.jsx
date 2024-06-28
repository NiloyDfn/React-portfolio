import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm1MPfrDUoQu6AXNjuIiiFgpREmphN0tI",
  authDomain: "niloy-portfolio.firebaseapp.com",
  projectId: "niloy-portfolio",
  storageBucket: "niloy-portfolio.appspot.com",
  messagingSenderId: "215424158878",
  appId: "1:215424158878:web:e1abb56e0b1c3adb78ff8f",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
