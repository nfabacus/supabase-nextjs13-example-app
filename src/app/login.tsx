'use client'

import { useSupabase } from './supabase-provider'

export default function Login() {
  const { supabase } = useSupabase()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: process.env.NEXT_PUBLIC_TEST_USER_EMAIL,
      password: process.env.NEXT_PUBLIC_TEST_USER_PASSWORD,
    })
  }

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: process.env.NEXT_PUBLIC_TEST_USER_EMAIL,
      password: process.env.NEXT_PUBLIC_TEST_USER_PASSWORD,
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
