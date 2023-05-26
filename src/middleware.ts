import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*'],
};
