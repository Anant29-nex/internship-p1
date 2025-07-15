export default function Journey() {
  return (
    <main className="container md:w-screen">
      <header className="max-w-[1440px] w-full mx-auto pt-40  inline-block">
        <div className="  flex gap-6 pb-15 pl-25">
          <h1 className="bg-lime-400 font-semibold text-3xl px-4 py-1 inline-block rounded-xl">
            Our Journey
          </h1>
          <h5 className=" font-light px-4">
            From humble beginnings to Industry leaders, discover how
            Positivushas<br></br>evolved to drive success for businesses
            worldwide
          </h5>
        </div>
        <section className="grid grid-rows-4 gap-10">
          <section className="grid grid-cols-3 gap-1">
            <div className="pl-45 pt-10 font-bold  ">
              <h1 className="text-5xl">2019</h1>
            </div>
            <div className=" w-140 bg-gray-900 text-white font-mono rounded-4xl py-10">
              <h1 className="flex justify-center text-3xl pb-4">
                The Beginning
              </h1>
              <h4 className="flex justify-center">
                Positivus was founded to help<br></br> businesses navigate the
                digital <br></br>world and achieve online <br></br> success
              </h4>
            </div>
          </section>

          <section className="grid grid-cols-3 gap-1  ">
            <div>
              <img src="/images/Screenshot 2025-07-10 213231.png" />
            </div>
            <div className="pl-45 pt-10 font-bold  ">
              <h1 className="text-5xl">2021</h1>
            </div>
            <div className=" w-100 bg-gray-900 text-white font-mono rounded-4xl py-10">
              <h1 className="flex justify-center text-3xl pb-4">
                Industry Recognition
              </h1>
              <h4 className="flex justify-center">
                Positivus was named among<br></br> the top 50 global digital
                <br></br>agencies, affirming our <br></br> leadership
              </h4>
            </div>
          </section>

          <section className="grid grid-cols-3 gap-1 items-center">
            <div className="pl-45 pt-10 font-bold">
              <h1 className="text-5xl">2023</h1>
            </div>
            <div className="w-140 bg-gray-900 text-white font-mono rounded-4xl py-10">
              <h1 className="flex justify-center text-3xl pb-4">
                Innovation and Growth
              </h1>
              <h4 className="flex justify-center text-center">
                With over 50 experts, we<br></br>continue to deliver cutting-
                <br></br> edge solutions to help <br></br> businesses thrive
              </h4>
            </div>
            <div className="pl-50">
              <img src="/images/Screenshot 2025-07-10 213805.png" />
            </div>
          </section>

          <section className="grid grid-cols-3 gap-1 items-center">
            <div></div>
            <div className="pl-45 pt-10 font-bold">
              <h1 className="text-5xl">2024</h1>
            </div>
            <div className="w-100 bg-gray-900 text-white font-mono rounded-4xl py-10">
              <h1 className="flex justify-center text-3xl pb-4">
                Leading the Future
              </h1>
              <h4 className="flex justify-center text-center">
                This year, Positivus is pioneering the use of AI <br></br>and
                automation to deliver even more <br></br>personalized,
                data-driven strategies and <br></br>setting new standards in
                digital marketing
              </h4>
            </div>
          </section>
        </section>
      </header>
    </main>
  );
}
