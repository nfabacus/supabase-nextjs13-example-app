import Link from 'next/link';
import LogOutButton from '@/app/components/navbar/logout-button';
import { createServerComponentSBClient } from '@/utils/supabase-server';

export default async function Navbar() {
  const supabase = createServerComponentSBClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const authenticated = user?.role === 'authenticated';

  return (
    <div className="px-6 py-3">
      <Link className="px-2 mr-2 border" href="/">
        Home
      </Link>
      <Link className="px-2 mr-2 border" href="/about">
        About
      </Link>
      {authenticated ? (
        <>
          <Link className="px-2 mr-2 border" href="/dashboard">
            Dashboard
          </Link>
          <LogOutButton />
        </>
      ) : (
        <>
          <Link className="px-2 mr-2 border" href="/sign-up">
            Sign Up
          </Link>
          <Link className="px-2 mr-2 border" href="/sign-in">
            Sign In
          </Link>
        </>
      )}
    </div>
  );
}
