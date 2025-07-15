export default function Container1() {
  return (
    <main className="container md:w-screen">
      <header className="max-w-[1440px] w-full mx-auto pt-[30px] pl-25 inline-block">
        <section className="grid grid-cols-2 bg-gray-900 text-white rounded-3xl">
          <div className="w-[400px]">
            <img src="/images/image_no_white_or_blue.png" />
          </div>

          <div className="px-5 py-15">
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
