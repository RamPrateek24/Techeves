import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";

const page = () => {
  return (
    <section>
      <h1 className="text-center">The Ultimate Hub for Tech Events <br />Can't Afford to Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, Workshops, and Conferences</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7"> 
        <h3>Featured Events</h3>
        <ul className = "events">
          {events.map((event)=>(
            <li key = {event.title}><EventCard {...event}/></li>
          ))}
        </ul>
      </div>
    </section>
    
  );
};

export default page;