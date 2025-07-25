type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <main className="p-8 max-w-6xl mx-auto">
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
