'use client';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/app/supabase-provider';

export default function SignInForm() {
  const { supabase } = useSupabase();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: process.env.NEXT_PUBLIC_TEST_USER_EMAIL,
      password: process.env.NEXT_PUBLIC_TEST_USER_PASSWORD,
    });
    router.push('/dashboard');
  };

  return (
    <div>
      <p>Email</p>
      <p>Password</p>
      <button className="px-2 mr-2 border" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
}
