// components/ProtectedRoute.js
'use client'; 

import { useRouter } from 'next/navigation';
import { useAuth } from '@/../lib/authContext'; // আপনার সঠিক Relative Path ব্যবহার করুন
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  // useEffect এর মধ্যে চেক করা হচ্ছে
  useEffect(() => {
    // লোডিং শেষ হলে এবং ইউজার লগইন না করা থাকলে
    if (!loading && !user) {
      // ইউজারকে লগইন পেজে রিডাইরেক্ট করা
      router.push('/login');
    }
  }, [user, loading, router]); // Dependency array তে এই ভ্যালুগুলো দেওয়া জরুরি

  // ১. লোডিং এর সময়
  if (loading) {
    return <div style={{padding: '50px', textAlign: 'center'}}>Authentication loading...</div>;
  }
  
  // ২. লগইন না করা থাকলে (useEffect redirect করে দেবে, এখানে শুধু null রেন্ডার হবে)
  if (!user) {
      return router.push("/");
  }

  // ৩. লগইন করা থাকলে (Protected content দেখানো)
  return <>{children}</>;
};

export default ProtectedRoute;