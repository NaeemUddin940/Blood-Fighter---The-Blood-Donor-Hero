"use client";
import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <main className="p-6 md:p-10 flex flex-col items-center">
      {/* <!-- Profile Picture and Name --> */}
      <div className="text-center mb-8">
        <Image
          id="profile-picture"
          className=" md:w-40 md:h-40 rounded-full object-cover border-4 border-red-200 shadow-lg"
          src="/BloodFighter.png"
          alt="Donor Profile Picture"
          width={100}
          height={100}
        />
        <h2
          id="donor-name"
          className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-800">
          Jane Doe
        </h2>
      </div>

      {/* <!-- Profile Details Grid --> */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="p-6 rounded-xl bg-red-50">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter full name"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
          />
        </div>
        {/* Age */}
        <div className="p-6 rounded-xl bg-red-50">
          <label
            htmlFor="age"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Age <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter age"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
          />
        </div>
        {/* <!-- Blood Type --> */}
        <div className="p-6 rounded-xl bg-red-50">
          <label
            htmlFor="age"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Blood Group <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="age"
            name="age"
            placeholder="Enter Blood Group"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
          />
        </div>
        {/* Village/City */}
        <div className="p-6 rounded-xl bg-red-50">
          <label
            htmlFor="village"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Village/City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="village"
            name="village"
            placeholder="Enter village or city"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
          />
        </div>

        {/* Phone Number */}
        <div className="p-6 rounded-xl bg-red-50">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter phone number"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
          />
        </div>
        {/* First Donation Date */}
        <div className="mb-6 bg-red-50 p-6 rounded-xl">
          <label
            htmlFor="CurrDonationDate"
            className="block text-sm font-semibold text-gray-700 mb-1">
            First Donation Date (If not donate then leave it.)
          </label>
          <div className="relative">
            <input
              type="date"
              id="CurrDonationDate"
              name="CurrDonationDate"
              placeholder="mm/dd/yyyy"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Leave empty if not donate.
          </p>
        </div>
      </div>
    </main>
  );
}
