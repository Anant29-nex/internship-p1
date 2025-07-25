export default function ContactUs() {
  return (
    <main>
      <header className="p-8 max-w-6xl mx-auto ">
        <div className="flex gap-6  ">
          <h1 className="bg-lime-400 font-semibold text-3xl px-4 rounded-xl">
            Contact Us
          </h1>
          <h5 className="w-[323px] font-light ">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </h5>
        </div>

        <section className="py-[60px] ">
          <section className=" grid grid-cols-2 gap-[40px] bg-gray-200 border-4 border-white rounded-4xl p-18">
            <form className="pb-5">
              <label className="flex items-center gap-4 text-black cursor-pointer">
                <input
                  type="radio"
                  name="check"
                  className="peer-checked:bg-lime-400 peer-checked:text-green px-4 py-2 rounded-md transition"
                />
                <span>Say Hi</span>
                <input
                  type="radio"
                  name="check"
                  className="peer-checked:bg-lime-400 peer-checked:text-white px-4 py-2 rounded-md transition"
                />
                <span>Get a Quote</span>
              </label>
              <br></br>

              <label className="pb-15">Name</label>
              <br></br>
              <label>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-black bg-white border-2 px-8 py-2 rounded-2xl w-125"
                />
                <br></br>
              </label>

              <label className="pt-15">Email*</label>
              <br></br>
              <label>
                <input
                  type="text"
                  placeholder="Email"
                  className="border-black bg-white border-2 px-8 py-2 rounded-2xl w-125"
                />
                <br></br>
              </label>

              <label>Message*</label>
              <br></br>
              <label>
                <input
                  type="textarea"
                  placeholder="Message"
                  className="border-black bg-white border-2 px-8 pb-30 rounded-2xl w-125"
                />
                <br></br>
              </label>

              <label className="py-[20px] px-[35px]">
                <button
                  type="button"
                  className="flex justify-center w-125 h-[68px] pt-5 bg-black text-white rounded-2xl"
                >
                  Send Message
                </button>
              </label>
            </form>

            <div className="flex justify-end">
              <img
                className="w-3/4"
                src="/images/illustration (2).png"
                alt="Contact Illustration"
              />
            </div>
          </section>
        </section>
      </header>
    </main>
  );
}
