// lib/firebase.js (UPDATED to use Environment Variables)

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Environment Variables থেকে কনফিগারেশন লোড করা
const firebaseConfig = {
  // process.env দিয়ে ভ্যারিয়েবলগুলো অ্যাক্সেস করা হচ্ছে
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, 
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };