"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

// The main component for the Register Donor page.
const Register = () => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [activeBloodGroup, setActiveBloodGroup] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const route = useRouter();

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
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Donor Registered:", data.message);
        setSubmissionStatus("Registration Successfull!");
        route.push("/donors");
      } else {
        setSubmissionStatus(data.error);
      }
    } catch (error) {
      console.error("Error registering donor:", error);
      setSubmissionStatus(error);
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

    setFormData({
      name: "",
      age: "",
      village: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Main content area */}
      <main className="w-full max-w-2xl p-4 lg:p-8 lg:mt-0 pb-20 lg:pb-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-4xl mb-2 shadow-lg">
            <i className="fas fa-user-plus"></i>
          </div>
          <h1 className="text-2xl font-bold text-primary">Register Donor</h1>
          <p className="text-secondary mt-1 text-center">
            Add a new blood donor to the system
          </p>
        </div>

        <form
          method="POST"
          onSubmit={submitTheForm}
          className="bg-background shadow rounded-2xl p-6 mb-6">
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="labelStyle">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className="inputStyle"
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <label htmlFor="age" className="labelStyle">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter age"
              className="inputStyle"
            />
            <span className="text-gray-600">Age Must be 18 to 65</span>
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
              className="inputStyle"
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
              className="inputStyle"
            />
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
            className="w-full cursor-pointer bg-red-400 text-background font-semibold py-4 rounded-full shadow-lg hover:bg-red-300 transition-colors duration-200">
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
        <div className="bg-blue-100 border border-blue-200 rounded-xl p-4">
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
