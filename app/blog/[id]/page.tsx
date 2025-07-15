export default function BlogPage({ params }: { params: { id: string } }) {
  return <h1>ID: {params.id}</h1>;
}
