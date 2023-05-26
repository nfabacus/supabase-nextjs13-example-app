import { createServerComponentSBClient } from '@/utils/supabase-server';

// do not cache this page
export const revalidate = 0;

export default async function Dashboard() {
  const supabase = createServerComponentSBClient();
  const { data: posts } = await supabase.from('posts').select('*');

  return (
    <div className="p-6">
      <h1>Dashboard</h1>
      <h2>Posts</h2>
      {posts?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
