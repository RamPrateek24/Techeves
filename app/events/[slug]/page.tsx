import { Suspense } from "react";
import EventsDetails from "@/components/EventDetails";

const EventsDetailsPage = async ({params} : {params: Promise<{ slug:string }>}) => {
    const slug = params.then((p) => p.slug);
    
    return (
        <main>
            <Suspense fallback={<div> Got to Go...</div>}>
                <EventsDetails params={slug} />
            </Suspense>
        </main>
    )
};

export default EventsDetailsPage;