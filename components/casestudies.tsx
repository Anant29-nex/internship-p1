export default function CaseStudies() {
  return (
    <main className="container md:w-screen">
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
    </main>
  );
}
