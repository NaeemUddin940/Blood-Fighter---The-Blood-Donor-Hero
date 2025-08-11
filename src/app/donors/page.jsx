"use client";
import { useState } from "react";
import DonarStats from "@/components/DonorStates";
import { useBFC } from "@/Context/BloodFighter";

export default function Donors() {
  const { bloodGroupList, user, handleFilter, filteredUsers, activeFilter, setActiveFilter} = useBFC();

  // Blood groups to display for the filter buttons.
  const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];


  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex flex-wrap gap-2 mt-5">
        {bloodGroups?.map((group) => (
          <button
            key={group}
            onClick={() => {
              setActiveFilter(group);
              handleFilter(group);
            }}
            className={`px-3 py-2 ${
              activeFilter === group ? "bg-red-400" : "bg-gray-300"
            } cursor-pointer rounded-full text-sm transition-colors duration-200 text-black font-bold shadow`}>
            {group}
          </button>
        ))}
      </div>

      {/* Main content area */}
      <main className="w-full max-w-7xl px-4 pb-20">
        <DonarStats />
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {(activeFilter === "All" ? user : filteredUsers).map((person) => (
            <div
              key={person.id}
              className="bg-green-100 border border-green-300 rounded-2xl p-6 shadow-lg relative flex justify-between items-start">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-800">
                  {person.name}
                </h3>
                <p className="text-gray-500 text-xl">{person.villageCity}</p>
                <p className="text-gray-600 text-sm mt-2">
                  <span className="font-semibold">Age: </span>
                  {person.age} years
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Donation Date: </span>
                  {person.CurrentDonation?.toDate().toLocaleDateString()}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Next Donation: </span>
                  {person.NextDonation?.toDate().toLocaleDateString()}
                </p>
                <p className="text-sm font-semibold mt-2">
                  <>
                    <span
                      className={`${
                        !person.isEligible ? "text-green-600" : "text-red-600"
                      }`}>
                      {!person.isEligible ? "Eligible" : "Not-Eligible"}
                    </span>
                    <span className="px-5 text0xl font-bold text-gray-700">
                      {person.phoneNumber}
                    </span>
                    <a href={`tel:+88${person.phoneNumber}`}>📞 Call Me</a>
                  </>
                </p>
              </div>
              <div className="flex absolute top-5 right-5 flex-col justify-between items-center mt-5">
                {bloodGroupList
                  .filter((item) => item.group === person.bloodGroup)
                  .map((item) => (
                    <div
                      key={item.group}
                      className={`w-12 ${item.color} h-12 rounded-full text-black flex items-center justify-center font-bold text-lg mb-4`}>
                      {person.bloodGroup}
                    </div>
                  ))}

                <div className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-800">
                    {!person.donations ? "0" : person.donations}
                  </span>{" "}
                  Donations
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
