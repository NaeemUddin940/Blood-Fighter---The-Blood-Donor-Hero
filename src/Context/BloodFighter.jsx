"use client";
import { createContext, useContext, useState } from "react";

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
  const state = { bloodGroupList, active, setActive };
  return (
    <BloodFighterContext.Provider value={state}>
      {children}
    </BloodFighterContext.Provider>
  );
}

export const useBFC = () => useContext(BloodFighterContext);
