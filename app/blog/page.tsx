import { NextResponse } from "next/server";
import Insights from "@/components/insights";
import BlogPage from "./[id]/page";

export default async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json(
    <main>
      {/* From here main block starts!!! */}
      <header className="p-8 max-w-6xl mx-auto ">
        <section className="mt-10 py-10 grid md:grid-cols-2 justify-items-center items-center mb-6 bg-gray-300/25 rounded-2xl">
          <div className=" w-3/4">
            <img className="inline-block" src="/images/illustration.png" />
          </div>

          <div className="w-125 py-5 inline-block font-mono">
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

      {/*Page ends here */}

      {/*Insights block starts here*/}
      <Insights />
      {/*Insights block ends here*/}
    </main>
  );
}
