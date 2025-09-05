import Link from "next/link";
import React from "react";

export default function SaveLifeTodayCard() {
  return (
    <section className=" w-full bg-red-500 text-white rounded-2xl mt-5 p-6 relative overflow-hidden shadow">
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-1">Save Lives Today</h2>
        <p className="mb-4 text-sm md:text-base">
          Your blood donation can save up to 3 lives
        </p>
        <Link
          href="/register"
          className="flex group items-center justify-center bg-white cursor-pointer text-red-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-red-50 transition-colors duration-200">
          <div className="scaled space-x-2 ">
            <i className="fas fa-plus text-lg"></i>
            <span>Register as Donor</span>
          </div>
        </Link>
      </div>
      <div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 lg:w-64 lg:h-64 opacity-20">
        <i className="fas fa-heart text-[250px] text-white"></i>
      </div>
    </section>
  );
}
