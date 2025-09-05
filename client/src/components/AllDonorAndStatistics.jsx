import Link from "next/link";
import React from "react";

export default function AllDonerAndStatistics() {
  return (
    <section className="mt-8 pb-20 grid grid-cols-2 gap-4">
      <Link
        href="/donors"
        className="bg-background hover:bg-hover group rounded-2xl cursor-pointer p-6 text-center shadow flex flex-col items-center">
        <div className="w-16 h-16 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
          <i className="fas fa-users group-hover:scale-130 transition-transform duration-200 text-blue-500 text-2xl"></i>
        </div>
        <div className="group-hover:scale-110 transition-transform duration-200">
          <p className="font-bold text-secondary">View Donors</p>
          <p className="text-primary text-sm mt-1">Browse all donors</p>
        </div>
      </Link>
      <Link
        href="/statistics"
        className="bg-background hover:bg-hover group rounded-2xl cursor-pointer p-6 text-center shadow flex flex-col items-center">
        <div className="w-16 h-16 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
          <i className="fas fa-chart-bar group-hover:scale-130 transition-transform duration-200 text-green-500 text-2xl"></i>
        </div>
        <div className="group-hover:scale-110 transition-transform duration-200">
          <p className="font-bold text-secondary">Statistics</p>
          <p className="text-primary text-sm mt-1">View detailed stats</p>
        </div>
      </Link>
    </section>
  );
}
