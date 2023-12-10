import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
