export default function Insights() {
  return (
    <main>
      <header className="p-8 max-w-6xl mx-auto">
        <div className="  flex gap-6 ">
          <h1 className="bg-lime-400 font-semibold text-3xl px-4 py-1 inline-block rounded-2xl">
            Explore More Insights
          </h1>
          <h5 className="w-150 font-light font-mono">
            Discover expert tips, strategies and stories to keep you ahead in
            the digital landscape
          </h5>
        </div>

        <section className="container pt-15 ">
          <section className="gird grid-rows-2 border-1 border-b-3 rounded-4xl font-mono">
            <section className="grid grid-cols-3 border-b-1 justify-center">
              <div className=" border-r-1 px-8 py-10">
                <h1 className="font-bold text-3xl pb-5 ">
                  10 SEO Myths you need to stop believing
                </h1>
                <h5 className="pb-5 text-l">
                  Think keywords stuffing and meta tags are the secret to
                  ranking? Discover the truth behind common SEO misconceptions
                  and learn what really drives results
                </h5>
                <div className="flex items-center">
                  <div className="bg-lime-400 w-7 h-7 rounded-4xl">
                    <img
                      src="/images/Arrow 1.png"
                      alt="Icon"
                      className=" h-6 w-6 pl-1 pt-1 "
                    />
                  </div>
                  <a className="px-4 py-2 bg-gray ">Read article</a>
                </div>
              </div>
              <div className=" border-r-1 px-8 py-10">
                <h1 className="font-bold text-3xl pb-5">
                  Maximizing ROI with Social Media Advertising
                </h1>
                <h5 className="pb-5 text-l">
                  Social media ads are more than just boosted posts. Explore
                  proven strategies for crafting campaigns that engage
                  audiencies and deliver measurable returns.
                </h5>
                <div className="flex items-center">
                  <div className="bg-lime-400 w-7 h-7 rounded-4xl">
                    <img
                      src="/images/Arrow 1.png"
                      alt="Icon"
                      className=" h-6 w-6 pl-1 pt-1 "
                    />
                  </div>
                  <a className="px-4 py-2 bg-gray ">Read article</a>
                </div>
              </div>
              <div className="px-8 py-10">
                <h1 className="font-bold text-3xl pb-5">
                  How content Marketing Fuels Long-Term Growth
                </h1>
                <h5 className="pb-5 text-l">
                  Content isn't just king-it's the foundation of sustainable
                  business growth. Find out how blogs, videos, and more can
                  build trust and drive conversations
                </h5>
                <div className="flex items-center">
                  <div className="bg-lime-400 w-7 h-7 rounded-4xl">
                    <img
                      src="/images/Arrow 1.png"
                      alt="Icon"
                      className=" h-6 w-6 pl-1 pt-1 "
                    />
                  </div>
                  <a className="px-4 py-2 bg-gray ">Read article</a>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-3 justify-center">
              <div className=" border-r-1 px-8 py-10">
                <h1 className="font-bold text-3xl pb-5 ">
                  The Art of A/B Testing: Perfecting Your Campaigns
                </h1>
                <h5 className="pb-5 text-l">
                  From headlines to call-to- actions, small tweaks can make a
                  big difference. Learn how to use A/B testing to refine your
                  marketing strategies.
                </h5>
                <div className="flex items-center">
                  <div className="bg-lime-400 w-7 h-7 rounded-4xl">
                    <img
                      src="/images/Arrow 1.png"
                      alt="Icon"
                      className=" h-6 w-6 pl-1 pt-1 "
                    />
                  </div>
                  <a className="px-4 py-2 bg-gray ">Read article</a>
                </div>
              </div>
              <div className=" border-r-1 px-8 py-10">
                <h1 className="font-bold text-3xl pb-5">
                  Understanding Google's Latest Algorithm Update
                </h1>
                <h5 className="pb-5 text-l">
                  Search rankings change constatly- stay ahead by learning about
                  the latest Google update and its impact on your SEO strategy
                </h5>
                <div className="flex items-center">
                  <div className="bg-lime-400 w-7 h-7 rounded-4xl">
                    <img
                      src="/images/Arrow 1.png"
                      alt="Icon"
                      className=" h-6 w-6 pl-1 pt-1 "
                    />
                  </div>
                  <a className="px-4 py-2 bg-gray ">Read article</a>
                </div>
              </div>
              <div className="px-8 py-10">
                <h1 className="font-bold text-3xl pb-5">
                  5 Ways AI is Changing Digital Marketing
                </h1>
                <h5 className="pb-5 text-l">
                  Artificial intelligence is transforming the way we target,
                  analyze, and engage audiencies. Discover how to leverage AI to
                  stay competitive.
                </h5>
                <div className="flex items-center">
                  <div className="bg-lime-400 w-7 h-7 rounded-4xl">
                    <img
                      src="/images/Arrow 1.png"
                      alt="Icon"
                      className=" h-6 w-6 pl-1 pt-1 "
                    />
                  </div>
                  <a className="px-4 py-2 bg-gray ">Read article</a>
                </div>
              </div>
            </section>
          </section>
        </section>
      </header>
    </main>
  );
}
