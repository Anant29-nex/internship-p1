"use client";
import Link from "next/link";
import { useAuth } from "@/lib/useAuth";

export default function Join() {
  const { user, isLoggedIn } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // Refresh page
  };

  return (
    <main className="container flex justify-items-center p-20 ">
      <header className="p-15 max-w-6xl mx-auto border-2 rounded-4xl ">
        <>
          <div className="text-3xl text-black hover:text-green-300 pb-10">
            <Link href="/join/register">Register</Link>
          </div>

          <div className="text-3xl text-black hover:text-green-300 pb-10">
            <Link href="/join/login">Login</Link>
          </div>
        </>
      </header>
    </main>
  );
}
