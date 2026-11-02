"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { useCampus } from "@/context/CampusContext";
import { formatDate } from "@/utils/formatDate";

export default function HomePage() {
  const { announcements, events, items } = useCampus();

  const latestAnnouncements = announcements.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);
  const openItems = items.filter((item) => item.status === "Open").length;

  return (
    <>
      <section className="hero">
        <h1>Never miss what happens on campus.</h1>
        <p>Notices, events and lost &amp; found. All in one place.</p>
        <div className="hero-actions">
          <Button href="/announcements">View Announcements</Button>
          <Button href="/events" variant="outline">
            Explore Events
          </Button>
        </div>
      </section>

      <section className="grid grid-3">
        <Card title="Announcements" description="Important notices with date and category." meta={`${announcements.length} notices`}>
          <Link href="/announcements" className="link">Open →</Link>
        </Card>
        <Card title="Campus Events" description="Workshops, hackathons and college events." meta={`${events.length} upcoming`}>
          <Link href="/events" className="link">Open →</Link>
        </Card>
        <Card title="Lost & Found" description="Report or find lost belongings." meta={`${openItems} open items`}>
          <Link href="/lost-found" className="link">Open →</Link>
        </Card>
      </section>

      <section className="section">
        <h2>Latest Announcements</h2>
        <div className="grid grid-3">
          {latestAnnouncements.map((a) => (
            <Card
              key={a.id}
              title={a.title}
              description={a.description}
              badge={<Badge label={a.category} />}
              meta={`${formatDate(a.date)} • ${a.postedBy}`}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Upcoming Events</h2>
        <div className="grid grid-3">
          {upcomingEvents.map((e) => (
            <Card
              key={e.id}
              title={e.title}
              badge={<Badge label={e.category} />}
              meta={`${formatDate(e.date)} • ${e.time} • ${e.venue}`}
            >
              <Link href={`/events/${e.id}`} className="link">View details →</Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
