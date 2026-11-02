"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import Select from "@/components/Select";
import EmptyState from "@/components/EmptyState";
import { useCampus } from "@/context/CampusContext";
import { eventCategories } from "@/data/events";
import { formatDate } from "@/utils/formatDate";

export default function EventsPage() {
  const { events, registeredEventIds } = useCampus();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = events.filter((e) => {
    const matchesCategory = category === "All" || e.category === category;
    const matchesSearch = (e.title + " " + e.description).toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <h1>Campus Events</h1>
      <p className="subtitle">Workshops, hackathons and college events.</p>

      <div className="toolbar">
        <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search events..." />
        <Select id="event-category" value={category} onChange={(e) => setCategory(e.target.value)} options={eventCategories} />
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No events found" message="Try a different word or category." />
      ) : (
        <div className="grid grid-3">
          {filtered.map((e) => (
            <Card
              key={e.id}
              title={e.title}
              badge={
                <>
                  <Badge label={e.category} />
                  {registeredEventIds.includes(e.id) && <Badge label="Registered" tone="green" />}
                </>
              }
              meta={`${formatDate(e.date)} • ${e.time} • ${e.venue}`}
            >
              <div className="card-actions">
                <Button href={`/events/${e.id}`} variant="outline">View details</Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
