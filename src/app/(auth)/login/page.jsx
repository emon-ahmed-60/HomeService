// app/login/page.js
'use client'; // এটি একটি Client Component, কারণ এটি React Hooks এবং Event Handlers ব্যবহার করছে।

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/../lib/authContext'; // আপনার Auth Context import করা
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  // useAuth হুক থেকে প্রমাণীকরণের ফাংশনগুলো আনা
  const { signInWithEmail, user } = useAuth(); 
  const router = useRouter();

  // যদি ইউজার ইতিমধ্যেই লগইন করা থাকে, তাহলে তাকে /dashboard এ রিডাইরেক্ট করে দেওয়া
  if (user) {
    router.push('/'); 
    return null; // কিছু রেন্ডার না করে অপেক্ষা করা
  }
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoggingIn(true);

    try {
      await signInWithEmail(email, password);
      // লগইন সফল হলে, ইউজারকে মূল পেজে নিয়ে যাওয়া
      router.push('/');
    } catch (firebaseError) {
      console.error(firebaseError);
      // Firebase থেকে আসা এরর মেসেজ দেখানো
      setError(firebaseError.message); 
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h1>লগইন</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">ইমেল:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <div>
          <label htmlFor="password">পাসওয়ার্ড:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <button type="submit" disabled={isLoggingIn} style={{ padding: '10px 15px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {isLoggingIn ? 'লগইন হচ্ছে...' : 'লগইন করুন'}
        </button>
      </form>
      
      {/* এখানে সাইনআপ বা Google লগইন বাটন যোগ করতে পারেন */}
      <p className='mt-3.5'>
        এখনও অ্যাকাউন্ট নেই? <Link href="/signup">সাইনআপ করুন</Link>
      </p>
    </div>
  );
};

export default LoginPage;