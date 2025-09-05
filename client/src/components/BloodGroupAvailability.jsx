"use client";
import { useBFC } from "@/Context/BloodFighter";
import Link from "next/link";

export default function BloodGroupAvailability() {
  const { bloodGroupList, user, handleFilter, setActiveFilter } = useBFC();

  
  return (
    <section className="mt-8 bg-white rounded-2xl p-6 shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Blood Group Availability
      </h2>
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 text-center">
        {bloodGroupList.map((item) => (
          <Link
            key={item.group}
            href="/donors"
            onClick={() => {handleFilter(item.group)
              setActiveFilter(item.group)
            }}
            className="flex cursor-pointer sm:bg-gray-100 hover:bg-gray-100 group flex-col sm:border border-gray-400 sm:shadow-md hover:shadow-lg rounded-lg items-center p-2">
            <div
              className={`w-16 h-16 ${item.color}  rounded-full text-black flex items-center hover:shadow scaled justify-center font-bold text-xl mb-1`}>
              <h1 className="scaled">{item.group}</h1>
            </div>
            <p className="scaled text-gray-800 text-sm font-semibold">
              {user.filter((u) => u.bloodGroup === item.group).length} Donors
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
