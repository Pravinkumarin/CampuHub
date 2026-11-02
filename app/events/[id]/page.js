"use client";

import { useParams } from "next/navigation";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import { useCampus } from "@/context/CampusContext";
import { formatDate } from "@/utils/formatDate";

export default function EventDetailsPage() {
  const params = useParams();
  const { events, registeredEventIds, toggleRegister } = useCampus();

  const event = events.find((e) => e.id === Number(params.id));

  if (!event) {
    return (
      <>
        <EmptyState title="Event not found" message="This event does not exist." />
        <div className="center">
          <Button href="/events">Back to events</Button>
        </div>
      </>
    );
  }

  const isRegistered = registeredEventIds.includes(event.id);

  return (
    <div className="detail">
      <Badge label={event.category} />
      <h1>{event.title}</h1>
      <p className="detail-meta">
        {formatDate(event.date)} • {event.time} • {event.venue}
      </p>
      <p>{event.description}</p>
      <p className="small">Organised by {event.organizer}</p>

      <div className="card-actions">
        <Button onClick={() => toggleRegister(event.id)} variant={isRegistered ? "secondary" : "primary"}>
          {isRegistered ? "Registered ✓ (click to cancel)" : "Register for this event"}
        </Button>
        <Button href="/events" variant="outline">Back</Button>
      </div>
    </div>
  );
}
