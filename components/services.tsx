export default function Services() {
  return (
    <main>
      <header className="p-8 max-w-6xl mx-auto  ">
        <div className="  flex gap-6 ">
          <h1 className="bg-lime-400 font-semibold text-3xl px-4 py-1 inline-block rounded-xl">
            Services
          </h1>
          <h5 className="w-130 font-light">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </h5>
        </div>

        <section className=" py-15 grid grid-rows-3 gap-6">
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
    </main>
  );
}
