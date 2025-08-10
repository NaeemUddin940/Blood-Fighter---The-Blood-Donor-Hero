"use client";
import Link from "next/link";
import { useBFC } from "../Context/BloodFighter";

export default function BottomNav() {
 const {active, setActive} = useBFC()
  return (
    <nav
      id="mobile-nav"
      className="w-full bg-white shadow-lg p-3 fixed bottom-0 left-0 right-0 z-10 flex justify-around items-center lg:hidden">
      <Link
        href="/"
        className={`bottom-Nav ${
          active === "Home" ? "text-red-500" : "text-black"
        }`}
        onClick={() => setActive("Home")}>
        <i className="fas fa-home text-lg "></i>
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link
        href="/donors"
        className={`bottom-Nav ${
          active === "Donors" ? "text-red-500" : "text-black"
        }`}
        onClick={() => setActive("Donors")}>
        <i className="fas fa-users text-lg"></i>
        <span className="text-xs mt-1">Donors</span>
      </Link>
      <Link
        href="/register"
        className={`bottom-Nav ${
          active === "Register" ? "text-red-500" : "text-black"
        }`}
        onClick={() => setActive("Register")}>
        <i className="fas fa-plus-circle text-lg"></i>
        <span className="text-xs mt-1">Add</span>
      </Link>
      <Link
        href="/statistics"
        className={`bottom-Nav ${
          active === "Statistics" ? "text-red-500" : "text-black"
        }`}
        onClick={() => setActive("Statistics")}>
        <i className="fas fa-chart-line text-lg"></i>
        <span className="text-xs mt-1">Statistics</span>
      </Link>
    </nav>
  );
}
