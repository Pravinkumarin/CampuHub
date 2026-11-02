"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import SearchBar from "@/components/SearchBar";
import Select from "@/components/Select";
import EmptyState from "@/components/EmptyState";
import { useCampus } from "@/context/CampusContext";
import { announcementCategories } from "@/data/announcements";
import { formatDate } from "@/utils/formatDate";

export default function AnnouncementsPage() {
  const { announcements } = useCampus();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  // Filter by category first, then by search text
  const filtered = announcements.filter((a) => {
    const matchesCategory = category === "All" || a.category === category;
    const matchesSearch = (a.title + " " + a.description).toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <h1>Announcements</h1>
      <p className="subtitle">Important college notices in one place.</p>

      <div className="toolbar">
        <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search announcements..." />
        <Select id="category" value={category} onChange={(e) => setCategory(e.target.value)} options={announcementCategories} />
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No announcements found" message="Try a different word or category." />
      ) : (
        <div className="grid grid-2">
          {filtered.map((a) => (
            <Card
              key={a.id}
              title={a.title}
              description={a.description}
              badge={<Badge label={a.category} />}
              meta={`${formatDate(a.date)} • ${a.postedBy}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
