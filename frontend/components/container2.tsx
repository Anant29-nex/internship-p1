export default function Container2() {
  return (
    <main>
      <header className="p-8 max-w-6xl mx-auto">
        <section className="grid grid-cols-2 bg-lime-300/85 border-1 border-b-4 rounded-4xl">
          <div className="pl-15 py-15 ">
            <h1 className="text-4xl font-medium pb-10">Join Our Team</h1>
            <h5 className=". text-l mb-8">
              At Positivus, we thrive on innovation and collaboration. We're
              always looking for passionate individuals to join our team and
              help businesses grow. Ready to make impact?
            </h5>

            <ul>
              <li>
                <a
                  className="bg-gray-900 text-white px-8 py-4 rounded-2xl inline-block"
                  href="/"
                >
                  Explore Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="py-10 px-10 flex justify-center ">
            <img
              className="w-90 h-80"
              src="/images/Screenshot 2025-07-11 161624.png"
            />
          </div>
        </section>
      </header>
    </main>
  );
}
