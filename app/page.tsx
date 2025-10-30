import { cacheLife } from "next/cache";
import { IEvent } from "@/database";
import EventList from "@/components/EventList";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Page() {
  'use cache';
  cacheLife('hours');

  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();

  return <EventList events={events} />;
}
