'use client';

import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";
import { useRef } from "react";

export default function EventList({ events }: { events: IEvent[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <h1 className="text-center">
        The Ultimate Hub for Tech Events <br /> Can't Afford to Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, Workshops, and Conferences
      </p>

      <ExploreBtn onScroll={handleScroll} />

      <div className="mt-20 space-y-7" ref={sectionRef}>
        <h3>Featured Events</h3>
        <ul className="events">
          {events?.length > 0 &&
            events.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
