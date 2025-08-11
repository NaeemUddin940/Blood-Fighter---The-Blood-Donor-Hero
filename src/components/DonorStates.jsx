"use client"
import { useBFC } from "@/Context/BloodFighter";
import Link from "next/link";
import React from "react";

export default function DonarStats() {
  const {user} = useBFC()
  return (
    <section className="mt-8 grid grid-cols-2 gap-4">
      <Link
        href="/donors"
        className="bg-gray-50 hover:bg-gray-100 group rounded-2xl p-6 text-center shadow">
        {/* Total Donors */}
        <div className="w-16 h-16 mx-auto mb-2  bg-red-100 scaled rounded-full flex items-center justify-center">
          <i className="ri-user-heart-fill group-hover:scale-150 transition-transform duration-200 text-red-600 text-xl"></i>
        </div>
        <p className="text-3xl scaled font-bold text-gray-800">{user.length}</p>
        <p className="text-gray-500 scaled mt-1">Total Donors</p>
      </Link>

      {/* Available Donors Now */}
      <div className="bg-gray-50 hover:bg-gray-100 group rounded-2xl p-6 text-center shadow">
        <div className="w-16 h-16 mx-auto mb-2 bg-green-100 scaled rounded-full flex items-center justify-center">
          <i className="ri-drop-fill group-hover:scale-150 transition-transform duration-200 text-green-600 text-xl"></i>
        </div>
        <p className="text-3xl scaled font-bold text-gray-800">89</p>
        <p className="text-gray-500 scaled mt-1">Eligible Now</p>
      </div>
    </section>
  );
}
