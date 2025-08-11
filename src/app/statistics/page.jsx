"use client";
import { useBFC } from "@/Context/BloodFighter";
import React from "react";

// The main component for the Statistics page.
export default function StatisticsPage() {
  const { bloodGroupList, user } = useBFC();
  // Dummy data for the statistics cards.
  const stats = {
    totalDonors: 123,
    eligibleNow: 78,
    totalDonations: 301,
    availability: 63,
  };
  if (!bloodGroupList?.length) return null; // or a skeleton loader

  // Dummy data for blood group statistics.
  const bloodGroupStats = [
    { group: "O+", donors: 28, eligible: 18, percentage: 64 },
    { group: "A+", donors: 23, eligible: 15, percentage: 65 },
    { group: "B+", donors: 18, eligible: 12, percentage: 67 },
    { group: "AB+", donors: 15, eligible: 10, percentage: 67 },
    { group: "O-", donors: 14, eligible: 8, percentage: 57 },
    { group: "A-", donors: 12, eligible: 7, percentage: 58 },
    { group: "B-", donors: 8, eligible: 5, percentage: 63 },
    { group: "AB-", donors: 5, eligible: 3, percentage: 60 },
  ];

  // Dummy data for monthly donations.
  const monthlyDonations = [
    { month: "Jan", donations: 45 },
    { month: "Feb", donations: 52 },
    { month: "Mar", donations: 38 },
    { month: "Apr", donations: 61 },
    { month: "May", donations: 49 },
    { month: "Jun", donations: 56 },
  ];
  

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Main content area */}
      <main className="w-full max-w-2xl p-4 lg:p-8 lg:mt-0 pb-20">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Statistics</h1>
          <p className="text-gray-500 mt-1 text-center">
            Blood donation analytics and insights
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center text-center">
            <i className="fas fa-user-friends text-5xl text-blue-500 mb-2"></i>
            <span className="text-3xl font-bold text-gray-800">
              {user.length}
            </span>
            <p className="text-sm text-gray-500">Total Donors</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center text-center">
            <i className="fas fa-check-circle text-5xl text-green-500 mb-2"></i>
            <span className="text-3xl font-bold text-gray-800">
              {stats.eligibleNow}
            </span>
            <p className="text-sm text-gray-500">Eligible Now</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center text-center">
            <i className="fas fa-tint text-5xl text-red-500 mb-2"></i>
            <span className="text-3xl font-bold text-gray-800">
              {stats.totalDonations}
            </span>
            <p className="text-sm text-gray-500">Total Donations</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center text-center">
            <i className="fas fa-percent text-5xl text-purple-500 mb-2"></i>
            <span className="text-3xl font-bold text-gray-800">
              {stats.availability}%
            </span>
            <p className="text-sm text-gray-500">Availability</p>
          </div>
        </div>

        {/* Blood Group Statistics section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Blood Group Statistics
          </h2>
          {bloodGroupStats.map((bg) => (
            <div key={bg.group} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-5">
                  {bloodGroupList
                    .filter((group) => group.group === bg.group)
                    .map((group) => (
                      <div
                        key={group.group}
                        className={`w-12 h-12 rounded-full ${group.color} text-black flex items-center justify-center font-bold text-lg mb-2`}>
                        {bg.group}
                      </div>
                    ))}
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-800">
                      {bg.donors} donors
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      {bg.eligible} eligible
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-sm  font-semibold text-gray-600">
                    {bg.percentage}%
                  </span>
                  <div className="w-30 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: `${bg.percentage}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Donations section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Monthly Donations (2024)
          </h2>
          {monthlyDonations.map((monthData) => (
            <div key={monthData.month} className="flex items-center mb-4">
              <span className="w-12 text-sm text-gray-500 font-semibold">
                {monthData.month}
              </span>
              <div className="flex-grow bg-gray-200 rounded-full h-4 relative mx-2">
                <div
                  className="bg-red-600 h-4 rounded-full"
                  style={{ width: `${monthData.donations * 1.5}%` }}></div>
                <span className="absolute top-0 right-2 text-xs font-semibold text-black">
                  {monthData.donations}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Insights section */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-lg font-bold text-blue-900 mb-4">
            Quick Insights
          </h2>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start">
              <i className="fas fa-circle text-blue-500 text-[8px] mt-1.5 mr-2"></i>
              <span>
                <span className="font-semibold">O+</span> donors are most
                available (28 donors)
              </span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-circle text-blue-500 text-[8px] mt-1.5 mr-2"></i>
              <span>
                <span className="font-semibold">AB-</span> donors are least
                available (5 donors)
              </span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-circle text-blue-500 text-[8px] mt-1.5 mr-2"></i>
              <span>
                Average <span className="font-semibold">50</span> donations per
                month
              </span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-circle text-blue-500 text-[8px] mt-1.5 mr-2"></i>
              <span>
                <span className="font-semibold">78</span> donors ready to donate
                today
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
