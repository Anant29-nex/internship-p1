import { NextResponse } from "next/server";
import Insights from "@/components/insights";

import Blog from "@/components/blogPage";

import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      {/* From here main block starts!!! */}
      <header className="p-8 max-w-6xl mx-auto ">
        <section className="mt-10 py-10 grid md:grid-cols-2 justify-items-center items-center mb-6 bg-gray-300/25 rounded-2xl">
          <div className=" w-3/4">
            <img className="inline-block" src="/images/illustration.png" />
          </div>

          <div className="w-125 py-5 inline-block .">
            <h1 className="bg-gray-200 w-fit px-2 py-1 rounded-2xl text-gray-500 ">
              Marketing Strategies
            </h1>
            <h1 className="text-black  font-bold  text-4xl py-10">
              PPC vs. Organic Marketing: Which One is Right for Your Business
            </h1>
            <h5 className="mb-8  font-light text-xl">
              PPC and organic marketing each offer unique benefits for driving
              traffic and growing your business. Discover which strategy aligns
              best with your goals and how to strike the perfect balance.
            </h5>
          </div>
        </section>
      </header>
      {/* Main block ends here */}

      {/*Page starts here */}
      <nav className=" max-w-6xl mx-auto border-b-1 pb-5">
        <div className="   flex items-center justify-between ">
          <div className="flex items-center">
            <img
              src="/images/profile.png"
              alt="logo"
              className="w-10 h-10"
            ></img>
            <div className="grid grid-rows-2 pl-5">
              <p className=" font-semibold text-lg">Sarah Kim</p>
              <p className="text-sm">Content Creator</p>
            </div>
          </div>

          <ul className="flex items-center gap-1">
            <li>
              <p className="text-gray-400 text-2xl">A</p>
            </li>
            <li>
              <p className="text-xl font-semibold">A</p>
            </li>
            <li>
              <p className="text-gray-200 text-lg">A</p>
            </li>
          </ul>
        </div>
      </nav>

      <Blog />
      {/*Page ends here */}

      {/*Insights block starts here*/}
      <Insights />
      {/*Insights block ends here*/}
    </main>
  );
}
