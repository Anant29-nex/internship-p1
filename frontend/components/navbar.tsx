import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" max-w-6xl mx-auto">
      <div className=" h-17  flex items-center justify-between px-10 ">
        <div>
          <img src="/images/Logo.png" alt="logo"></img>
        </div>

        <ul className="flex items-center gap-5">
          <li>
            <Link href="/aboutus">About us</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Use Cases</Link>
          </li>
          <li>
            <Link href="/">Pricing</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/join">JoinUs</Link>
          </li>
          <li>
            <Link
              href="/"
              className="border border-black px-7 py-4 rounded-2xl"
            >
              Request a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
