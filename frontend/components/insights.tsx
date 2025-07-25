"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Insights() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data: BlogPost[]) => setPosts(data));
  }, []);

  return (
    <main className="pb-10">
      <header className="p-8 max-w-6xl mx-auto">
        <div className="flex gap-6">
          <h1 className="bg-lime-400 font-semibold text-3xl px-4 py-1 inline-block rounded-2xl">
            Explore More Insights
          </h1>
          <h5 className="w-150 font-light">
            Discover expert tips, strategies and stories to keep you ahead in
            the digital landscape
          </h5>
        </div>

        <section className="container mx-auto px-6 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 border rounded-2xl overflow-hidden">
            {posts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blogs/${post.id}`}
                className={`
                  flex flex-col justify-between p-6 bg-white hover:bg-gray-50  transition
                  ${index % 3 !== 2 ? "border-r" : ""}
                  ${index < posts.length - 3 ? "border-b" : ""}
                `}
              >
                {/* Title */}
                <h2 className="text-lg font-semibold text-neutral-800 mb-2 leading-snug">
                  {post.title}
                </h2>

                {/* Body */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {post.body}
                </p>

                {/* Read Article CTA */}
                <div className="flex items-center space-x-2 group">
                  <div className="bg-lime-400 w-7 h-7 rounded-full flex items-center justify-center">
                    <img
                      src="/images/Arrow 1.png"
                      alt="Arrow"
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800 group-hover:underline">
                    Read article
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </header>
    </main>
  );
}
