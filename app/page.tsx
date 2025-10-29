import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
import events, {EventItem} from "@/lib/constants";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async() => {
  'use cache';
  cacheLife('hours')
  // const response = await fetch(`${BASE_URL}/api/events`);
  // const { events } = await response.json();

  return (
    <section>
      <h1 className="text-center">The Ultimate Hub for Tech Events <br />Can't Afford to Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, Workshops, and Conferences</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7"> 
        <h3>Featured Events</h3>
        <ul className = "events">
          {events && events.length > 0 && events.map((event:EventItem)=>(
            <li key = {event.title} className="list-none"><EventCard {...event}/></li>
          ))}
        </ul>
      </div>
    </section>
    
  );
};

export default page;