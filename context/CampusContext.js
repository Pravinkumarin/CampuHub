"use client";

import { createContext, useContext, useState } from "react";
import { announcements as announcementData } from "@/data/announcements";
import { events as eventData } from "@/data/events";
import { lostFoundItems as lostFoundData } from "@/data/lostFound";

// 1. createContext: creates an empty "box" that can share data
const CampusContext = createContext(null);

// 2. Provider: holds the data/state and gives it to all components inside it
export function CampusProvider({ children }) {
  const [announcements] = useState(announcementData);
  const [events] = useState(eventData);
  const [items, setItems] = useState(lostFoundData);
  const [registeredEventIds, setRegisteredEventIds] = useState([]);

  // Add a new lost/found item at the top of the list
  function addItem(newItem) {
    const item = { id: Date.now(), status: "Open", ...newItem };
    setItems([item, ...items]);
  }

  // Mark an item as claimed
  function claimItem(id) {
    setItems(items.map((item) => (item.id === id ? { ...item, status: "Claimed" } : item)));
  }

  // Register / unregister for an event
  function toggleRegister(id) {
    if (registeredEventIds.includes(id)) {
      setRegisteredEventIds(registeredEventIds.filter((eventId) => eventId !== id));
    } else {
      setRegisteredEventIds([...registeredEventIds, id]);
    }
  }

  const value = {
    announcements,
    events,
    items,
    registeredEventIds,
    addItem,
    claimItem,
    toggleRegister,
  };

  return <CampusContext.Provider value={value}>{children}</CampusContext.Provider>;
}

// 3. useContext: custom hook so any component can read the shared data
export function useCampus() {
  const context = useContext(CampusContext);
  if (!context) {
    throw new Error("useCampus must be used inside CampusProvider");
  }
  return context;
}
