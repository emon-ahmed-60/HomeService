"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signOut as firebaseSignOut, 
  createUserWithEmailAndPassword, // সাইনআপের জন্য 
  signInWithEmailAndPassword, // লগইনের জন্য
  GoogleAuthProvider,
  signInWithPopup // গুগল লগইনের জন্য
} from 'firebase/auth';
import { auth } from './firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // ফাংশন ১: ইমেল ও পাসওয়ার্ড দিয়ে সাইনআপ
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ফাংশন ২: ইমেল ও পাসওয়ার্ড দিয়ে লগইন
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ফাংশন ৩: গুগল লগইন
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // ফাংশন ৪: সাইনআউট
  const signOut = () => {
    return firebaseSignOut(auth);
  };

  // Context এ সরবরাহ করা ডেটা ও ফাংশন
  const value = {
    user,
    loading,
    signUpWithEmail, // নতুন যোগ হলো
    signInWithEmail, // নতুন যোগ হলো
    googleSignIn,    // নতুন যোগ হলো
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {loading && <div>Authentication loading...</div>}
    </AuthContext.Provider>
  );
};