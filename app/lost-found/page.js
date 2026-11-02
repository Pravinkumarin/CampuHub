"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import SearchBar from "@/components/SearchBar";
import EmptyState from "@/components/EmptyState";
import { useCampus } from "@/context/CampusContext";
import { formatDate } from "@/utils/formatDate";

const tabs = ["All", "Lost", "Found"];

export default function LostFoundPage() {
  const { items, claimItem } = useCampus();
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const filtered = items.filter((item) => {
    const matchesTab = tab === "All" || item.type === tab;
    const text = (item.name + " " + item.description + " " + item.location).toLowerCase();
    return matchesTab && text.includes(query.toLowerCase());
  });

  // Find the selected item from context so the popup updates after claiming
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Lost &amp; Found</h1>
          <p className="subtitle">Report or find lost belongings.</p>
        </div>
        <Button href="/lost-found/report">+ Report an item</Button>
      </div>

      <div className="tabs">
        {tabs.map((t) => (
          <button key={t} className={tab === t ? "tab active" : "tab"} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>

      <div className="toolbar">
        <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search items, e.g. wallet" />
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No items found" message="Try a different search or report a new item." />
      ) : (
        <div className="grid grid-3">
          {filtered.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              badge={
                <>
                  <Badge label={item.type} />
                  <Badge label={item.status} />
                </>
              }
              meta={`${item.location} • ${formatDate(item.date)}`}
              onClick={() => setSelectedId(item.id)}
            />
          ))}
        </div>
      )}

      <Modal open={!!selectedItem} onClose={() => setSelectedId(null)} title={selectedItem ? selectedItem.name : ""}>
        {selectedItem && (
          <>
            <div className="card-top">
              <Badge label={selectedItem.type} />
              <Badge label={selectedItem.status} />
            </div>
            <p>{selectedItem.description}</p>
            <p className="small">Location: {selectedItem.location}</p>
            <p className="small">Date: {formatDate(selectedItem.date)}</p>
            <p className="small">Contact: {selectedItem.contact}</p>
            {selectedItem.status === "Open" && (
              <div className="card-actions">
                <Button onClick={() => claimItem(selectedItem.id)}>Mark as claimed</Button>
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  );
}
