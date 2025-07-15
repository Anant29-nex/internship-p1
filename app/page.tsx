import CaseStudies from "@/components/casestudies";
import ContactUs from "@/components/contactus";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      {/* From here main block starts!!! */}
      <header className="p-8 max-w-6xl mx-auto">
        <section className="mt-10 grid md:grid-cols-2 justify-items-center items-center mb-6">
          <div className="w-125">
            <h1 className="text-black font-mono tracking-tight text-5xl mb-4 ">
              Navigating the digital landscape for success
            </h1>
            <h5 className="mb-8">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation. Book a consultation
            </h5>

            <ul>
              <li>
                <a
                  className="bg-gray-900 text-white px-8 py-4 rounded-2xl inline-block"
                  href="/"
                >
                  Book a consultation
                </a>
              </li>
            </ul>
          </div>

          <div className=" w-3/4 ">
            <img className="inline-block" src="/images/illustration.png" />
          </div>
        </section>

        <div>
          <ul className="w-full pb-15">
            <li>
              <img
                className="inline-block filter grayscale  transition duration-300"
                src="/images/Logotypes.png"
              />
            </li>
          </ul>
        </div>
      </header>
      {/* Main block ends here */}

      {/* From here service block starts!!! */}
      <Services />
      {/* Service Block ends here */}

      {/* From here CaseStudies block starts!!! */}
      <CaseStudies />
      {/* CaseStudies Block ends here */}

      {/* From here ContactUs block starts!!! */}
      <ContactUs />
      {/* ContactUs Block ends here */}
    </main>
  );
}
