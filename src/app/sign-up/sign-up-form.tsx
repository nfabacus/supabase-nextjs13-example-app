'use client';

import { useSupabase } from '@/app/supabase-provider';

export default function SignUpForm() {
  const { supabase } = useSupabase();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: process.env.NEXT_PUBLIC_TEST_USER_EMAIL,
      password: process.env.NEXT_PUBLIC_TEST_USER_PASSWORD,
    });
  };

  return (
    <div>
      <p>Email</p>
      <p>Password</p>
      <button className="px-2 mr-2 border" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
}
