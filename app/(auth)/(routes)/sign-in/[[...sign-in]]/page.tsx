import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInPage = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <SignIn />
    </div>
  );
};

export default SignInPage;
