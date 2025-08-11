"use client";
import { db } from "@/Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
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

  useEffect(() => {
    const fetchData = async () => {
      const collectionRefference = collection(db, "user");

      const snapshot = await getDocs(collectionRefference);
     const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
     }))
      setUser(data);
    }

    fetchData();
  }, []);

  const state = {
    bloodGroupList,
    active,
    setActive,
    user,
  };
  return (
    <BloodFighterContext.Provider value={state}>
      {children}
    </BloodFighterContext.Provider>
  );
}

export const useBFC = () => useContext(BloodFighterContext);
