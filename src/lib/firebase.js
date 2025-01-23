import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chit-chat-b535a.firebaseapp.com",
  projectId: "chit-chat-b535a",
  storageBucket: "chit-chat-b535a.firebasestorage.app",
  messagingSenderId: "920856658433",
  appId: "1:920856658433:web:fd9d79106bd2df71d2b600"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
