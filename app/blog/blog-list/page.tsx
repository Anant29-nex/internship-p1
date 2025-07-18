"use client";

import { useEffect, useState } from "react";

type Blog = {
  id: string;
  title: string;
  tail: string;
  content: string;
  facts: string;
};

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl . font-semibold pb-15">
        In the ever-evolving digital landscape, businesses are faced with an
        important question: should they invest in pay-per-click (PPC)
        advertising or focus on organic marketing strategies? While both
        approaches have their merits, choosing the right one depends on your
        goals, budget, and timeline. Let's dive into the strengths, challenges,
        and real-world applications of PPC and organic marketing to help you
        make an informed decision.
      </h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="pb-15">
          <h2 className="text-3xl  font-bold pb-5">{blog.title}</h2>
          <p className=" text-2xl pb-5">{blog.tail}</p>
          <p className="text-lg  font-light">{blog.content}</p>
        </div>
      ))}
    </main>
  );
}
