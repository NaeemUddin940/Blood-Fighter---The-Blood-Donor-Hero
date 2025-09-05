"use client";
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
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  function handleFilter(group) {
    setFilteredUsers(user.filter((u) => group === u.bloodGroup));
  }

  const state = {
    bloodGroupList,
    active,
    setActive,
    user,
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
