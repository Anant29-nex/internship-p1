export default function Footer() {
  return (
    <main>
      <header className="p-8 max-w-6xl mx-auto">
        <section className="grid grid-rows-3  bg-gray-900 text-white border-t-4 rounded-4xl">
          <nav className="max-w-[1440px] w-full mx-auto pt-[30px]">
            <div className=" h-5  flex items-center justify-between px-10 ">
              <div>
                <img src="/images/Logo (2).png" alt="logo"></img>
              </div>
              <ul className="flex items-center gap-5 underline">
                <li>
                  <a href="/aboutus">About us</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Use Cases</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
              <div>
                <ul className="flex items-center gap-5">
                  <li className="bg-white h-7 w-7 rounded-4xl">
                    <img
                      className="h-6 w-6 pl-2 pt-2"
                      src="/images/linkedin.png"
                    />
                  </li>
                  <li className="bg-gray-900 h-10 w-10 rounded-4xl">
                    <img
                      className="h-8 w-8 pl-2 pt-2"
                      src="/images/Social icon.png"
                    />
                  </li>
                  <li className="bg-white h-7 w-7 rounded-4xl">
                    <img
                      className="h-6 w-6 pl-2 pt-2"
                      src="/images/twitter.png"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <section className="grid grid-cols-2 pt-1 pl-15 pr-15 pb-15 h-40">
            <div className="pl-5 pb-5">
              <h1 className="bg-lime-300  text-black w-29 px-2 . rounded-xl">
                Contact us:
              </h1>
              <h5 className="pb-3 pt-3">Email:info@positivus.com</h5>
              <h5 className="pb-3 ">Phone:555-567-8901</h5>
              <h5 className="pb-3 ">
                Address:1234 Main St<br></br> Moonstone City, Stardust State
                12345
              </h5>
            </div>

            <form className=" flex  py-15 bg-gray-800 rounded-2xl px-5 . ">
              <label>
                <section className="grid grid-cols-2 gap-3 h-auto">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border-white bg-gray-800 border-2 px-4 py-2 rounded-2xl w-50"
                  />

                  <button
                    type="button"
                    className="flex justify-center w-50 h-[68px] pt-5 bg-lime-300  text-black rounded-2xl"
                  >
                    Subscribe to news
                  </button>
                </section>
              </label>
            </form>
          </section>

          <div className=" my-auto border-t-1 pl-15 h-1 border-white">
            <h1 className="h-2"> 2023 Positivus. All Rights Reserved</h1>
            <h1 className="text-center underline">Privacy Policy</h1>
          </div>
        </section>
      </header>
    </main>
  );
}
