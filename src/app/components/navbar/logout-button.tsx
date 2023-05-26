'use client';
import { useSupabase } from '@/app/supabase-provider';

export default function LogOutButton() {
  const { supabase } = useSupabase();

  const handleLogOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <button className="px-2 mr-2 border" onClick={handleLogOut}>
      Logout
    </button>
  );
}
