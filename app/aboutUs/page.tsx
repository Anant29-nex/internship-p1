import Awards from "@/components/awardsandreco";
import Container1 from "@/components/container1";
import Container2 from "@/components/container2";
import CoreValues from "@/components/corevalue";
import Impact from "@/components/impact";
import Journey from "@/components/journey";

export default function aboutus() {
  return (
    <main>
      {/* From here main block starts!!! */}
      <header className="p-8 max-w-6xl mx-auto">
        <section className="mt-10 py-15 grid md:grid-cols-2 justify-items-center items-center mb-6 bg-gray-300/25 rounded-2xl">
          <div className=" w-3/4">
            <img
              className="inline-block"
              src="/images/Screenshot 2025-07-10 185349.png"
            />
          </div>

          <div className="w-125 py-5 inline-block">
            <h1 className="text-black font-mono tracking-tight text-5xl mb-4 ">
              Together for Success
            </h1>
            <h5 className="mb-8 text-xl">
              At Postivius, we help businesses grow by <br></br>combining
              creativity, innovation, and data-<br></br>driven strategies.
              Together, we build a future<br></br> of shared success
            </h5>
          </div>
        </section>
      </header>
      {/* Main block ends here */}

      {/* From here impact block starts!!! */}
      <Impact />
      {/* impact block ends here */}

      {/* From here, journey block starts!!! */}
      <Journey />
      {/* journey block ends here */}

      {/* From here corevalue block starts!!! */}
      <CoreValues />
      {/* corevalue block ends here */}

      {/* From here container1 block starts!!! */}
      <Container1 />
      {/*  container1 block ends here */}

      {/* From here awards block starts!!! */}
      <Awards />
      {/* awards block ends here */}

      {/* From here  container2 block starts!!! */}
      <Container2 />
      {/*  container2 block ends here */}
    </main>
  );
}
