export default function Home() {
  return (
    <main className="container">
      {/* From here main block starts!!! */}
      <header className="max-w-[1440px] w-full mx-auto pt-[30px] pl-25">
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
      <header className="max-w-[1440px] w-full mx-auto pt-[30px] ">
        <div className="  flex gap-6 pl-25 ">
          <h1 className="bg-lime-400 font-semibold text-3xl px-4 py-1 inline-block rounded-xl">
            Services
          </h1>
          <h5 className="w-118 font-light">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </h5>
        </div>

        <section className="px-25 py-15 grid grid-rows-3 gap-6">
          <section className="grid grid-cols-2 gap-6">
            <section className="grid grid-cols-2 gap-6 bg-gray-200 border-1 border-b-4 rounded-4xl ">
              <div className="px-5 flex justify-center flex-col gap-4  ">
                <p className="inline-block bg-lime-400 text-black py-1 px-2 rounded-2xl text-xl font-semibold mb-4 ">
                  Search engine optimization
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/Icon.png"
                    alt="Icon"
                    className="  bg-black w-10 h-10 rounded-4xl"
                  />
                  <a className="text-black px-4 py-2 bg-gray ">Learn More</a>
                </div>
              </div>
              <div className="flex justify-center pt-10 ">
                <img
                  className="inline-block w-3/4 h-3/4"
                  src="/images/tokyo-magnifier-web-search-with-elements 2.png"
                />
              </div>
            </section>
            <section className="grid grid-cols-2 gap-6 bg-lime-400 border-1 border-b-4 rounded-4xl">
              <div className="px-5 flex justify-center flex-col gap-4  ">
                <p className="inline-block bg-white text-black py-1 px-2 rounded-2xl text-2xl ">
                  Pay-per-click-advertising
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/Icon.png"
                    alt="Icon"
                    className="  bg-black w-10 h-10 rounded-4xl"
                  />
                  <a className="text-black px-4 py-2 bg-gray ">Learn More</a>
                </div>
              </div>
              <div className="flex justify-center pt-10 ">
                <img
                  className="inline-block w-3/4 h-3/4"
                  src="/images/tokyo-selecting-a-value-in-the-browser-window 1.png"
                />
              </div>
            </section>
          </section>

          <section className="grid grid-cols-2 gap-6">
            <section className="grid grid-cols-2 gap-6 bg-black border-1 border-b-4 rounded-4xl">
              <div className="px-5 flex justify-center flex-col gap-4  ">
                <p className="inline-block bg-white text-black py-1 px-2 rounded-2xl text-2xl ">
                  Social Media Marketing
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/Arrow 1.png"
                    alt="Icon"
                    className="  bg-white w-10 h-10 rounded-4xl"
                  />
                  <a className="text-white px-4 py-2 bg-gray ">Learn More</a>
                </div>
              </div>
              <div className="flex justify-center pt-10 ">
                <img
                  className="inline-block w-3/4 h-3/4"
                  src="/images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png"
                />
              </div>
            </section>
            <section className="grid grid-cols-2 gap-6 bg-gray-200 border-1 border-b-4 rounded-4xl">
              <div className="px-5 flex justify-center flex-col gap-4  ">
                <p className="inline-block bg-lime-400 text-black py-1 px-2 rounded-2xl text-2xl ">
                  Email Marketing
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/Icon.png"
                    alt="Icon"
                    className="  bg-black w-10 h-10 rounded-4xl"
                  />
                  <a className="text-black px-4 py-2 bg-gray ">Learn More</a>
                </div>
              </div>
              <div className="flex justify-center pt-10 ">
                <img
                  className="inline-block w-3/4 h-3/4"
                  src="/images/tokyo-sending-messages-from-one-place-to-another 1.png"
                />
              </div>
            </section>
          </section>

          <section className="grid grid-cols-2 gap-6">
            <section className="grid grid-cols-2 gap-6 bg-lime-400 border-1 border-b-4 rounded-4xl">
              <div className="px-5 flex justify-center flex-col gap-4  ">
                <p className="inline-block bg-white text-black py-1 px-2 rounded-2xl text-2xl ">
                  Content Creation
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/Icon.png"
                    alt="Icon"
                    className="  bg-black w-10 h-10 rounded-4xl"
                  />
                  <a className="text-black px-4 py-2 bg-gray ">Learn More</a>
                </div>
              </div>
              <div className="flex justify-center pt-10 ">
                <img
                  className="inline-block w-3/4 h-3/4"
                  src="/images/tokyo-many-browser-windows-with-different-information 1.png"
                />
              </div>
            </section>
            <section className="grid grid-cols-2 gap-6 bg-black border-1 border-b-4 rounded-4xl">
              <div className="px-5 flex justify-center flex-col gap-4  ">
                <p className="inline-block bg-white text-black py-1 px-2 rounded-2xl text-2xl ">
                  Analytics and Tracking
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/Arrow 1.png"
                    alt="Icon"
                    className="  bg-white w-10 h-10 rounded-4xl"
                  />
                  <a className="text-white px-4 py-2 bg-gray ">Learn More</a>
                </div>
              </div>
              <div className="flex justify-center pt-10 ">
                <img
                  className="inline-block w-3/4 h-3/4"
                  src="/images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png"
                />
              </div>
            </section>
          </section>
        </section>
      </header>
      {/* Service Block ends here */}

      {/* From here CaseStudies block starts!!! */}
      <header className="max-w-[1440px] w-full mx-auto pt-[30px]">
        <div className="flex gap-6 pl-25  ">
          <h1 className="bg-lime-400 font-semibold text-3xl px-4 rounded-xl ">
            Case Studies
          </h1>
          <h5 className="w-118 font-light ">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </h5>
        </div>
        <section className="px-20 py-5">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-black/90 border-4 border-white rounded-4xl p-8">
            <div className="px-5 flex flex-col gap-4 border-r lg:border-r border-white">
              <p className="text-white">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>
              <div className="flex gap-4 items-center">
                <a className="text-lime-400 px-4 py-2 bg-gray ">Learn More</a>
                <img src="/images/Icon.png" alt="Icon" className="w-6 h-6" />
              </div>
            </div>

            <div className="px-5 flex flex-col gap-4 text-white border-r lg:border-r border-white">
              <p>
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </p>
              <div className="flex gap-4 items-center">
                <a className="text-lime-400 px-4 py-2 bg-gray ">Learn More</a>
                <img src="/images/Icon.png" alt="Icon" className="w-6 h-6" />
              </div>
            </div>

            <div className="px-5 text-white flex flex-col gap-4">
              <p>
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </p>
              <div className="flex gap-4 items-center">
                <a className="text-lime-400 px-4 py-2 bg-gray ">Learn More</a>
                <img src="/images/Icon.png" alt="Icon" className="w-6 h-6" />
              </div>
            </div>
          </section>
        </section>
      </header>
      {/* CaseStudies Block ends here */}

      {/* From here ContactUs block starts!!! */}
      <header className="max-w-[1440px] w-full mx-auto pt-[30px]">
        <div className="flex gap-6 pl-25 ">
          <h1 className="bg-lime-400 font-semibold text-3xl px-4 rounded-xl">
            Contact Us
          </h1>
          <h5 className="w-[323px] font-light ">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </h5>
        </div>

        <section className="pt-[60px] pb-[80px] px-[100px] ">
          <section className=" grid grid-cols-2 gap-[40px] bg-gray-200 border-4 border-white rounded-4xl p-18">
            <form>
              <label className="flex items-center gap-4 text-black cursor-pointer">
                <input
                  type="radio"
                  name="check"
                  className="peer-checked:bg-lime-400 peer-checked:text-green px-4 py-2 rounded-md transition"
                />
                <span>Say Hi</span>
                <input
                  type="radio"
                  name="check"
                  className="peer-checked:bg-lime-400 peer-checked:text-white px-4 py-2 rounded-md transition"
                />
                <span>Get a Quote</span>
              </label>
              <br></br>

              <label className="pb-15">Name</label>
              <br></br>
              <label>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-black bg-white border-2 px-8 py-2 rounded-2xl w-125"
                />
                <br></br>
              </label>

              <label className="pt-5">Email*</label>
              <br></br>
              <label>
                <input
                  type="text"
                  placeholder="Email"
                  className="border-black bg-white border-2 px-8 py-2 rounded-2xl w-125"
                />
                <br></br>
              </label>

              <label>Message*</label>
              <br></br>
              <label>
                <input
                  type="textarea"
                  placeholder="Message"
                  className="border-black bg-white border-2 px-8 pb-30 rounded-2xl w-125"
                />
                <br></br>
              </label>

              <label className="py-[20px] px-[35px]">
                <button
                  type="button"
                  className="flex justify-center w-125 h-[68px] pt-5 bg-black text-white rounded-2xl"
                >
                  Send Message
                </button>
              </label>
            </form>

            <div className="flex justify-end">
              <img
                className="w-3/4"
                src="/images/illustration (2).png"
                alt="Contact Illustration"
              />
            </div>
          </section>
        </section>
      </header>
      {/* ContactUs Block ends here */}
    </main>
  );
}
