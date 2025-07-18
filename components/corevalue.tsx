export default function CoreValues() {
  return (
    <main>
      <header className="p-8 max-w-6xl mx-auto">
        <div className="  flex gap-6 ">
          <h1 className="bg-lime-400 font-semibold text-3xl px-4 py-1 inline-block rounded-2xl">
            Core Values
          </h1>
          <h5 className="w-65 font-light .">
            At the heart of everything we do are our core values
          </h5>
        </div>

        <section className=" py-15 grid grid-rows-2 gap-6">
          <section className="grid grid-cols-2 gap-6  ">
            <div className="flex justify-center flex-col border-1 border-b-4 rounded-4xl py-5 px-8 ">
              <h1 className="border-b-1 text-2xl pb-5 font-bold . ">
                Client Success First
              </h1>
              <h5 className="pt-5 text-l">
                We are dedicated at achieving measurable results for our
                clinets. Each strategy is tailoredto meet unique business
                goalsand drive long-term success.
              </h5>
            </div>
            <section className="grid grid-cols-2 gap-6  border-1 border-b-4 rounded-4xl py-5 px-5">
              <div className="px-5 flex justify-center flex-col gap-4  ">
                <p className="border-b-1 text-2xl pb-5 font-bold . ">
                  Innovation
                </p>
                <div className="flex items-center">
                  <h5>We constantly strive to stay ahead of industry trends</h5>
                </div>
              </div>
              <div className="flex justify-center ">
                <img
                  className="inline-block "
                  src="/images/Screenshot 2025-07-11 104059.png"
                />
              </div>
            </section>
          </section>

          <section className="grid grid-cols-2 gap-6  ">
            <section className="grid grid-cols-2 gap-6  border-1 border-b-4 rounded-4xl py-5 px-5">
              <div className="px-5 flex justify-center flex-col gap-4  ">
                <p className="border-b-1 text-2xl pb-5 font-bold . ">
                  Collaboration
                </p>
                <div className="flex items-center">
                  <h5>We believe in power of teamwork and partnership.</h5>
                </div>
              </div>
              <div className="flex justify-center ">
                <img
                  className="inline-block "
                  src="/images/Screenshot 2025-07-11 110249.png"
                />
              </div>
            </section>
            <div className="flex justify-center flex-col border-1 border-b-4 rounded-4xl py-5 px-7 ">
              <h1 className="border-b-1 text-2xl pb-5 font-bold . ">
                Transperency
              </h1>
              <h5 className="pt-5 text-l">
                Open and honest communication is the key to our success. We keep
                our clients informed every step of the way to ensure trust and
                clarity.
              </h5>
            </div>
          </section>
        </section>
      </header>
    </main>
  );
}
