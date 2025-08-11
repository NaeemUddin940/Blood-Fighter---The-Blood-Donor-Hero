"use client";
import { useState } from "react";
import DonarStats from "@/components/DonorStates";
import { useBFC } from "@/Context/BloodFighter";

export default function Donors() {
  const { bloodGroupList, user } = useBFC();

  const initialDonors = [
    {
      id: 1,
      name: "John Smith",
      age: 29,
      phoneNumber: "01311078039",
      villageCity: "Dhaka",
      bloodGroup: "O+",
      donationDate: "4/15/2023",
      nextDonationDate: "10/15/2023",
      donations: 5,
      eligible: false,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 25,
      phoneNumber: "01722334455",
      villageCity: "Khulna",
      bloodGroup: "A+",
      donationDate: "7/20/2024",
      nextDonationDate: "1/20/2025",
      donations: 4,
      eligible: true,
    },
    {
      id: 3,
      name: "Mike Davis",
      age: 32,
      phoneNumber: "01833445566",
      villageCity: "Chittagong",
      bloodGroup: "B+",
      donationDate: "7/10/2024",
      nextDonationDate: "1/10/2025",
      donations: 3,
      eligible: true,
    },
    {
      id: 4,
      name: "Emily Wilson",
      age: 28,
      phoneNumber: "01944556677",
      villageCity: "Sylhet",
      bloodGroup: "B+",
      donationDate: "3/25/2023",
      nextDonationDate: "9/25/2023",
      donations: 2,
      eligible: false,
    },
    {
      id: 5,
      name: "David Brown",
      age: 35,
      phoneNumber: "01655667788",
      villageCity: "Gazipur",
      bloodGroup: "O-",
      donationDate: "9/8/2024",
      nextDonationDate: "3/8/2025",
      donations: 12,
      eligible: true,
    },
    {
      id: 6,
      name: "Lisa Anderson",
      age: 30,
      phoneNumber: "01766778899",
      villageCity: "Rangpur",
      bloodGroup: "A-",
      donationDate: "7/30/2024",
      nextDonationDate: "1/30/2025",
      donations: 4,
      eligible: true,
    },
    {
      id: 7,
      name: "Robert Taylor",
      age: 41,
      phoneNumber: "01877889900",
      villageCity: "Bogra",
      bloodGroup: "B-",
      donationDate: "6/15/2024",
      nextDonationDate: "12/15/2024",
      donations: 5,
      eligible: true,
    },
    {
      id: 8,
      name: "Jennifer Lee",
      age: 27,
      phoneNumber: "01988990011",
      villageCity: "Comilla",
      bloodGroup: "AB-",
      donationDate: "7/18/2024",
      nextDonationDate: "1/18/2025",
      donations: 7,
      eligible: true,
    },
  ];

  // Blood groups to display for the filter buttons.
  const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [active, setActive] = useState("All");

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex flex-wrap gap-2 mt-5">
        {bloodGroups?.map((group) => (
          <button
            key={group}
            onClick={() => setActive(group)}
            className={`px-3 py-2 ${
              active === group ? "bg-red-400" : "bg-gray-300"
            } cursor-pointer rounded-full text-sm transition-colors duration-200 text-black font-bold shadow`}>
            {group}
          </button>
        ))}
      </div>

      {/* Main content area */}
      <main className="w-full max-w-7xl px-4 pb-20">
        <DonarStats />
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {user?.map((person) => (
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
                        person.isEligible ? "text-green-600" : "text-red-600"
                      }`}>
                      {person.isEligible ? "Eligible" : "Not Eligible"}
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
                      key={item.id}
                      className={`w-12 ${item.color} h-12 rounded-full text-black flex items-center justify-center font-bold text-lg mb-4`}>
                      {person.bloodGroup}
                    </div>
                  ))}

                <div className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-800">
                    {person.donations}
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
