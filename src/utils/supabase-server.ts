import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';

export const createServerComponentSBClient = () =>
  createServerComponentSupabaseClient({
    headers,
    cookies,
  });
