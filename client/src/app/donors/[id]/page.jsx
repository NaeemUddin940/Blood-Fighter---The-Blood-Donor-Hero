"use client";
import { useBFC } from "@/Context/BloodFighter";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const { id } = useParams();
  const { user } = useBFC();

  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    setSingleUser(user.find((user) => user._id === id));
  }, []);

  return (
    <main className="p-6 md:p-10 bg-background flex flex-col items-center">
      {/* <!-- Profile Picture and Name --> */}
      <div className="flex flex-col  justify-center items-center mb-8">
        <Image
          id="profile-picture"
          className=" md:w-60 md:h-40 rounded-full object-cover border-4 border-red-200 shadow-lg"
          src="/BloodFighter.png"
          alt="Donor Profile Picture"
          width={200}
          height={100}
        />
        <h2
          id="donor-name"
          className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
          {singleUser.name}
        </h2>
      </div>

      {/* <!-- Profile Details Grid --> */}
      <div className="max-w-6xl w-full mb-15 md:mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="p-6 rounded-xl bg-background shadow">
          <label htmlFor="name" className="labelStyle">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={singleUser.name}
            name="name"
            placeholder="Enter full name"
            className="inputStyle bg-gray-600 border-none"
          />
        </div>
        {/* Age */}
        <div className="p-6 rounded-xl bg-background shadow">
          <label
            htmlFor="age"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Age <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={singleUser.age}
            placeholder="Enter age"
            className="inputStyle bg-gray-600 border-none"
          />
        </div>
        {/* <!-- Blood Type --> */}
        <div className="p-6 rounded-xl bg-background shadow">
          <label
            htmlFor="bloodGroup"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Blood Group <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            value={singleUser.bloodGroup}
            placeholder="Enter Blood Group"
            className="inputStyle bg-gray-600 border-none"
          />
        </div>
        {/* Village/City */}
        <div className="p-6 rounded-xl bg-background shadow">
          <label
            htmlFor="village"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Village/City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="village"
            name="village"
            value={singleUser.village}
            placeholder="Enter village or city"
            className="inputStyle bg-gray-600 border-none"
          />
        </div>

        {/* Phone Number */}
        <div className="p-6 rounded-xl bg-background shadow">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>{" "}
          </label>
          <div className="flex gap-3 justify-center items-center">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={singleUser.phoneNumber}
              placeholder="Enter phone number"
              className="inputStyle bg-gray-600 border-none"
            />
            <a className="bg-gray-600 w-40 py-2 rounded-2xl px-2 text-primary" href={`tel:+88${singleUser.phoneNumber}`}>📞 Call Me</a>
          </div>
        </div>

        {/* Donation Times */}
        <div className="p-6 rounded-xl bg-background shadow">
          <label
            htmlFor="donationTime"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Donation Time <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="donationTime"
            name="donationTime"
            // value={singleUser.phoneNumber}
            placeholder="How Many Times You have donate?"
            className="inputStyle bg-gray-600 border-none"
          />
        </div>

        {/* First Donation Date */}
        <div className=" bg-background shadow p-6 rounded-xl">
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
              // value={}
              placeholder="mm/dd/yyyy"
              className="inputStyle border-none bg-gray-600"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Leave empty if not donate.
          </p>
        </div>

        {/* Next Donation Date */}
        <div className=" bg-background shadow p-6 rounded-xl">
          <label
            htmlFor="CurrDonationDate"
            className="block text-sm font-semibold text-gray-700 mb-1">
            Next Donation Date (After 4 Month You can Donate.)
          </label>
          <div className="relative">
            <input
              type="date"
              id="CurrDonationDate"
              name="CurrDonationDate"
              placeholder="mm/dd/yyyy"
              className="inputStyle border-none bg-gray-600"
            />
          </div>
        </div>

        <div className=" bg-background shadow space-y-5 p-6 rounded-xl">
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-400 w-full py-2 rounded-2xl">
            Edit
          </button>
          <button className="bg-teal-500 cursor-pointer hover:bg-teal-400 w-full py-2 rounded-2xl">
            Save
          </button>
        </div>
      </div>
    </main>
  );
}
