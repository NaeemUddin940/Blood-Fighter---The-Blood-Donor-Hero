"use client";
import { useBFC } from "@/Context/BloodFighter";
import React from "react";

export default function BloodGroupAvailability() {
  const { bloodGroupList } = useBFC();

  return (
    <section className="mt-8 bg-white rounded-2xl p-6 shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Blood Group Availability
      </h2>
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 text-center">
        {bloodGroupList.map((item) => (
          <div key={item.group} className="flex cursor-pointer bg-gray-50 hover:bg-gray-100 group flex-col border border-gray-400 shadow-md hover:shadow-lg rounded-lg items-center p-2">
            <div
              className={`w-16 h-16 ${item.color}  rounded-full text-black flex items-center hover:shadow scaled justify-center font-bold text-xl mb-1`}>
              <h1 className="scaled">
                {item.group}
              </h1>
            </div>
            <p className="scaled text-gray-800 text-sm font-semibold">
              {item.donors} Donors
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
