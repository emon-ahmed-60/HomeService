'use client'; 

import { useRouter } from 'next/navigation';
import { useAuth } from '@/../lib/authContext'; 
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(()=>{
  if(loading){
    return <span className="loading loading-spinner loading-xl"></span>
  }

  if(!user){
    router.push("/login")
  }
  },[loading,user,router])
  
  return children
};

export default ProtectedRoute;