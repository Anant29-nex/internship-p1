export default function Impact() {
  return (
    <main>
      <header className="p-8 max-w-6xl mx-auto">
        <div className="  flex gap-6 pb-15">
          <h1 className="bg-lime-400 font-semibold text-3xl py-1 inline-block rounded-xl">
            Our Impact in Numbers
          </h1>
          <h5 className=" font-light px-4">
            A snapshot of the milestones and achievements <br></br>that drive
            our success
          </h5>
        </div>

        <section className="grid  grid-cols-5  gap-4  items-center border-t-2 rounded-md p-8 ">
          <div className="py-5 border-r-2 ">
            <h1 className="text-3xl font-mono font-bold  ">8+</h1>
            <h5>Years of Experince</h5>
          </div>
          <div className="py-5 border-r-2">
            <h1 className="text-3xl font-mono font-bold">50+</h1>
            <h5>Experts</h5>
          </div>
          <div className="py-5 border-r-2">
            <h1 className="text-3xl font-mono font-bold">100+</h1>
            <h5>Successful Campaigns</h5>
          </div>
          <div className="py-5 border-r-2">
            <h1 className="text-3xl font-mono font-bold">20+</h1>
            <h5>Industry Awards</h5>
          </div>
          <div className="py-5 ">
            <h1 className="text-3xl font-mono font-bold">500%</h1>
            <h5>ROI of our clients</h5>
          </div>
        </section>
      </header>
    </main>
  );
}
