type Params = {
  params: {
    id: string;
  };
};

export default async function BlogDetailPage({ params }: Params) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <a href="/blog" className="text-blue-600 text-sm">
        &larr; Back to Blog
      </a>
      <h1 className="text-3xl font-bold mt-4 mb-4">{post.title}</h1>
      <p className="text-gray-800 leading-relaxed">{post.body}</p>
    </main>
  );
}
