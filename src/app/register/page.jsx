"use client";

import { db } from "@/Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

// The main component for the Register Donor page.
const Register = () => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [activeBloodGroup, setActiveBloodGroup] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    village: "",
    phoneNumber: "",
    bloodGroup: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBloodGroupChange = (group) => {
    setFormData({ ...formData, bloodGroup: group });
  };

  const submitTheForm = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "user"), {
        name: formData.name,
        age: formData.age,
        village: formData.village,
        phoneNumber: formData.phoneNumber,
        bloodGroup: formData.bloodGroup,
      });
    } catch (error) {
      console.error("Error Adding Document: ", error);
    }

    const requireFields = [
      "name",
      "age",
      "village",
      "phoneNumber",
      "bloodGroup",
    ];
    setActiveBloodGroup("");

    for (const field of requireFields) {
      if (!formData[field]) {
        setSubmissionStatus("Please fill in all required fields.");
        return;
      }
    }
    setSubmissionStatus("Your Registration Successfull as a Blood Donor.");
    setTimeout(() => {
      setSubmissionStatus("");
    }, 2000);

    setFormData({
      name: "",
      age: "",
      village: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Main content area */}
      <main className="w-full max-w-2xl p-4 lg:p-8 lg:mt-0 pb-20 lg:pb-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-4xl mb-2 shadow-lg">
            <i className="fas fa-user-plus"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Register Donor</h1>
          <p className="text-gray-500 mt-1 text-center">
            Add a new blood donor to the system
          </p>
        </div>

        <form
          onSubmit={submitTheForm}
          className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter age"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
          </div>

          {/* Village/City */}
          <div className="mb-4">
            <label
              htmlFor="village"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Village/City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="village"
              name="village"
              value={formData.village}
              onChange={handleInputChange}
              placeholder="Enter village or city"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
          </div>
          {/* Last Donation Date */}
          <div className="mb-6">
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
                onChange={handleInputChange}
                placeholder="mm/dd/yyyy"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Leave empty if not donate.
            </p>
          </div>

          {/* Blood Group */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blood Group <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {bloodGroups.map((group) => (
                <button
                  key={group}
                  type="button"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onClick={() => {
                    setActiveBloodGroup(group);
                    handleBloodGroupChange(group);
                  }}
                  className={`px-4 ${
                    activeBloodGroup === group
                      ? "bg-red-500"
                      : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600"
                  } py-3 cursor-pointer rounded-lg font-semibold text-lg   transition-colors duration-200 `}>
                  {group}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            onClick={submitTheForm}
            className="w-full cursor-pointer bg-red-600 text-white font-semibold py-4 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200">
            Register As a Donor
          </button>
          {/* Submission status message */}

          <p
            className={`mt-4 ${
              submissionStatus.includes("Successfull")
                ? "text-green-600"
                : "text-red-600"
            } text-center font-semibold `}>
            {submissionStatus}
          </p>
        </form>

        {/* Donation Guidelines Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 flex items-center justify-center text-blue-600 mt-0.5">
              <i className="ri-information-line"></i>
            </div>
            <div>
              <h3 className="font-medium text-blue-900">Donation Guidelines</h3>
              <ul className="text-sm text-blue-800 mt-1 space-y-1">
                <li>• Donors must be 18-65 years old</li>
                <li>• Wait 56 days between donations</li>
                <li>• Must weigh at least 50kg</li>
                <li>• Be in good health</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
