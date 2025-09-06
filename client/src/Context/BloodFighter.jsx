"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

const BloodFighterContext = createContext();

export function BloodFighterContextProvider({ children }) {
  const [active, setActive] = useState("Home");
  const bloodGroupList = [
    { group: "A+", color: "bg-green-300", donors: 23 },
    { group: "A-", color: "bg-green-200", donors: 12 },
    { group: "B+", color: "bg-red-300", donors: 18 },
    { group: "B-", color: "bg-red-200", donors: 8 },
    { group: "AB+", color: "bg-violet-300", donors: 15 },
    { group: "AB-", color: "bg-violet-200", donors: 10 },
    { group: "O+", color: "bg-blue-300", donors: 28 },
    { group: "O-", color: "bg-blue-200", donors: 14 },
  ];

  const [submissionStatus, setSubmissionStatus] = useState("");
  const route = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    village: "",
    phoneNumber: "",
    bloodGroup: "",
  });



  const [user, setUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(user);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);

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

  const [activeFilter, setActiveFilter] = useState("All");

  function handleFilter(group) {
    setFilteredUsers(user.filter((u) => group === u.bloodGroup));
  }

  const state = {
    bloodGroupList,
    active,
    setActive,
    user,
    submitTheForm,
    submissionStatus,
    handleFilter,
    filteredUsers,
    activeFilter,
    setActiveFilter,
  };
  return (
    <BloodFighterContext.Provider value={state}>
      {children}
    </BloodFighterContext.Provider>
  );
}

export const useBFC = () => useContext(BloodFighterContext);
export default function Profile() {
  const { id } = useParams();
  // const { user } = useBFC();
  // const [singleUser, setSingleUser] = useState();
  console.log(user);
  // setSingleUser(user.filter((u) => user._id === id));
  // useEffect(() => {
  //    const fetchData = async () => {
  //     try {
  //       const res = await fetch(`http://localhost:3000/donors/${id}`);
  //       const data = await res.json();
  //       setSingleUser(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [id]);
  // console.log(singleUser);
  return (
    <main className="p-6 md:p-10 flex flex-col items-center">
      {/* <!-- Profile Picture and Name --> */}
      <div className="text-center mb-8">
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
          className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-800">
          {/* {singleUser.name} */}skjdh
        </h2>
      </div>

      {/* <!-- Profile Details Grid --> */}
      <div className="max-w-6xl w-full mb-15 md:mb-5 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="p-6 rounded-xl bg-blue-50">
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
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          />
        </div>
        {/* Age */}
        <div className="p-6 rounded-xl bg-blue-50">
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
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          />
        </div>
        {/* <!-- Blood Type --> */}
        <div className="p-6 rounded-xl bg-blue-50">
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
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          />
        </div>
        {/* Village/City */}
        <div className="p-6 rounded-xl bg-blue-50">
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
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          />
        </div>

        {/* Phone Number */}
        <div className="p-6 rounded-xl bg-blue-50">
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
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          />
        </div>
        {/* First Donation Date */}
        <div className=" bg-blue-50 p-6 rounded-xl">
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
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
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
