export default function Awards() {
  return (
    <main className="container md:w-screen">
      <header className="max-w-[1440px] w-full mx-auto pt-30 inline-block">
        <div className="  flex gap-6 pl-25 ">
          <h1 className="bg-lime-400 font-semibold text-3xl px-4 py-1 inline-block rounded-2xl">
            Awards and Recognition
          </h1>
          <h5 className="w-145 font-light font-mono">
            At Positivus, our commitment to excellence has been recognized by
            industry leaders. Here are some of our proudest achievements:
          </h5>
        </div>

        <section className="grid grid-cols-4 gap-3 px-25 py-10 ">
          <div className="flex justify-center flex-col border-1 border-b-4 rounded-4xl py-8 px-8 bg-gray-100/50">
            <div>
              <img src="/images/enhanced1.png" />
            </div>
            <h1 className=" text-l pb-5  font-bold font-mono ">
              Best Small Business Digital Marketing Agency of the Year
            </h1>
            <h5 className="pt-5 text-l">
              Celebrating our success in delivery Innovative strategies and
              measureable reults for small business clients.
            </h5>
          </div>

          <div className="flex justify-center flex-col border-1 border-b-4 rounded-4xl py-5 px-8 bg-gray-100/50 ">
            <div>
              <img src="/images/enhanced2.png" />
            </div>
            <h1 className="text-l pb-5 font-bold font-mono ">
              Innovative Website Design
            </h1>
            <h5 className="pt-5 text-l">
              Honoring our expertise in developing visually stunning,
              user-friendly websites that capture a brand's essence and boost
              conversations
            </h5>
          </div>

          <div className="flex justify-center flex-col border-1 border-b-4 rounded-4xl py-5 px-8 bg-gray-100/50">
            <div>
              <img src="/images/enhanced3.png" />
            </div>
            <h1 className=" text-l pb-5 font-bold font-mono ">
              Top Performing PPC Campaign of the Year
            </h1>
            <h5 className="pt-5 text-l">
              Acknowledging our ability to design and execute a high-impact
              pay-per-click campaign that drove exceptional client results.
            </h5>
          </div>

          <div className="flex justify-center flex-col border-1 border-b-4 rounded-4xl py-5 px-8 bg-gray-100/50 ">
            <div>
              <img src="/images/enhanced4.png" />
            </div>
            <h1 className="text-l pb-5 font-bold font-mono ">
              Expertise in Social Media Marketing
            </h1>
            <h5 className="pt-5 text-l">
              Recognizing our exceptional skills in crafting effective social
              media strategies, managing accounts, and creating engaging
              contents.
            </h5>
          </div>
        </section>
      </header>
    </main>
  );
}
