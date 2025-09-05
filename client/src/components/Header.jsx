"use client";
import { useBFC } from "@/Context/BloodFighter";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { active, setActive } = useBFC();
  return (
    <header className="bg-background shadow flex justify-center px-4">
      <div className="w-6xl flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            onClick={() => setActive("Home")}
            className={`bottom-Nav ${
              active === "Home" ? "text-red-500" : "text-black"
            }`}>
            <Image
              src="/BloodFighter.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-8 text-primary">
          <Link href="/">Home</Link>
          <Link href="/donors">Donors</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/register">Register Donor</Link>
          <Link href="/statistics">Statistics</Link>
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search by name or village..."
            className="w-full lg:w-100 pl-10 pr-4 py-2 rounded-full border-2 cursor-text bg-background shadow-sm border-gray-200 focus:outline-none placeholder:text-secondary focus:border-red-500 transition-colors duration-200"
          />
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
        </div>
        <div className="flex items-center justify-center h-8 rounded-full w-8 shadow">
          <button className="text-gray-600 cursor-pointer  hover:text-red-600 transition-colors duration-200">
            <i className="fas fa-bell text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
