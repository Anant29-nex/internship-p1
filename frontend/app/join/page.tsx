import Link from "next/link";
import RegisterPage from "./register/page";

export default function join() {
  return (
    <main className="container flex justify-items-center p-20 ">
      {/* From here main block starts!!! */}
      <header className="p-15 max-w-6xl mx-auto border-2 rounded-4xl ">
        <div className="text-3xl text-black hover:text-green-300 pb-10">
          <Link href="/join/register">Register</Link>
        </div>

        <div className="text-3xl text-black hover:text-green-300 pb-10">
          <Link href="/join/login">Login</Link>
        </div>
      </header>
      {/* Main block ends here */}
    </main>
  );
}
