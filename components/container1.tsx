export default function Container1() {
  return (
    <main>
      <header className="p-8 max-w-6xl mx-auto">
        <section className="grid grid-cols-2 bg-gray-900 text-white rounded-3xl">
          <div className="w-[400px]">
            <img src="/images/image_no_white_or_blue.png" />
          </div>

          <div className=" py-15">
            <h1 className="text-4xl font-medium pb-10">
              "At Positivus, we believe that success is built on innovation,
              collaboration, and a relentless focus on delivering results."
            </h1>
            <h5 className="font-mono text-l">
              -John Smith, Founder of Positivus
            </h5>
          </div>
        </section>
      </header>
    </main>
  );
}
