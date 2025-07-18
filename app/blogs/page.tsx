// app/blogs/page.tsx
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // optional: ISR / caching behaviour
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function BlogsPage() {
  const posts = await getPosts(); // posts: Post[]

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 15).map((post) => (
          <a
            key={post.id}
            href={`/blogs/${post.id}`}
            className="border p-4 rounded "
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2 line-clamp-3">{post.body}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
