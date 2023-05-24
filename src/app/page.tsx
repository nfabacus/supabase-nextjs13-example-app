import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import Login from './login'

// do not cache this page
export const revalidate = 0

export default async function Posts() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })
  const { data: posts } = await supabase.from('posts').select('*')

  return (
    <div>
      <Login />
      <h1>Posts</h1>
      {posts?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
